FROM node:12

#Create a app directory.
WORKDIR /mydir
EXPOSE 8080

COPY package*.json ./

RUN npm i

COPY . .

CMD npm start
