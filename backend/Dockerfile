FROM node:21-alpine

WORKDIR /src/backend

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "run", "start"]