### BUILDING STAGE ###
FROM node:18-alpine3.17 as api
WORKDIR /usr/src/app
COPY package*.json  ./
RUN npm install --prod
COPY . .
CMD [ "npm", "start" ]
