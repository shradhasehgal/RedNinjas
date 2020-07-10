import math
import numpy as np
import random
from constants import *


class Score():

    def calc_score(self,b):
    
        for r in range(0, 3):
            if b[r][0] == b[r][1] == b[r][2] != EMPTY:
                if b[r][0] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL

        for c in range(0, 3):
            if b[0][c] == b[1][c] == b[2][c] != EMPTY:
                if b[0][c] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL

        if b[0][0] == b[1][1] == b[2][2] != EMPTY:
            if b[0][0] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL

        if b[0][2] == b[1][1] == b[2][0] != EMPTY:
            if b[0][2] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL

        return 0

    def check_win(self,b):
        for r in range(0, 3):
            if b[r][0] == b[r][1] == b[r][2] != EMPTY:
                if b[r][0] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL

        for c in range(0, 3):
            if b[0][c] == b[1][c] == b[2][c] != EMPTY:
                if b[0][c] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL

        if b[0][0] == b[1][1] == b[2][2] != EMPTY:
            if b[0][0] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL

        if b[0][2] == b[1][1] == b[2][0] != EMPTY:
            if b[0][2] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL

        return 0

    
    def calc_score_depth_2(self,b, i, j):
    
        # If win state return max utility
        if self.check_win(b) != 0:
            return self.check_win(b)

        # check for corners of the board : 3 wins possible
        if((i == 0 and j == 0) or (i == 0 and j == 2) or (i == 2 and j == 0) or (i == 2 and j == 2)):
            if(b[i][j]==AGENT):
                return 3
            else: 
                return -3

        # check for the sides of the board : 2 wins possible
        if ((i == 0 and j == 1) or (i == 1 and j == 0) or (i == 1 and j == 2) or (i == 2 and j == 1)):
            if(b[i][j]==AGENT):
                return 2
            else:
                return -2

        # check for center of the board : 4 wins possible
        if((i == 1 and j == 1)):
            if(b[i][j]==AGENT):
                return 4
            else:
                return -4