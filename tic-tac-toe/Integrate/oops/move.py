import math
import numpy as np
import random
from constants import *


class Move ():

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
                        move_val = minimax_obj.run_custom_minimax(board_obj, 0, depth_type, i, j, False)

                        # Player unmove?
                        board_obj.board[i][j] = EMPTY
                        if move_val > optimal_val:

                            best_val_row = i
                            best_val_col = j
                            optimal_val = move_val

        # Randomly picking a cell to fill in
        if(depth_type == 1):
            cell = random.choice(random_cell)
            best_val_row = cell[0]
            best_val_col = cell[1]

        print("for the agents move, returning ", best_val_row,best_val_col)
        return best_val_row, best_val_col, optimal_val