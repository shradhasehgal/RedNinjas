from flask import Flask, request
from flask_cors import CORS
import requests
import numpy as np
import sys
sys.path.insert(1, '../Integrate/oops')
from game import *
import ast

app = Flask(__name__)
CORS(app)
# cors = CORS(app, resources={r"/Backend/*": {"origins": "*"}})
is_max = True

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/agent-turn', methods=['GET'])
def agent_turn():
    args = request.args
    board = args['board']
    board = ast.literal_eval(board)
    board = np.array(board, dtype = str)
    depth = int(args['depth'])
    r,c,win = g.agent_next_move(board,depth)
    return {"r": r, "c":c, "win": win}

@app.route('/first-move', methods=['GET'])
def first_move():
    args = request.args
    beginner = args['gameBeginner']
    if beginner == "HUMAN":
        is_max = False
    g.use_bigtree(is_max)
    return beginner 

if __name__ == '__main__':
    
    g = Game()
    g.initialize_bigtree()
    app.run()
