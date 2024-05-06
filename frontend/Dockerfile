FROM node:18.18.0

RUN npm install -g serve

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install --force

COPY . .

CMD ["npm", "start"]