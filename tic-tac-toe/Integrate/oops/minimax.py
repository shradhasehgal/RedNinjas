import math
import numpy as np
import random
from constants import *

from score import *

class Minimax ():

    def __init__(self):

        self.score = Score()

    def minimax(self, board_obj, depth, is_max, bigtree_obj):
    
        score = self.score.calc_score(board_obj.board)
        dup_board = board_obj.board.copy()
        if score == MAX_UTIL:
            return score

        if score == -MAX_UTIL:
            return score

        if board_obj.is_moves_left() == False:
            return 0

        if is_max:

            best_val = -math.inf

            for i in range(0, 3):
                for j in range(0, 3):
                    if(board_obj.board[i][j] == EMPTY):
                        board_obj.board[i][j] = AGENT
                        current_board_value = self.minimax(board_obj, depth+1, not(is_max), bigtree_obj)
                        if current_board_value > best_val:
                            best_val = current_board_value
                            row_value = i
                            coloumn_value = j
                        board_obj.board[i][j] = EMPTY

            bigtree_obj.bigtree[depth].append([dup_board, row_value, coloumn_value, best_val])
            return best_val

        else:

            best_val = math.inf

            for i in range(0, 3):
                for j in range(0, 3):
                    if(board_obj.board[i][j] == EMPTY):
                        board_obj.board[i][j] = HUMAN
                        current_board_value = self.minimax(board_obj, depth+1, not(is_max), bigtree_obj)
                        if current_board_value < best_val:
                            best_val = current_board_value
                            row_value = i
                            coloumn_value = j
                        board_obj.board[i][j] = EMPTY

            bigtree_obj.bigtree[depth].append([dup_board, row_value, coloumn_value, best_val])
            return best_val


    def run_custom_minimax(self, board_obj, depth, depth_type, row, col, is_max):
    
        flag = 0

        # reached the max depth allowed
        if depth == depth_type-1:
            flag = 1

        if(depth_type == 2):
            score = self.score.calc_score_depth_2(board_obj.board, row, col)
        # if(depth_type == 3):
        #     score = calc_score_depth_3(b)
        # if(depth_type == 4):
        #     score = calc_score_depth_4(b)

        #If max depth reached, return score
        if flag == 1 : 
            return score

        if score == MAX_UTIL:   
            return score

        if score == -MAX_UTIL:
            return score

        if board_obj.is_moves_left() == False:
            return 0

        if is_max:
            best_val = -math.inf

            for i in range(0, 3):
                for j in range(0, 3):
                    if(board_obj.board[i][j] == EMPTY):
                        board_obj.board[i][j] = AGENT

                        best_val = max(best_val, self.run_custom_minimax(
                            board_obj, depth+1, depth_type, i, j, not(is_max)))
                        board_obj.board[i][j] = EMPTY
            return best_val

        else:
            best_val = math.inf

            for i in range(0, 3):
                for j in range(0, 3):
                    if(board_obj.board[i][j] == EMPTY):
                        board_obj.board[i][j] = HUMAN
                        best_val = min(best_val, self.run_custom_minimax(
                            board_obj, depth+1, depth_type, i, j, not(is_max)))
                        board_obj.board[i][j] = EMPTY
            return best_val