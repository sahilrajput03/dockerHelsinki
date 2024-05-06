#!/bin/bash
docker build -t ex1.10 . && winpty docker run -p 5000:5000 -it --rm ex1.10
