FROM node:16.17.0-bullseye

# создание директории приложения
RUN mkdir -p /usr/src
WORKDIR /usr/src

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY ./src/package.json /usr/src
COPY ./src/package-lock.json /usr/src
#COPY package*.json /usr/src/app

RUN npm install
# Для создания сборки для продакшена
# RUN npm i --omit=production

# копируем исходный код
COPY ./src/ /usr/src

EXPOSE 8080
CMD [ "npm", "start" ]