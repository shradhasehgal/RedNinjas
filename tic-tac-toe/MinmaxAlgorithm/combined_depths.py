import math
import numpy as np
import random

# Implementation of Two Player Tic-Tac-Toe game in Python.

# ASSUME AGENT IS MAXIMIZER AND
''' We will make the board using dictionary 
    in which keys will be the location(i.e : top-left,mid-right,etc.)
    and initialliy it's values will be empty space and then after every move 
    we will change the value according to player's choice of move. '''

global BigTree
theBoard = np.zeros((3, 3), dtype=str)

board_keys = []
HUMAN = 'X'
AGENT = 'O'
EMPTY = ' '
MAX_UTIL = 10


def set_up_board():
    global BigTree
    BigTree = list()
    for i in range(0, 9):
        BigTree.append([])

    for i in range(0, 3):
        for j in range(0, 3):
            theBoard[i][j] = EMPTY


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
    print(" **** " + turn + " won. ****")


def is_moves_left(board):

    for i in range(0, 3):
        for j in range(0, 3):
            if board[i][j] == EMPTY:
                return True
    return False


def calc_score(b):

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



def minimax(board, depth, is_max):

    score = calc_score(board)
    dup_board = board.copy()
    if score == MAX_UTIL:
        return score

    if score == -MAX_UTIL:
        return score

    if is_moves_left(board) == False:
        return 0

    if is_max:

        best_val = -math.inf

        for i in range(0, 3):
            for j in range(0, 3):
                if(board[i][j] == EMPTY):
                    board[i][j] = AGENT
                    current_board_value = minimax(board, depth+1, not(is_max))
                    if current_board_value > best_val:
                        best_val = current_board_value
                        row_value = i
                        coloumn_value = j
                    board[i][j] = EMPTY

        BigTree[depth].append([dup_board, row_value, coloumn_value, best_val])
        return best_val

    else:

        best_val = math.inf

        for i in range(0, 3):
            for j in range(0, 3):
                if(board[i][j] == EMPTY):
                    board[i][j] = HUMAN
                    current_board_value = minimax(board, depth+1, not(is_max))
                    if current_board_value < best_val:
                        best_val = current_board_value
                        row_value = i
                        coloumn_value = j
                    board[i][j] = EMPTY

        BigTree[depth].append([dup_board, row_value, coloumn_value, best_val])
        return best_val


def check_win(b):
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


def calc_score_depth_2(b, i, j):

    # If win state return max utility
    if check_win(b) != 0:
        return check_win(b)

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


def run_custom_minimax(board, depth, depth_type, row, col, is_max):

    flag = 0

    # reached the max depth allowed
    if depth == depth_type-1:
        flag = 1

    if(depth_type == 2):
        score = calc_score_depth_2(board, row, col)
    # if(depth_type == 3):
    #     score = calc_score_depth_3(b)
    # if(depth_type == 4):
    #     score = calc_score_depth_4(b)

    #If max depth reached, return score
    if flag == 1 : 
        return score

    if score == MAX_UTIL:   
        return score

    if score == -MAX_UTIL:
        return score

    if is_moves_left(board) == False:
        return 0

    if is_max:
        best_val = -math.inf

        for i in range(0, 3):
            for j in range(0, 3):
                if(board[i][j] == EMPTY):
                    board[i][j] = AGENT

                    best_val = max(best_val, run_custom_minimax(
                        board, depth+1, depth_type, i, j, not(is_max)))
                    board[i][j] = EMPTY
        return best_val

    else:
        best_val = math.inf

        for i in range(0, 3):
            for j in range(0, 3):
                if(board[i][j] == EMPTY):
                    board[i][j] = HUMAN
                    best_val = min(best_val, run_custom_minimax(
                        board, depth+1, depth_type, i, j, not(is_max)))
                    board[i][j] = EMPTY
        return best_val


def compute_next_move_depths(board, depth_type):

    optimal_val = -math.inf
    random_cell = []

    for i in range(0, 3):
        for j in range(0, 3):

            if board[i][j] == EMPTY:

                # Iterate over all the empty cells to pick one
                if depth_type == 1:
                    random_cell.append((i, j))

                else:
                    # Player move?
                    board[i][j] = AGENT

                    # Agent is maximizer
                    move_val = run_custom_minimax(board, 0, depth_type, i, j, False)

                    # Player unmove?
                    board[i][j] = EMPTY
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


