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

    def calc_score_depth_3(self,b,row,coloumn):
    
        for r in range(0,3):
            if b[r][0] == b[r][1] == b[r][2] != EMPTY:
                if b[r][0] == AGENT:
                    return MAX_UTIL
                else:
                    return 0 

        for c in range(0,3):
            if b[0][c] == b[1][c] == b[2][c] != EMPTY :
                if b[0][c] == AGENT:
                    return MAX_UTIL
                else:
                    return 0 

        if b[0][0]==b[1][1]==b[2][2] != EMPTY :
            if b[0][0] == AGENT:
                return MAX_UTIL
            else:
                return 0 

        if b[0][2]==b[1][1]==b[2][0] != EMPTY :
            if b[0][2] == AGENT:
                return MAX_UTIL
            else:
                return 0 

        diagonal=0 
        # Cross-over 
        if row==coloumn :
            diagonal=1
            if row==1:
                score=4
            else :
                score=3 

        if row==2 and coloumn==0 :
            diagonal=1
            score=3
        elif row==0 and coloumn==2 :
            diagonal=1
            score=3 
        else :
            score=2 

        #Players Win 
        #checking the element in the same row 
        flag_row = 1
        for j in range(0,3):
            if  j!=coloumn:
                if b[row][j]==b[row][coloumn]:
                    score += flag_row
                    flag_row +=1  
                elif b[row][j]!=EMPTY :
                    score = score - 1

                    
        #checking the element in the same coloumn 
        flag_coloumn = 1
        for i in range(0,3):
            if i!=row :
                if b[i][coloumn]==b[row][coloumn]:
                    score +=flag_coloumn
                    flag_coloumn +=1   
                if b[row][j]!=EMPTY :
                    score = score - 1 


        #checking the element in the diagonal 
        if diagonal : 
            flag_diagonal = 1
            for i in range(0,3):
                for j in range (0,3):
                    if i!=row and j!=coloumn:
                        row_diff= row - i 
                        coloumn_diff = coloumn - j 
                        if row_diff == coloumn_diff :
                            if b[i][j]==b[row][coloumn]:
                                score +=flag_diagonal
                                flag_diagonal += 1 
                            elif b[i][j]!=EMPTY :
                                score = score - 2  

        if b[row][coloumn]==AGENT :
            return score 
        else :
            return -score
    
    def calc_score_depth_4(self,b,row,coloumn):
    
        for r in range(0,3):
            if b[r][0] == b[r][1] == b[r][2] != EMPTY:
                if b[r][0] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL

        for c in range(0,3):
            if b[0][c] == b[1][c] == b[2][c] != EMPTY :
                if b[0][c] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL

        if b[0][0]==b[1][1]==b[2][2] != EMPTY :
            if b[0][0] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL 

        if b[0][2]==b[1][1]==b[2][0] != EMPTY :
            if b[0][2] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL 


        diagonal=0     
        #Cross-over 
        if row==coloumn :
            diagonal=1
            if row==1:
                score=4
            else :
                score=3 

        if row==2 and coloumn==0 :
            diagonal=1
            score=3
        elif row==0 and coloumn==2 :
            diagonal=1
            score=3 
        else :
            score=2 

        #Players Win + Opponents loss
        #checking the element in the same row 
        flag_row = 1
        other_loss = 1
        for j in range(0,3):
            if  j!=coloumn:
                if b[row][j]==b[row][coloumn]:
                    score += flag_row
                    flag_row +=1  
                elif b[row][j]!=EMPTY :
                    score += other_loss
                    other_loss += 1 

                    
        #checking the element in the same coloumn 
        flag_coloumn = 1
        other_loss = 1
        for i in range(0,3):
            if i!=row :
                if b[i][coloumn]==b[row][coloumn]:
                    score +=flag_coloumn
                    flag_coloumn +=1   
                if b[row][j]!=EMPTY :
                    score += other_loss
                    other_loss += 1 

        #checking the element in the diagonal 
        flag_diagonal = 1
        other_loss = 1 
        if diagonal :
            for i in range(0,3):
                for j in range (0,3):
                    if i!=row and j!=coloumn:
                        row_diff= row - i 
                        coloumn_diff = coloumn - j 
                        if row_diff == coloumn_diff :
                            if b[i][j]== b[row][coloumn]:
                                score +=flag_diagonal
                                flag_diagonal += 1 
                            elif b[i][j]!=EMPTY :
                                score += score + other_loss
                                other_loss = other_loss + 1

        if b[row][coloumn]==AGENT :
            return score 
        else :
            return -score