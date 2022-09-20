# Как запустить проект
---------------------
1. Установить docker
2. Установить docker-compose -d
3. Перейти в корневую директорию, где лежит файлы Dockerfile и docker-compose.yml
4. Открыть консоль
5. Ввести магические буквы `docker-compose up`
6. Перейти на страницу в браузере http://localhost:8080
!["Its a magic"](https://static.tildacdn.com/tild3633-6633-4637-b038-643034363038/image1.png "Its a magic")
# Проделанная работа ДО
---------------------
1. Создание папки OS-lab1
2. Выполнение в терминале папки `npm install express`
3. Создание файла index.js
4. Ctrl + C, Ctrl + V из https://expressjs.com/ru/starter/hello-world.html
5. Выполнение команды `node index.js`
6. Готово, открываем страницу в браузере по адресу localhost:3000
# Проделанная работа ПОСЛЕ
---------------------
1. Ctrl + C, Ctrl + V из https://github.com/Lesoorub/OS-lab1.git
2. Мувные телодвижения с расположением файлов по примеру [от сюда](https://nodejsdev.ru/doc/app-structure/)
3. Создание Dockerfile и его настройка
4. Создание docker-compose.yml и его настройка
5. ~~Немного для простоты полёта было бахнуто немного магических снадобий и так~~ появились готовые пресеты для IDE vs code в данном проекте
# Проделанная работа ПОСЛЕ ПОСЛЕ
---------------------
1. Скачиваем и устанавливаем PostgreSQL - [тык](https://www.postgresql.org/download/)
1.1. Установить с паролем `root`
1.2. Запускаем `pgAdmin`
1.3. Создаём БД с именем базы из `.production.env`
2. Скачиваем и устанавливаем Postman - [тык]( https://www.postman.com/downloads/)
3. Переходим в `nestapp` и выполняем команду `npm start`
3.1. Переходим по `/api/docs`
3.2. Изучаем
4. Открываем Postman
4.1. Отправляем `POST` и `GET` запросы на `/users`
4.2. Проверяем добавленные записи в `pgAdmin`
5. Работаем пока не устаём
---------------------