import math
import numpy as np
import random
from constants import *

class Board():

    def __init__(self):
        self.board = self.set_up_board()
        self.is_win = False

    @staticmethod
    def set_up_board():
        board = np.zeros((3, 3), dtype=str)
        for i in range(0, 3):
            for j in range(0, 3):
                board[i][j] = EMPTY

        return board

    def clear_board(self):
        for i in range(0, 3):
            for j in range(0, 3):
                self.board[i][j] = EMPTY

    @staticmethod
    def printBoard(self):
        print(self.board[0][0] + '|' + self.board[0][1] + '|' + self.board[0][2])
        print('-+-+-')
        print(self.board[1][0] + '|' + self.board[1][1] + '|' + self.board[1][2])
        print('-+-+-')
        print(self.board[2][0] + '|' + self.board[2][1] + '|' + self.board[2][2])

    def print_game_over(self,turn):
        self.printBoard(self)
        print("\nGame Over.\n")
        print(" **** " + turn + " won. ****")


    def is_moves_left(self):
        for i in range(0, 3):
            for j in range(0, 3):
                if self.board[i][j] == EMPTY:
                    return True
        return False