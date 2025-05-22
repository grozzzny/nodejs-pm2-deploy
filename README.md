# Деплой приложения на сервер с использованием pm2
Стартеркит проекта по автоматизации деплоя фронтенда и бэкенда при помощи pm2 (pm2 deploy)

# Домены приложений
- https://api.pm2.grozzzny.host (79.132.138.8:3000) - бекенд
- https://pm2.grozzzny.host (79.132.138.8:3001) - фронтенд

# Креш тест:
- http://79.132.138.8:3000/crash-test
- https://api.pm2.grozzzny.host/crash-test

# Деплой:
Перед деплоем необходимо добавить файл "backend/.env.production"
```
NODE_ENV=production
JWT_SECRET=1234
DB_ADDRESS=mongodb://localhost:27017/mestodb
```
```
pm2 deploy ecosystem.config.js production
```
