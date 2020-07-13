import math
import numpy as np

#Implementation of Two Player Tic-Tac-Toe game in Python.

#ASSUME AGENT IS MAXIMIZER AND 
''' We will make the board using dictionary 
    in which keys will be the location(i.e : top-left,mid-right,etc.)
    and initialliy it's values will be empty space and then after every move 
    we will change the value according to player's choice of move. '''

global BigTree 
theBoard = np.zeros((3,3),dtype=object)
checkboard= np.zeros((3,3),dtype=str)
# global previous_move 
# previous_move = np.zeros((4,), dtype=int)
board_keys = []
HUMAN = 'X'
AGENT = 'O'
EMPTY = ' '
TIE = 'T'
MAX_UTIL = 10
alpha = -10
beta = 10
MAX_DEPTH = 5

def set_up_board():
    for i in range(0,3):
        for j in range(0,3):
            smallboard=np.zeros((3,3),dtype=str)
            for m in range(0,3):
                for n in range(0,3):
                    smallboard[m][n]=EMPTY
            theBoard[i][j]=smallboard 

    for i in range(0,3):
        for j in range(0,3):
            checkboard[i][j]=EMPTY


''' We will have to print the updated board after every move in the game and 
    thus we will make a function in which we'll define the printBoard function
    so that we can easily print the board everytime by calling this function. '''

def printBoard(board):
    for i in range(0,3): #outerrows
        sb1=board[i][0]
        sb2=board[i][1]
        sb3=board[i][2]
        for j in range(0,3): # innerrows
            print(sb1[j][0] + '|' + sb1[j][1] + '|' + sb1[j][2] + " | " ,end=" ")
            print(sb2[j][0] + '|' + sb2[j][1] + '|' + sb2[j][2] + " | " ,end=" ")
            print(sb3[j][0] + '|' + sb3[j][1] + '|' + sb3[j][2] ,)
            if j<2:
                print('-+-+-' + ' |' + '  -+-+-' + ' |' + '  -+-+-')
        if i<2:
            print("-------------------------")

def checkwin_smallboard(smallboard, i,j,check=checkboard):

    print("evaluating board", smallboard)
    small_win_val = -1

    for r in range(0,3):
        if smallboard[r][0] == smallboard[r][1] == smallboard[r][2] != EMPTY:
            if smallboard[r][0] == AGENT:
                check[i][j]=AGENT
                small_win_val = 1
            else:
                check[i][j]=HUMAN
                small_win_val = 2

    for c in range(0,3):
        if smallboard[0][c] == smallboard[1][c] == smallboard[2][c] != EMPTY :
            if smallboard[0][c] == AGENT:
                check[i][j]=AGENT
                small_win_val = 1
            else:
                check[i][j]=HUMAN
                small_win_val = 2 

    if smallboard[0][0]==smallboard[1][1]==smallboard[2][2] != EMPTY :
        if smallboard[0][0] == AGENT:
            check[i][j]= AGENT
            small_win_val = 1
        else:
            check[i][j] = HUMAN 
            small_win_val = 2

    if smallboard[0][2]==smallboard[1][1]==smallboard[2][0] != EMPTY :
        if smallboard[0][2] == AGENT:
            check[i][j]= AGENT
            small_win_val = 1
        else:
            check[i][j] = HUMAN
            small_win_val = 2 

    #If all the cells are filled in a small box and no one has won 
    flag=0
    for m in range(0,3):
        for n in range(0,3):
            if smallboard[m][n]==EMPTY:
                flag=1
    if flag==0 :
        check[i][j]=TIE
    
    if(small_win_val == -1):
        small_win_val = 0
    print("in small checkboard", check)
    return small_win_val

def checkwin_global(checkboard=checkboard):
    for r in range(0,3):
        if checkboard[r][0] == checkboard[r][1] == checkboard[r][2] != EMPTY:
            if checkboard[r][0] == AGENT:
                return 1
            else:
                return 2

    for c in range(0,3):
        if checkboard[0][c] == checkboard[1][c] == checkboard[2][c] != EMPTY:
            if checkboard[0][c] == AGENT:
                return 1
            else:
                return 2

    if checkboard[0][0]==checkboard[1][1]==checkboard[2][2] != EMPTY : 
        if checkboard[0][0]==AGENT:
            return 1
        else:
            return 2 
    
    if checkboard[0][2]==checkboard[1][1]==checkboard[2][0] != EMPTY :
        if checkboard[0][2] == AGENT:
            return 1
        else:
            return 2 

    return 0

