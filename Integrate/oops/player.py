import math
import numpy as np
import random
from constants import *

from move import *

class Human():



    def human_turn(self,board_obj):
    
        board_obj.printBoard(board_obj)
        print("It's your turn," + HUMAN + ".Move to which place?")

        while(True):
            move = int(input())
            row = int(move/3)
            col = int(move % 3)

            if board_obj.board[row][col] == EMPTY:
                board_obj.board[row][col] = HUMAN
                break
            else:
                print("That place is already filled.\nMove to which place?")
                continue

class Agent():

    def __init__(self):
        self.move_obj = Move()

    def agent_turn(self,board_obj,minimax_obj,bigtree_obj, depth_type=-1):

        board_obj.printBoard(board_obj)
        print(AGENT + " is moving please wait ...")

        r, c = self.move_obj.choose_optimal_move(board_obj, depth_type, minimax_obj, bigtree_obj)
        board_obj.board[r][c] = AGENT

        return r,c


    def agent_turn_ultimate(self,board_obj,previous_move):
        current_move = np.array(([-1,-1,-1,-1]), dtype=int)
        board_obj.printBoard(board_obj)
        print(AGENT + " is moving please wait ...")
        
        gr,gc,sr,sc = self.move_obj.choose_optimal_move_ultimate(board_obj,previous_move)
        temp_move=list()
        temp_move.extend([gr,gc,sr,sc])
        current_move=temp_move
        board_obj.board[gr][gc][sr][sc] = AGENT

        return current_move