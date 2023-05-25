FROM node:16
WORKDIR /query-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start