def checkwin(board):
    print("from checkwin ", board)
    # Cheking smallboards for win
    for i in range(0,3):
        for j in range(0,3):
            if checkboard[i][j]==EMPTY:
                smallboard=board[i][j]
                checkwin_smallboard(smallboard,i,j)

    # checking the globalboard for win 
    print("returning ", checkwin_global())
    return checkwin_global()

def print_game_over(turn):
    print("\nGame Over.\n")                
    print(" **** " +turn + " won. ****")  

def is_moves_left(board):

    for r in range(0,3):
        for c in range(0,3):
            for i in range(0,3):
                for j in  range(0,3):
                    if board[r][c][i][j]==EMPTY:
                        return True
    return False


def calc_score(board):
    current_checkboard= np.zeros((3,3),dtype=str)
    for i in range(3):
        for j in range(3):
            current_checkboard[i][j]=EMPTY

    #creating global board for win 
    for i in range(0,3):
        for j in range(0,3):
                smallboard=board[i][j]
                print("from calcscore",smallboard)
                small_win=checkwin_smallboard(smallboard,i,j,current_checkboard)

    print("currr", current_checkboard)
    print("lol", checkboard)

    # checking the globalboard for win 

    #if agent wins checkwin_global returns 1 
    if checkwin_global(current_checkboard) == 1 :
        return 2*MAX_UTIL

    #If the human wins checkwin returns 2
    elif checkwin_global(current_checkboard) == 2 :
        return -2*MAX_UTIL

    print("smalllll winnnn", small_win)
    return small_win
    # return 0 


def minimax(board,depth,rowindex,coloumnindex,is_max,alpha,beta):
    score = calc_score(board)
    print("board : ", board,"\nscore:", score)
    print("depth = ", depth)
    if depth == MAX_DEPTH :
        print("lelele")
        return score

    if score == 2*MAX_UTIL:
        return score

    if score == -2*MAX_UTIL:
        return score

    if score == MAX_UTIL or score == -MAX_UTIL:
        return score

    if is_moves_left(board)==False :
        return 0

    if is_max :

        best_val = -math.inf

        if checkboard[rowindex][coloumnindex]==EMPTY:

            for i in range(0,3):
                for j in range(0,3):
                    if(board[rowindex][coloumnindex][i][j]==EMPTY):
                        board[rowindex][coloumnindex][i][j] = AGENT
                        best_val = max(best_val,minimax(board,depth+1,i,j,not(is_max),alpha,beta))
                        board[rowindex][coloumnindex][i][j]=EMPTY
                        
                        if best_val >= beta :
                            return best_val

                        if best_val > alpha:
                            alpha = best_val

        
        else :

            for m in range(0,3):
                for n in range(0,3):
                    if checkboard[m][n]==EMPTY:
                        # print("m,n",m,n)
                        for i in range(0,3):
                            for j in range(0,3):
                                 if(board[m][n][i][j]==EMPTY):
                                    board[m][n][i][j] = AGENT
                                    best_val = max(best_val,minimax(board,depth+1,i,j,not(is_max),alpha,beta))
                                    board[m][n][i][j]=EMPTY
                                    if best_val >= beta :
                                        return best_val

                                    if best_val > alpha:
                                        alpha = best_val

        return best_val

    else:

        best_val = math.inf

        if checkboard[rowindex][coloumnindex]==EMPTY:

            for i in range(0,3):
                for j in range(0,3):
                    if(board[rowindex][coloumnindex][i][j]==EMPTY):
                        board[rowindex][coloumnindex][i][j] = AGENT
                        best_val = min(best_val,minimax(board,depth+1,i,j,not(is_max),alpha,beta))
                        board[rowindex][coloumnindex][i][j]=EMPTY
                        if best_val <= alpha:
                            return best_val

                        if best_val < beta:
                            beta = best_val
        
        else :

            for m in range(0,3):
                for n in range(0,3):
                    if checkboard[m][n]==EMPTY:
                        for i in range(0,3):
                            for j in range(0,3):
                                 if(board[m][n][i][j]==EMPTY):
                                    board[m][n][i][j] = AGENT
                                    best_val = min(best_val,minimax(board,depth+1,i,j,not(is_max),alpha,beta))
                                    board[m][n][i][j]=EMPTY
                                    
                                    if best_val <= alpha:
                                        return best_val

                                    if best_val < beta:
                                        beta = best_val

        return best_val

        


