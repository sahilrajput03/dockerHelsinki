FROM ubuntu:16.04

WORKDIR /mydir
RUN apt-get update && apt-get install -y curl python
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl 
RUN chmod a+rwx /usr/local/bin/youtube-dl
ENV LC_ALL=C.UTF-8 
# CMD ls -al
ENTRYPOINT ["/usr/local/bin/youtube-dl"] 




# CMD ["/usr/local/bin/youtube-dl"] 
# TESTING: 
# docker build -t youtube-dl .
# docker run youtube-dl https://imgur.com/JY5tHqr
# docker cp "compassionate_chatelet://mydir/Imgur-JY5tHqr.mp4" .
# /e/d/youtube-dl
# docker diff compassionate_chatelet

# TESTING2
# docker run -v (pwd):/mydir youtube-dl https://imgur.com/JY5tHqr
# BIND MOUNTS WORKS PERFECTLY NOW!!
