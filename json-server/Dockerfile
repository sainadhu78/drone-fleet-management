FROM node:18

WORKDIR /app

RUN npm install -g json-server

COPY users.json /app/users.json

CMD ["json-server", "--watch", "users.json", "--host", "0.0.0.0"]
