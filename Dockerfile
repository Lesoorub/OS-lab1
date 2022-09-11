FROM node:16.17.0-bullseye

# создание директории приложения
RUN mkdir -p /usr/app/src
WORKDIR /usr/app/src

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY ./package.json /usr/app
COPY ./package-lock.json /usr/app
#COPY package*.json /usr/src/app

RUN npm install
# Для создания сборки для продакшена
# RUN npm i --omit=production

# копируем исходный код
COPY ./src/ /usr/app/src
EXPOSE 8080
CMD [ "npm", "start" ]