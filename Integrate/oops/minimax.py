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
            return score*(10-depth)

        if score == -MAX_UTIL:
            return score*(10-depth)

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
        if(depth_type == 3):
            score = self.score.calc_score_depth_3(board_obj.board, row, col)
        if(depth_type == 4):
            score = self.score.calc_score_depth_4(board_obj.board, row, col)

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


    def ultimate_minimax(self,board_obj,depth,parent_utility,parent_chekbox,gr,gc,rowindex,coloumnindex,is_max,alpha,beta,upto_depth):
    
        current_utility,current_checkboard ,globalwin = self.score.calc_score_custom(board_obj,parent_utility,parent_chekbox,gr,gc,rowindex,coloumnindex)

        if globalwin == 1: # This needs a change , send another variable from calscore whether it's a globalwin/no
            return current_utility

        if board_obj.is_moves_left(board_obj)==False :
            return 0

        if depth==upto_depth :
            return current_utility

        if is_max :

            best_val = -math.inf

            if board_obj.checkboard[rowindex][coloumnindex]==EMPTY:

                for i in range(0,3):
                    for j in range(0,3):
                        if(board_obj.board[rowindex][coloumnindex][i][j]==EMPTY):
                            board_obj.board[rowindex][coloumnindex][i][j] = AGENT
                            best_val = max(best_val,self.ultimate_minimax(board_obj,depth+1,current_utility,current_checkboard,rowindex,coloumnindex,i,j,not(is_max),alpha,beta,upto_depth))
                            board_obj.board[rowindex][coloumnindex][i][j]=EMPTY
                            if best_val >= beta :
                                return best_val

                            if best_val > alpha:
                                alpha = best_val
            
            else :

                for m in range(0,3):
                    for n in range(0,3):
                        if board_obj.checkboard[m][n]==EMPTY:
                            # print("m,n",m,n)
                            for i in range(0,3):
                                for j in range(0,3):
                                    if(board_obj.board[m][n][i][j]==EMPTY):
                                        board_obj.board[m][n][i][j] = AGENT
                                        best_val = max(best_val,self.ultimate_minimax(board_obj,depth+1,current_utility,current_checkboard,m,n,i,j,not(is_max),alpha,beta,upto_depth))
                                        board_obj.board[m][n][i][j]=EMPTY
                                        if best_val >= beta :
                                            return best_val

                                        if best_val > alpha:
                                            alpha = best_val

            return best_val

        else:

            best_val = math.inf

            if board_obj.checkboard[rowindex][coloumnindex]==EMPTY:

                for i in range(0,3):
                    for j in range(0,3):
                        if(board_obj.board[rowindex][coloumnindex][i][j]==EMPTY):
                            board_obj.board[rowindex][coloumnindex][i][j] = AGENT
                            best_val = min(best_val,self.ultimate_minimax(board_obj,depth+1,current_utility,current_checkboard,rowindex,coloumnindex,i,j,not(is_max),alpha,beta,upto_depth))
                            board_obj.board[rowindex][coloumnindex][i][j]=EMPTY
                            if best_val <= alpha:
                                return best_val

                            if best_val < beta:
                                beta = best_val
            
            else :

                for m in range(0,3):
                    for n in range(0,3):
                        if board_obj.checkboard[m][n]==EMPTY:
                            for i in range(0,3):
                                for j in range(0,3):
                                    if(board_obj.board[m][n][i][j]==EMPTY):
                                        board_obj.board[m][n][i][j] = AGENT
                                        best_val = min(best_val,self.ultimate_minimax(board_obj,depth+1,current_utility,current_checkboard,m,n,i,j,not(is_max),alpha,beta,upto_depth))
                                        board_obj.board[m][n][i][j]=EMPTY
                                        if best_val <= alpha:
                                            return best_val

                                        if best_val < beta:
                                            beta = best_val

            return best_val
