import numpy as np 

# Human=0 and Agent= X
# O = 0 and X=1
def CheckWinState(board):
    winstate=0
    # Check rows in which all values are equal  
    for i in range(board.shape[0]):
        if np.all(board[i]==board[i][0]):
            print('Row: ', i)
            return 1 
    # Check Columns in which all values are equal
    trans_board = board.T
    for i in range(trans_board.shape[0]):
        if np.all(trans_board[i] == trans_board[i][0]):
            print('Column: ', i) 
            return 1    
    # Check Diagonal in which all values are equal
    diagonal=board.diagonal()
    anti_diagonal=np.fliplr(board).diagonal()
    if np.all(diagonal) :
        print("Diagonal")
        return 1 
    if np.all(anti_diagonal):
        print("Anti-Diagonal")
        return 1 

def NextMove(board,depth):
    #AgentMove:Maximising agent 
    States=list() 
    # It will contain another list as an element 
    # Where each list will contain all the states present at that depth with their utilities,parent 
    # and whether it is a win state or not.So array looks like [Boaed,utility,parent_index,winstate/not]
    # WinState=1 NotWinState=0

    #At depth =-1(let'ssuppose[since loop starts from 0 just to avoid confusion] but it's index is 0[array index]) 
    # the only state present is the state of the board 
    # which is passed to this function .So append it to the States
    States.append([board,0,-1,0])
    for i in range(depth):
        if i%2==0:#MaxmisingAgent
            Symbol=1
        else :
            Symbol=0
        PreviousDepthstate=States[i]
        CurrentDepthstate=list()
        for k in range(len(PreviousDepthstate)):
            board=PreviousDepthstate[k][0]
            if PreviousDepthstate[k][3]==0 : # only if this is not in win state then only go for further split 
                for i in range(board.shape[0]):
                    for j in range(len(board[i])):
                        if board[i][j]==-1 :
                            dup_board=np.copy(board)
                            dup_board[i][j]=Symbol
                            utility=2 # TODO : Calculation Of Utility 
                            winstate=CheckWinState(dup_board) # Getting it from CheckWinState
                            CurrentDepthstate.append([dup_board,utility,k,winstate])

        #After all the States at PreviousDepth are iterated , all the states at this depth will be generated 
        # Push that into States list 
        States.append(CurrentDepthstate) 

    #After the desired Depth all the state will be generated,with their corresponding utilities
    #TODO:Apply minimax Algorithm  
        
                    


# state of the board 3*3 matrix 
board= np.full((3,3),-1,dtype=int)
NextMove(board,1)

 