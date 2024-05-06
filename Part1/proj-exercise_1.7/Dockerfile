FROM ubuntu:16.04

WORKDIR /mydir
COPY myscript .
RUN apt-get update && apt-get install -y curl
CMD ["sh", "-c", "./myscript"]
# CMD ["/bin/bash"]
