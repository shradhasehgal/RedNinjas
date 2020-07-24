import math 

board_keys = []
HUMAN = 'X'
AGENT = 'O'
EMPTY = ' '
TIE = 'T'
MAX_UTIL = 20    
CAN_PLACE = 5
NO_PLACE = 4
alpha = -math.inf
beta = math.inf

global BigTree