from flask import Flask, request
import requests
import numpy as np
import sys
sys.path.insert(1, '../MinmaxAlgorithm')
import combined_depths
import ast

app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/agent-turn', methods=['GET'])
def agent_turn():
    args = request.args
    board = args['board']
    board = ast.literal_eval(board)
    board = np.array(board, dtype = str)
    return combined_depths.agent_turn(board)


if __name__ == '__main__':
    app.run()
