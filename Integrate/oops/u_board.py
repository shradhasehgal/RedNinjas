import math
import numpy as np
import random
from constants import *

class UBoard():

    def __init__(self):
        self.board = self.set_up_board()
        self.checkboard = self.set_checkboard()
        self.is_win = False

    @staticmethod
    def set_up_board():
        board = np.zeros((3,3),dtype=object)
        for i in range(0,3):
            for j in range(0,3):
                smallboard=np.zeros((3,3),dtype=str)
                for m in range(0,3):
                    for n in range(0,3):
                        smallboard[m][n]=EMPTY
                board[i][j]=smallboard

        return board

    @staticmethod
    def set_checkboard():
        checkboard= np.zeros((3,3),dtype=str)
        for i in range(0,3):
            for j in range(0,3):
                checkboard[i][j]=EMPTY

        return checkboard

    def clear_board(self):
        for i in range(0, 3):
            for j in range(0, 3):
                self.board[i][j] = EMPTY

    @staticmethod
    def printBoard(self):
        for i in range(0,3): #outerrows
            sb1=self.board[i][0]
            sb2=self.board[i][1]
            sb3=self.board[i][2]
            for j in range(0,3): # innerrows
                print(sb1[j][0] + '|' + sb1[j][1] + '|' + sb1[j][2] + " | " ,end=" ")
                print(sb2[j][0] + '|' + sb2[j][1] + '|' + sb2[j][2] + " | " ,end=" ")
                print(sb3[j][0] + '|' + sb3[j][1] + '|' + sb3[j][2] ,)
                if j<2:
                    print('-+-+-' + ' |' + '  -+-+-' + ' |' + '  -+-+-')
            if i<2:
                print("-------------------------")

    def print_game_over(self,turn):
        print("\nGame Over.\n")                
        print(" **** " +turn + " won. ****")  


    def is_moves_left(self,board):
        for r in range(0,3):
            for c in range(0,3):
                for i in range(0,3):
                    for j in  range(0,3):
                        if self.board[r][c][i][j]==EMPTY:
                            return True
        return False


    def checkwin(self):
        # Cheking smallboards for win
        for i in range(0,3):
            for j in range(0,3):
                if self.checkboard[i][j]==EMPTY:
                    smallboard=self.board[i][j]
                    for r in range(0,3):
                        if smallboard[r][0] == smallboard[r][1] == smallboard[r][2] != EMPTY:
                            if smallboard[r][0] == AGENT:
                                self.checkboard[i][j]=AGENT
                            else:
                                self.checkboard[i][j]=HUMAN

                    for c in range(0,3):
                        if smallboard[0][c] == smallboard[1][c] == smallboard[2][c] != EMPTY :
                            if smallboard[0][c] == AGENT:
                                self.checkboard[i][j]=AGENT
                            else:
                                self.checkboard[i][j]=HUMAN 

                    if smallboard[0][0]==smallboard[1][1]==smallboard[2][2] != EMPTY :
                        if smallboard[0][0] == AGENT:
                            self.checkboard[i][j]= AGENT
                        else:
                            self.checkboard[i][j] = HUMAN 

                    if smallboard[0][2]==smallboard[1][1]==smallboard[2][0] != EMPTY :
                        if smallboard[0][2] == AGENT:
                            self.checkboard[i][j]= AGENT
                        else:
                            self.checkboard[i][j] = HUMAN 

                    #If all the cells are filled in a small box and no one has won 
                    flag=0
                    for m in range(0,3):
                        for n in range(0,3):
                            if smallboard[m][n]==EMPTY:
                                flag=1
                    if flag==0 :
                        self.checkboard[i][j]=TIE

        # checking the globalboard for win 
        for r in range(0,3):
            if self.checkboard[r][0] == self.checkboard[r][1] == self.checkboard[r][2] != EMPTY:
                return 1

        for c in range(0,3):
            if self.checkboard[0][c] == self.checkboard[1][c] == self.checkboard[2][c] != EMPTY:
                return 1

        if self.checkboard[0][0]==self.checkboard[1][1]==self.checkboard[2][2] != EMPTY : 
            return 1 
        
        if self.checkboard[0][2]==self.checkboard[1][1]==self.checkboard[2][0] != EMPTY :
            return 1 

        return 0