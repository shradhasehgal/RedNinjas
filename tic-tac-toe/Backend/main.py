from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import numpy as np
import sys
sys.path.insert(1, '../Integrate/oops')
from game import *
import ast

app = Flask(__name__)
# cors = CORS(app, resources={r"/Backend/*": {"origins": "*"}})


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/agent-turn', methods=['GET'])
def agent_turn():
    args = request.args
    # print(args)
    board = args['board']
    board = ast.literal_eval(board)
    board = np.array(board, dtype = str)
    depth = int(args['depth'])
    r,c,win = g.agent_next_move(board,depth)
    return {"r": r, "c":c, "win": win}

if __name__ == '__main__':
    
    g = Game()
    is_max = True
    g.initialize_bigtree(is_max)
    app.run()
