FROM node:12

WORKDIR /mydir
# EXPOSE 786
# This is not needed at all for heroku deployment.

COPY package*.json ./
RUN npm i

COPY . .

CMD npm start
