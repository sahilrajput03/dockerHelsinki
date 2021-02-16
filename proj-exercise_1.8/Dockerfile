FROM devopsdockeruh/first_volume_exercise

# Solution commands: 
# TIP: You can't mount file unless you have it existing on the host beforehand, so do make a logs.txt file first and then run the container.
# docker run -v (pwd)/logs.txt:/usr/app/logs.txt -it --rm --name ex1.8 ex1.8
# docker build -t ex1.8 .

#Failed attempts: 
# docker run -v (pwd)/logs.txt:/usr/app/logs.txt -it --rm --name ex1.8 ex1.8 sh -c "touch logs.txt"
# Also, if you try to define 
# `WORKDIR /usr/app/logs.txt
# RUN touch logs.txt`
#  in Dockerfile too, that'll not work too. So the only solution is to HAVE A EMPTY FILE NAME `logs.txt` in the binding path, otherwise -v will create a directory insted as docs says -v always creates a directory.

#Also, using --mount
# docker run --mount type=bind,source=(pwd)/logs.txt,target=/usr/app/logs.txt -it --rm --name ex1.8 ex1.8
#The benefit of using --mount is that it clearly throws the problem i.e., the source doesn't exist you must create it, but
# in case of -v i.e., docker daemon autocamatically assumes that you are binding a directory(DOCS SAYS THIS), so  if the file in host does not exits the docker daemon creates a directory named logs.txt instead of creating a file. HECK!!, (so you must create a file logs.txt first if you are using -v flag for volume binding).
