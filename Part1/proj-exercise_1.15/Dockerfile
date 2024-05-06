# Create a new build stage from a base image.
FROM node:12

# Change working directory ~ Docs
WORKDIR /mydir

# Describe which ports your application is listening on ~ Docs
EXPOSE 8080

# Copy files and directories ~ Docs
COPY package*.json ./

# Execute build commands ~ Docs
RUN npm i

COPY . .

# Specify default commands ~ Docs
CMD npm start

## Note by Sahil:
# Pushed to docker hub with name 'sahilrajput03/ex1.15' and you may run below command to run the image:
# docker pull sahilrajput03/ex1.15
# docker run -p 8080:8080 -it --rm sahilrajput03/ex1.15

