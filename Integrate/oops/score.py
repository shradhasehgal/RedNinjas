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
                    return -MAX_UTIL/2

        for c in range(0,3):
            if b[0][c] == b[1][c] == b[2][c] != EMPTY :
                if b[0][c] == AGENT:
                    return MAX_UTIL
                else:
                    return -MAX_UTIL/2

        if b[0][0]==b[1][1]==b[2][2] != EMPTY :
            if b[0][0] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL/2

        if b[0][2]==b[1][1]==b[2][0] != EMPTY :
            if b[0][2] == AGENT:
                return MAX_UTIL
            else :
                return -MAX_UTIL/2

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
                    # print("row1")
                    score += flag_row
                    flag_row +=1  
                elif b[row][j]!=EMPTY :
                    # print("row2")
                    score = score - 2 

                    
        #checking the element in the same coloumn 
        flag_coloumn = 1
        # print("row  : ",row)
        for i in range(0,3):
            if i!=row :
                if b[i][coloumn]==b[row][coloumn]:
                    # print("coloumn1",i)
                    score +=flag_coloumn
                    flag_coloumn +=1   
                elif b[i][coloumn]!=EMPTY :
                    # print("coloumn2",i)
                    score = score - 2 


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
                                # print("diagonal1")
                                score +=flag_diagonal
                                flag_diagonal += 1 
                            elif b[i][j]!=EMPTY :
                                # print("diagonal2")
                                score = score - 1  

        if b[row][coloumn]==AGENT :
            return score 
        else :
            return -score 
    
    def calc_score_depth_4(self,b,row,coloumn, normal=True):
        
        if(normal):
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

        elif row==2 and coloumn==0 :
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
        other_loss = -4 
        for j in range(0,3):
            if  j!=coloumn:
                if b[row][j]==b[row][coloumn]:
                    score += flag_row
                    flag_row +=3 
                elif b[row][j]!=EMPTY :
                    score += other_loss
                    other_loss += 7    

                    
        #checking the element in the same coloumn 
        flag_coloumn = 1
        other_loss = -4 
        for i in range(0,3):
            if i!=row :
                if b[i][coloumn]==b[row][coloumn]:
                    score +=flag_coloumn
                    flag_coloumn += 3    
                elif b[i][coloumn]!=EMPTY :
                    score += other_loss
                    other_loss += 7  

        #checking the element in the diagonal 
        flag_diagonal = 1
        other_loss = -4   
        if diagonal :
            for i in range(0,3):
                for j in range (0,3):
                    if i!=row and j!=coloumn:
                        row_diff= row - i 
                        coloumn_diff = coloumn - j 
                        if row_diff == coloumn_diff :
                            if b[i][j]== b[row][coloumn]:
                                score +=flag_diagonal
                                flag_diagonal += 3 
                            elif b[i][j]!=EMPTY :
                                score += score + other_loss
                                other_loss = other_loss + 7   

        # print("score",score)
        # print("enddddddddddddddddddddd")
        if b[row][coloumn]==AGENT :
            return score 
        else :
            return -score


    def calc_score_custom(self,b,parent_utility,parent_checkboard,gr,gc,sr,sc):
        child_checkboard = np.copy(parent_checkboard)
        child_utility =0 

        smallboard=b.board[gr][gc]
        smallboardwin=0
        globalwin=0
        score=0 

        #Win or loss for smallboard 
        for r in range(0,3):
            if smallboard[r][0] == smallboard[r][1] == smallboard[r][2] != EMPTY:
                smallboardwin=1
                if smallboard[r][0] == AGENT:
                    child_checkboard[gr][gc]=AGENT
                    score+=MAX_UTIL
                else:
                    child_checkboard[gr][gc]=HUMAN
                    score-=MAX_UTIL

        for c in range(0,3):
            if smallboard[0][c] == smallboard[1][c] == smallboard[2][c] != EMPTY :
                smallboardwin=1
                if smallboard[0][c] == AGENT:
                    child_checkboard[gr][gc]=AGENT
                    score+=MAX_UTIL
                else:
                    child_checkboard[gr][gc]=HUMAN
                    score-=MAX_UTIL 

        if smallboard[0][0]==smallboard[1][1]==smallboard[2][2] != EMPTY :
            smallboardwin=1
            if smallboard[0][0] == AGENT:
                child_checkboard[gr][gc]= AGENT
                score+=MAX_UTIL
            else:
                child_checkboard[gr][gc] = HUMAN 
                score-=MAX_UTIL

        if smallboard[0][2]==smallboard[1][1]==smallboard[2][0] != EMPTY :
            smallboardwin=1
            if smallboard[0][2] == AGENT:
                child_checkboard[gr][gc]= AGENT
                score+=MAX_UTIL
            else:
                child_checkboard[gr][gc] = HUMAN
                score-=MAX_UTIL 

        #If all the cells are filled in a small box and no one has won 
        flag=0
        for m in range(0,3):
            for n in range(0,3):
                if smallboard[m][n]==EMPTY:
                    flag=1
        if flag==0 : #No Empty squares are left 
            child_checkboard[gr][gc]=TIE 

        if smallboardwin==1 :
            '''There is chance for the Global wins/loss
                The win/loss is already updated in child_chekboard 
                Check for the wins in global board push the utilities further for this small board
                Add this to parent's utility 
            '''
            
            for r in range(0,3):
                if child_checkboard[r][0] == child_checkboard[r][1] == child_checkboard[r][2] != EMPTY:
                    globalwin=1
                    if child_checkboard[r][0] == AGENT:
                        score+=2*MAX_UTIL
                    else:
                        score-=2*MAX_UTIL

            for c in range(0,3):
                if child_checkboard[0][c] == child_checkboard[1][c] == child_checkboard[2][c] != EMPTY:
                    globalwin=1
                    if child_checkboard[0][c] == AGENT:
                        score+=2*MAX_UTIL
                    
                    else:
                        score-=2*MAX_UTIL 

            if child_checkboard[0][0]==child_checkboard[1][1]==child_checkboard[2][2] != EMPTY :
                globalwin=1 
                if child_checkboard[0][0] == AGENT:
                    score+=2*MAX_UTIL
                else:
                    score-=2*MAX_UTIL

            if child_checkboard[0][2]==child_checkboard[1][1]==child_checkboard[2][0] != EMPTY :
                globalwin=1
                if child_checkboard[0][2] == AGENT:
                    score+=2*MAX_UTIL
                else:
                    score-=2*MAX_UTIL

            child_utility=parent_utility+score

        elif smallboardwin==0 : 
            '''If there is no win/loss in smallboard there won;t be any change in the child_board
                Score will remain 0 '''
            if flag==1 :
                child_utility = parent_utility + self.calc_score_depth_4(smallboard,sr,sc,False)

        return child_utility,child_checkboard,globalwin

        