#/usr/bin/env bash
docker build -f Dockerfile2 -t jekyll-img2 .
docker run --rm -it -p 4000:80 --name jekyll-container2 jekyll-img2
