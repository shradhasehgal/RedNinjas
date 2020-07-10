import math
import numpy as np
import random
from constants import *

from board import *
from minimax import *
from move import *
from player import *
from score import *
from bigtree import *

class Game ():

    def __init__(self):

        self.board_obj = Board()
        self.human_obj = Human()
        self.agent_obj = Agent()
        self.bigtree_obj = Bigtree()
        self.bigtree_obj_human_start = Bigtree()
        self.bigtree_obj_agent_start = Bigtree()
        self.minimax_obj = Minimax()

    def initialize_bigtree(self):

        # Calling the minmax function for the entire tree : if depth_type == -1

        #if agent starts
        self.minimax_obj.minimax(self.board_obj, 0, True,self.bigtree_obj_agent_start)

        #for human starts
        self.minimax_obj.minimax(self.board_obj, 0, False,self.bigtree_obj_human_start)
        

    def use_bigtree(self, is_max):

        if(is_max):
            self.bigtree_obj = self.bigtree_obj_agent_start
        else:
            self.bigtree_obj = self.bigtree_obj_human_start

    def check_win(self):
        for i in range(0, 3):
            if(self.board_obj.board[i][0] == self.board_obj.board[i][1] == self.board_obj.board[i][2] != EMPTY):
                return True

        for j in range(0, 3):
            if(self.board_obj.board[0][j] == self.board_obj.board[1][j] == self.board_obj.board[2][j] != EMPTY):
                return True

        if self.board_obj.board[0][0] == self.board_obj.board[1][1] == self.board_obj.board[2][2] != EMPTY:  # diagonal
            return True

        if self.board_obj.board[0][2] == self.board_obj.board[1][1] == self.board_obj.board[2][0] != EMPTY:  # diagonal
            return True

        return False

    def clear_game(self):
        self.board_obj.clear_board()
    

    def agent_next_move(self, board, depth_type):
        self.board_obj.board = board
        print("self == ", self.board_obj.board)
        r,c = self.agent_obj.agent_turn(self.board_obj,self.minimax_obj,self.bigtree_obj,depth_type)
        win = self.check_win()

        print(r,c,win)

        return r,c,win


    def game(self):
    
        depth_type = int(input("Enter A Depth Type : "))
        self.board_obj.clear_board()
        turn = AGENT
        count = 0
        '''Considering agent always as a maximiser
            if HUMAN should play first ; turn=HUMAN , is_max=False
            if AGENT should play first ; turn=AGENT , is_max=True '''
        

        while(True):

            if(turn == HUMAN):
                self.human_obj.human_turn(self.board_obj)
                count += 1
            else:
                self.agent_obj.agent_turn(self.board_obj,self.minimax_obj,self.bigtree_obj,depth_type)
                count += 1

            did_win = False
            # Now we will check if player X or O has won,for every move after 5 moves.
            if count >= 5:

                did_win = self.check_win()

            if did_win:
                break

            # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
            if count == 9:
                print("\nGame Over.\n")
                print("It's a Tie!!")

            # Now we have to change the player after every move.
            if turn == HUMAN:
                turn = AGENT
            else:
                turn = HUMAN

        # Now we will ask if player wants to restart the game or not.
        restart = input("Do want to play Again?(y/n)")
        if restart == "y" or restart == "Y":
            self.game()


if __name__ == '__main__':
    
    g = Game()

    #agent is always maximizer
    #if agent starts is_max = True else is_max = false
    is_max = False

    #Inialise bigtree for all subsequent games
    g.initialize_bigtree()

    #pass is_max based on which player is starting 
    g.use_bigtree(is_max)

    #start playing
    # g.game()

    a = np.array(([['O',EMPTY,EMPTY],['X','X',EMPTY],[EMPTY,EMPTY,EMPTY]]),dtype=str)

    g.agent_next_move(a,4)
