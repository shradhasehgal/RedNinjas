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
        self.minimax_obj = Minimax()

    def initialize_bigtree(self,is_max):

        # Calling the minmax function for the entire tree : if depth_type == -1
        self.minimax_obj.minimax(self.board_obj, 0, is_max,self.bigtree_obj)

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

                for i in range(0, 3):
                    if(self.board_obj.board[i][0] == self.board_obj.board[i][1] == self.board_obj.board[i][2] != EMPTY):
                        self.board_obj.print_game_over(turn)
                        did_win = True
                        break

                for j in range(0, 3):
                    if(self.board_obj.board[0][j] == self.board_obj.board[1][j] == self.board_obj.board[2][j] != EMPTY):
                        self.board_obj.print_game_over(turn)
                        did_win = True
                        break

                if self.board_obj.board[0][0] == self.board_obj.board[1][1] == self.board_obj.board[2][2] != EMPTY:  # diagonal
                    self.board_obj.print_game_over(turn)
                    did_win = True
                    break
                if self.board_obj.board[0][2] == self.board_obj.board[1][1] == self.board_obj.board[2][0] != EMPTY:  # diagonal
                    self.board_obj.print_game_over(turn)
                    did_win = True
                    break

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

    #is agent maximizer
    is_max = True

    #Inialise bigtree for all subsequent games
    g.initialize_bigtree(is_max)

    #start playing
    g.game()