def choose_optimal_move(board, depth_type):

    optimal_val = -math.inf

    # From no.of empty squares we can find the value of depth
    depth = 9

    for i in range(0, 3):
        for j in range(0, 3):
            if(board[i][j] == EMPTY):
                depth = depth-1

    # In case of ultimate : proceed as usual
    if(depth_type == -1):
        
        current_States = BigTree[depth]

        for i in range(len(current_States)):
            comparison = current_States[i][0] == board
            equal_arrays = comparison.all()

            if equal_arrays:
                    best_val_row = current_States[i][1]
                    best_val_col = current_States[i][2]

    # In case of depth based : use customized minmax
    else:
        best_val_row, best_val_col, best_val = compute_next_move_depths(
            board, depth_type)

    return best_val_row, best_val_col


def human_turn(board):

    printBoard(theBoard)
    print("It's your turn," + HUMAN + ".Move to which place?")

    while(True):
        move = int(input())
        row = int(move/3)
        col = int(move % 3)

        if theBoard[row][col] == EMPTY:
            theBoard[row][col] = HUMAN
            break
        else:
            print("That place is already filled.\nMove to which place?")
            continue


def agent_turn(board, depth_type=-1):
    printBoard(theBoard)
    print(AGENT + " is moving please wait ...")

    r, c = choose_optimal_move(board, depth_type)
    theBoard[r][c] = AGENT

# Now we'll write the main function which has all the gameplay functionality.


def game():

    depth_type = int(input("Enter A Depth Type : "))
    set_up_board()
    turn = AGENT
    count = 0
    '''Considering agent always as a maximiser
        if HUMAN should play first ; turn=HUMAN , is_max=False
        if AGENT should play first ; turn=AGENT , is_max=True '''
    is_max = True
    
    # Calling the minmax function for the entire tree : if depth_type == -1
    if depth_type == -1 :
        minimax(theBoard, 0, is_max)

    while(True):

        if(turn == HUMAN):
            human_turn(theBoard)
            count += 1
        else:
            agent_turn(theBoard,depth_type)
            count += 1

        did_win = False
        # Now we will check if player X or O has won,for every move after 5 moves.
        if count >= 5:

            for i in range(0, 3):
                if(theBoard[i][0] == theBoard[i][1] == theBoard[i][2] != EMPTY):
                    print_game_over(turn)
                    did_win = True
                    break

            for j in range(0, 3):
                if(theBoard[0][j] == theBoard[1][j] == theBoard[2][j] != EMPTY):
                    print_game_over(turn)
                    did_win = True
                    break

            if theBoard[0][0] == theBoard[1][1] == theBoard[2][2] != EMPTY:  # diagonal
                print_game_over(turn)
                did_win = True
                break
            if theBoard[0][2] == theBoard[1][1] == theBoard[2][0] != EMPTY:  # diagonal
                print_game_over(turn)
                did_win = True
                break

        if did_win:
            break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn == HUMAN:
            turn = AGENT
        else:
            turn = HUMAN

    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":
        game()

def new_game(depth_type):

    set_up_board()
    turn = AGENT
    count = 0
    '''Considering agent always as a maximiser
        if HUMAN should play first ; turn=HUMAN , is_max=False
        if AGENT should play first ; turn=AGENT , is_max=True '''
    is_max = True
    
    # Calling the minmax function for the entire tree : if depth_type == -1
    if depth_type == -1 :
        minimax(theBoard, 0, is_max)


        if(turn == HUMAN):
            human_turn(theBoard)
            count += 1
        else:
            agent_turn(theBoard,depth_type)
            count += 1

        did_win = False
        # Now we will check if player X or O has won,for every move after 5 moves.
        if count >= 5:

            for i in range(0, 3):
                if(theBoard[i][0] == theBoard[i][1] == theBoard[i][2] != EMPTY):
                    print_game_over(turn)
                    did_win = True
                    break

            for j in range(0, 3):
                if(theBoard[0][j] == theBoard[1][j] == theBoard[2][j] != EMPTY):
                    print_game_over(turn)
                    did_win = True
                    break

            if theBoard[0][0] == theBoard[1][1] == theBoard[2][2] != EMPTY:  # diagonal
                print_game_over(turn)
                did_win = True
                break
            if theBoard[0][2] == theBoard[1][1] == theBoard[2][0] != EMPTY:  # diagonal
                print_game_over(turn)
                did_win = True
                break

        if did_win:
            break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn == HUMAN:
            turn = AGENT
        else:
            turn = HUMAN

    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":
        game()

if __name__ == "__main__":
    game()
