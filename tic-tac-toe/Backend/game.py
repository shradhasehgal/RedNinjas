import math
import time
from player import HumanPlayer, RandomComputerPlayer, SmartComputerPlayer


class TicTacToe():
    def __init__(self):
        self.board = self.make_board()
        self.current_winner = None

    @staticmethod
    def make_board():
        return [' ' for _ in range(9)]

    def print_board(self):
        print('-------------')
        for row in [self.board[i*3:(i+1) * 3] for i in range(3)]:
            print('| ' + ' | '.join(row) + ' |')
            print('-------------')

    @staticmethod
    def print_board_nums():
        # 0 | 1 | 2
        number_board = [[str(i) for i in range(j*3, (j+1)*3)] for j in range(3)]
        for row in number_board:
            print('| ' + ' | '.join(row) + ' |')

    def make_move(self, square, letter): # puts the letter X or O
        if self.board[square] == ' ':
            self.board[square] = letter
            if self.winner(square, letter):
                self.current_winner = letter
            return True
        return False

    def winner(self, square, letter): # this function checks if the move taken resulted in a win or a lose i.e. checks for both diagonal, rows and columns if there is a win state
        # check the row
        row_ind = math.floor(square / 3)
        row = self.board[row_ind*3:(row_ind+1)*3]
        # print('row', row)
        if all([s == letter for s in row]):
            return True
        col_ind = square % 3
        column = [self.board[col_ind+i*3] for i in range(3)]
        # print('col', column)
        if all([s == letter for s in column]):
            return True
        if square % 2 == 0:
            diagonal1 = [self.board[i] for i in [0, 4, 8]]
            # print('diag1', diagonal1)
            if all([s == letter for s in diagonal1]):
                return True
            diagonal2 = [self.board[i] for i in [2, 4, 6]]
            # print('diag2', diagonal2)
            if all([s == letter for s in diagonal2]):
                return True
        return False

    def empty_squares(self):
        return ' ' in self.board

    def num_empty_squares(self): # returnsthe number of empty squares
        return self.board.count(' ')

    def available_moves(self):
        return [i for i, x in enumerate(self.board) if x == " "]


def play(game, human_player, computer_player, human_letter, computer_letter, print_game=True):

    # print(human_letter)
    # print(computer_letter)
    if print_game:
        game.print_board_nums()
    
    beginner = input('Beginner: H for Human and C for Computer : ')

    if beginner == 'H':
        letter = human_letter
    elif beginner == 'C':
        letter = computer_letter

    # print(letter)
    
    while game.empty_squares():
        
        if letter == human_letter:
            square = human_player.get_move(game) 
        else :
            square = computer_player.get_move(game) # calls the minimax algorith (computer_player is the object of the class Player and then executes this get move function which has the minimax algorithm)

        if game.make_move(square,letter):

            if print_game:
                print(letter + ' makes a move to square {}'.format(square))
                game.print_board()
                print('')

            if game.current_winner:
                if print_game:
                    print(letter + ' wins!')
                return letter  # ends the loop and exits the game

            if letter == human_letter:
                letter = computer_letter
            else:
                letter = human_letter

        time.sleep(.8)

    if print_game:
        print('It\'s a tie!')



if __name__ == '__main__':

    letter = input('Enter X or O : ')

    if letter == 'X' :
        human_letter = 'X'
        computer_letter = 'O'
        human_player = HumanPlayer('X')
        computer_player = SmartComputerPlayer('O')
    else:
        human_letter = 'O'
        computer_letter = 'X'
        human_player = HumanPlayer('O')
        computer_player = SmartComputerPlayer('X')

    t = TicTacToe()

    # t.print_board_nums()

    play(t, human_player, computer_player,human_letter,computer_letter, print_game = True)