#!/bin/bash
naked "docker build -t ex1.14 . && docker run -p 3000:3000 -it --rm ex1.14"

