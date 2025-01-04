#/usr/bin/env bash
docker build -f Dockerfile1 -t jekyll-img1 .
docker run --rm -it -p 4000:4000 --name jekyll-container1 jekyll-img1
