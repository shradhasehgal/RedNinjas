import math
import numpy as np
import random
from constants import *

from score import *
from minimax import *

class Move ():

    def __init__(self):
        self.score = Score()
        self.minimax_obj = Minimax()

    def choose_optimal_move(self,board_obj, depth_type, minimax_obj, bigtree_obj):
    
        optimal_val = -math.inf

        # From no.of empty squares we can find the value of depth
        depth = 9

        for i in range(0, 3):
            for j in range(0, 3):
                if(board_obj.board[i][j] == EMPTY):
                    depth = depth-1

        # In case of ultimate : proceed as usual
        if(depth_type == -1):
            current_States = bigtree_obj.bigtree[depth]

            for i in range(len(current_States)):
                comparison = current_States[i][0] == board_obj.board
                equal_arrays = comparison.all()

                if equal_arrays:
                        best_val_row = current_States[i][1]
                        best_val_col = current_States[i][2]

        # In case of depth based : use customized minmax
        else:
            best_val_row, best_val_col, best_val = self.compute_next_move_depths(
                board_obj, depth_type, minimax_obj)

        return best_val_row, best_val_col


    def compute_next_move_depths(self, board_obj, depth_type, minimax_obj):
        
        optimal_val = -math.inf
        random_cell = []
        values=list()

        for i in range(0, 3):
            for j in range(0, 3):

                if board_obj.board[i][j] == EMPTY:

                    # Iterate over all the empty cells to pick one
                    if depth_type == 1:
                        random_cell.append((i, j))

                    else:
                        # Player move?
                        board_obj.board[i][j] = AGENT

                        # Agent is maximizer
                        if depth_type == 2 or depth_type ==4:
                            move_val = minimax_obj.run_custom_minimax(board_obj, 1, depth_type, i, j, False)

                        elif depth_type == 3 :
                            move_val = max(self.score.calc_score_depth_3(board_obj.board,i,j),minimax_obj.run_custom_minimax(board_obj, 1, depth_type, i, j, False))

                        # Player unmove?
                        board_obj.board[i][j] = EMPTY
                        if move_val > optimal_val:

                            best_val_row = i
                            best_val_col = j
                            optimal_val = move_val
                            values.append([i,j,move_val])


        # Randomly picking a cell to fill in
        if(depth_type == 1):
            cell = random.choice(random_cell)
            best_val_row = cell[0]
            best_val_col = cell[1]

        elif depth_type == 3 or depth_type == 4:
            equal_list=list()
            for x in range(0,len(values)):
                if values[x][2]==optimal_val:
                    equal_list.append([values[x][0],values[x][1]])

            x=random.randint(0,len(equal_list)-1) 
            print(x)
            best_val_row = equal_list[x][0]
            best_val_col = equal_list[x][1]

        print("for the agents move, returning ", best_val_row,best_val_col)
        return best_val_row, best_val_col, optimal_val



    def choose_optimal_move_ultimate(self,board_obj,previous_move):
    
        moves=list()
        equalmoves=list()
        CurrentSmallBoardRow = previous_move[2]
        CurrentSmallBoardColoumn = previous_move[3]
        print("Currentsmallboard",CurrentSmallBoardRow,CurrentSmallBoardColoumn)

        if(CurrentSmallBoardRow!=-1 and CurrentSmallBoardColoumn != -1) and (board_obj.checkboard[CurrentSmallBoardRow][CurrentSmallBoardColoumn]==EMPTY) : 
        
            optimal_val = -math.inf

            for i in range(0,3):
                for j in range(0,3):
                    
                    if(board_obj.board[CurrentSmallBoardRow][CurrentSmallBoardColoumn][i][j]==EMPTY):
                        
                        #Player move? 
                        board_obj.board[CurrentSmallBoardRow][CurrentSmallBoardColoumn][i][j]=AGENT
                        cur_board_value,current_checkboard,X = self.score.calc_score_custom(board_obj,0,board_obj.checkboard,CurrentSmallBoardRow,CurrentSmallBoardColoumn,i,j)
                        move_val = self.minimax_obj.ultimate_minimax(board_obj,0,cur_board_value,current_checkboard,CurrentSmallBoardRow,CurrentSmallBoardColoumn,i,j,False,alpha,beta,CAN_PLACE)
                        
                        #Player unmove?
                        board_obj.board[CurrentSmallBoardRow][CurrentSmallBoardColoumn][i][j]=EMPTY
                    
                        moves.append([CurrentSmallBoardRow,CurrentSmallBoardColoumn,i,j,move_val])
                        print("1 ",i,j,move_val)
                        if move_val > optimal_val:

                            best_global_row=CurrentSmallBoardRow
                            best_global_coloumn=CurrentSmallBoardColoumn
                            best_small_row = i
                            best_small_col = j
                            optimal_val = move_val

            for i in range(0,len(moves)-1):
                if moves[i][4]==optimal_val:
                    equalmoves.append(moves[i])
            if len(equalmoves)>1 :
                x=random.randint(0,len(equalmoves)-1)
                print(x)
                best_global_row=equalmoves[x][0]
                best_global_coloumn=equalmoves[x][1]
                best_small_row = equalmoves[x][2]
                best_small_col = equalmoves[x][3]

        else :

            optimal_val = -math.inf

            for m in range(0,3):
                for n in range(0,3):
                    
                    if board_obj.checkboard[m][n]==EMPTY:
                        for i in range(0,3):
                            for j in range(0,3):
                                
                                if(board_obj.board[m][n][i][j]==EMPTY):

                                    #Player move? 
                                    board_obj.board[m][n][i][j]=AGENT
                                    cur_board_value,current_checkboard,X = self.score.calc_score_custom(board_obj,0,board_obj.checkboard,m,n,i,j)
                                    move_val = self.minimax_obj.ultimate_minimax(board_obj,0,cur_board_value,current_checkboard,m,n,i,j,False,alpha,beta,NO_PLACE)
                                    
                                    #Player unmove?
                                    board_obj.board[m][n][i][j]=EMPTY
                                
                                    moves.append([m,n,i,j,move_val])
                                    print("2 ",m,n,i,j,move_val) 
                                    if move_val > optimal_val:

                                        best_global_row=m
                                        best_global_coloumn=n 
                                        best_small_row = i
                                        best_small_col = j
                                        optimal_val = move_val
            
            for i in range(0,len(moves)-1):
                if moves[i][4]==optimal_val:
                    equalmoves.append(moves[i])
            if len(equalmoves)>1 :
                x=random.randint(0,len(equalmoves)-1)
                print(x)
                best_global_row=equalmoves[x][0]
                best_global_coloumn=equalmoves[x][1]
                best_small_row = equalmoves[x][2]
                best_small_col = equalmoves[x][3]


        return best_global_row,best_global_coloumn,best_small_row,best_small_col 
