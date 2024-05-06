#!/bin/bash
naked docker build -t ex3.6 .
naked winpty docker run --name ex3.6 -p 5000:80 -it --rm ex3.6
