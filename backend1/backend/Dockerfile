FROM node:16

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "dev"]