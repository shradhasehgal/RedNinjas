import math
import numpy as np
import random 

#Implementation of Two Player Tic-Tac-Toe game in Python.

#ASSUME AGENT IS MAXIMIZER AND 
''' We will make the board using dictionary 
    in which keys will be the location(i.e : top-left,mid-right,etc.)
    and initialliy it's values will be empty space and then after every move 
    we will change the value according to player's choice of move. '''

global BigTree 
theBoard = np.zeros((3,3),dtype=str)

board_keys = []
HUMAN = 'X'
AGENT = 'O'
EMPTY = ' '
MAX_UTIL = 10 

def set_up_board():
    for i in range(0,3):
        for j in range(0,3):
            theBoard[i][j]=EMPTY

''' We will have to print the updated board after every move in the game and 
    thus we will make a function in which we'll define the printBoard function
    so that we can easily print the board everytime by calling this function. '''

def printBoard(board):
    print(board[0][0] + '|' + board[0][1] + '|' + board[0][2])
    print('-+-+-')
    print(board[1][0] + '|' + board[1][1] + '|' + board[1][2])
    print('-+-+-')
    print(board[2][0] + '|' + board[2][1] + '|' + board[2][2])

def print_game_over(turn):
    printBoard(theBoard)
    print("\nGame Over.\n")                
    print(" **** " +turn + " won. ****")  


def is_moves_left(board):

    for i in range(0,3):
        for j in  range(0,3):
            if board[i][j]==EMPTY:
                return True
    return False

def calc_score(b,row,coloumn):

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

    
    #Cross-over 
    if row==coloumn :
        if row==1:
            score=4
        else :
            score=3 

    if row==2 and coloumn==0 :
        score=3
    elif row==0 and coloumn==2 :
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

                    
def minimax(board,depth,row,coloumn,is_max):
    
    score = calc_score(board,row,coloumn)
    if score == MAX_UTIL:
        return score

    if score == -MAX_UTIL:
        return score

    if is_moves_left(board)==False :
        return 0

    if depth==3 :
        return score

    if is_max :

        best_val = -math.inf

        for i in range(0,3):
            for j in range(0,3):
                if(board[i][j]==EMPTY):
                    board[i][j] = AGENT
                    best_val = max(best_val,minimax(board,depth+1,i,j,not(is_max)))
                    board[i][j]=EMPTY

        return best_val

    else:

        best_val = math.inf

        for i in range(0,3):
            for j in range(0,3):
                if(board[i][j]==EMPTY):
                    board[i][j] = HUMAN
                    best_val = min(best_val,minimax(board,depth+1,i,j,not(is_max)))
                    board[i][j]=EMPTY

        return best_val


def choose_optimal_move(board):
    
    optimal_val = -math.inf

    values=list()
    for i in range(0,3):
        for j in range(0,3):
            
            if(board[i][j]==EMPTY):

                #Player move? 
                board[i][j]=AGENT
                
                move_val = calc_score(board,i,j)
                move_val = calc_score(board,i,j) + minimax(board,1,i,j,False)

                print(i,j,calc_score(board,i,j),minimax(board,1,i,j,False),move_val)
                #Player unmove?
                board[i][j]=EMPTY
            
                if move_val > optimal_val:

                    best_val_row = i
                    best_val_col = j
                    optimal_val = move_val
                    values.append([i,j,move_val])

    equal_list=list()
    for x in range(0,len(values)):
        if values[x][2]==optimal_val:
            equal_list.append([values[x][0],values[x][1]])

    x=random.randint(0,len(equal_list)-1) 
    print(x)
    best_val_row = equal_list[x][0]
    best_val_col = equal_list[x][1]
    
    return best_val_row, best_val_col, optimal_val
            
def human_turn(board):
    
    printBoard(theBoard)
    print("It's your turn," + HUMAN + ".Move to which place?")
            
    while(True):
        move = int(input())
        row = int(move/3)
        col = int(move%3)

        if theBoard[row][col] == EMPTY:
            theBoard[row][col] = HUMAN
            break
        else:
            print("That place is already filled.\nMove to which place?")
            continue

def agent_turn(board):
    printBoard(theBoard)
    print(AGENT + " is moving please wait ...")
    
    r,c,val = choose_optimal_move(board)
    theBoard[r][c] = AGENT

# Now we'll write the main function which has all the gameplay functionality.
def game():

    set_up_board()
    turn = HUMAN
    count = 0

    while(True):
        
        if(turn==HUMAN):
            human_turn(theBoard)
            count+=1
        else:
            agent_turn(theBoard)
            count+=1
        
        did_win = False
        # Now we will check if player X or O has won,for every move after 5 moves. 
        if count >= 5:
            
            for i in range (0,3):
                if(theBoard[i][0]==theBoard[i][1]==theBoard[i][2]!=EMPTY):
                    print_game_over(turn)
                    did_win=True         
                    break
            
            for j in range(0,3):
                if(theBoard[0][j]==theBoard[1][j]==theBoard[2][j]!=EMPTY):
                    print_game_over(turn)
                    did_win=True         
                    break
            
            if theBoard[0][0] == theBoard[1][1] == theBoard[2][2] != EMPTY: # diagonal
                print_game_over(turn)
                did_win=True         
                break
            if theBoard[0][1] == theBoard[1][1] == theBoard[2][0] != EMPTY: # diagonal
                print_game_over(turn)
                did_win=True         
                break 

        if did_win :
            break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")                
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn ==HUMAN:
            turn = AGENT
        else:
            turn = HUMAN        
    
    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":  
        game()

if __name__ == "__main__":
    game()