def choose_optimal_move(board,previous_move):
    
    CurrentSmallBoardRow = previous_move[2]
    CurrentSmallBoardColoumn = previous_move[3]
    print("Currentsmallboard",CurrentSmallBoardRow,CurrentSmallBoardColoumn)

    if (CurrentSmallBoardRow!=-1 and CurrentSmallBoardColoumn != -1) and (checkboard[CurrentSmallBoardRow][CurrentSmallBoardColoumn]==EMPTY) : 
    
        optimal_val = -math.inf

        for i in range(0,3):
            for j in range(0,3):
                
                if(board[CurrentSmallBoardRow][CurrentSmallBoardColoumn][i][j]==EMPTY):
                    
                    #Player move? 
                    board[CurrentSmallBoardRow][CurrentSmallBoardColoumn][i][j]=AGENT
                    move_val = minimax(board,0,i,j,False,alpha,beta)

                    #Player unmove?
                    board[CurrentSmallBoardRow][CurrentSmallBoardColoumn][i][j]=EMPTY
                
                    if move_val > optimal_val:

                        best_global_row=CurrentSmallBoardRow
                        best_global_coloumn=CurrentSmallBoardColoumn
                        best_small_row = i
                        best_small_col = j
                        optimal_val = move_val

    else :

        optimal_val = -math.inf

        for m in range(0,3):
            for n in range(0,3):
                if checkboard[m][n]==EMPTY:
                    for i in range(0,3):
                        for j in range(0,3):
                            
                            if(board[m][n][i][j]==EMPTY):

                                #Player move? 
                                board[m][n][i][j]=AGENT
                                
                                move_val = minimax(board,0,i,j,False,alpha,beta)

                                #Player unmove?
                                board[m][n][i][j]=EMPTY
                            
                                if move_val > optimal_val:

                                    best_global_row=m
                                    best_global_coloumn=n 
                                    best_small_row = i
                                    best_small_col = j
                                    optimal_val = move_val


    return best_global_row,best_global_coloumn,best_small_row,best_small_col
            


def human_turn(board,previous_move):
    current_move = np.array(([-1,-1,-1,-1]), dtype=int)
    printBoard(theBoard)
    print("It's your turn," + HUMAN + ".Move to which place?")
    print("Place your move in ",previous_move[2],previous_move[3])
    while(True):
        gr , gc = [int(x) for x in input("Enter Global row and coloumn: ").split()] 
        sr , sc = [int(x) for x in input("Enter small row and small coloumn: ").split()] 
        if (previous_move[2]!=-1 and previous_move[3] != -1) and (checkboard[previous_move[2]][previous_move[3]]==EMPTY) : # the user has to definitely place in this square
            print("111")
            if gr==previous_move[2] and gc==previous_move[3]: #the user has choosen the correct smallboard
                print("222")
                if theBoard[gr][gc][sr][sc] == EMPTY:
                    print("333")
                    theBoard[gr][gc][sr][sc] = HUMAN
                    temp_move=list()
                    temp_move.extend([gr,gc,sr,sc])
                    current_move=temp_move
                    break
                else :
                    print("444")
                    print("That place is already filled.\nMove to which place?")
                    continue

            else :
                print("555")
                print("Wrong small board")
                continue

        else :
            print("666")
            if checkboard[gr][gc]==EMPTY:
                print("7777")
                if theBoard[gr][gc][sr][sc] == EMPTY:
                    print("888")
                    theBoard[gr][gc][sr][sc] = HUMAN
                    temp_move=list()
                    temp_move.extend([gr,gc,sr,sc])
                    current_move=temp_move
                    break
            else:
                print("999")
                print("That place is already filled.\nMove to which place?")
                continue

    return current_move

def agent_turn(board,previous_move):
    current_move = np.array(([-1,-1,-1,-1]), dtype=int)
    printBoard(theBoard)
    print(AGENT + " is moving please wait ...")
    
    gr,gc,sr,sc = choose_optimal_move(board,previous_move)
    temp_move=list()
    temp_move.extend([gr,gc,sr,sc])
    current_move=temp_move
    theBoard[gr][gc][sr][sc] = AGENT

    return current_move

# Now we'll write the main function which has all the gameplay functionality.
def game():

    previous_move= np.array(([-1,-1,-1,-1]), dtype=int)
    set_up_board()
    turn = HUMAN
    count = 0

    while(True):
        
        if(turn==HUMAN):
            previous_move = human_turn(theBoard,previous_move)
            count+=1
        else:
            previous_move = agent_turn(theBoard,previous_move)
            count+=1
        
        did_win = False
        print("thehehehe",theBoard)
        did_win=checkwin(theBoard)

        if did_win :
            print_game_over(turn)
            break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        print(checkboard)
        flag=0
        for m in range(0,3):
            for n in range(0,3):
                if checkboard[m][n]==EMPTY:
                    flag=1
        if flag==0 :
            print("GameOver")
            print("It's a tie ")
            break 

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