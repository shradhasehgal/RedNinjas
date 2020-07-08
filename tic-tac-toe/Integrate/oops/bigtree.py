import math
import numpy as np
import random
from constants import *

from board import *

class Bigtree():

    def __init__(self):

        self.bigtree = self.set_up_bigtree()

    def set_up_bigtree(self):

        BigTree = list()
        for i in range(0, 9):
            BigTree.append([])

        return BigTree