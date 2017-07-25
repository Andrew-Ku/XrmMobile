# XrmMobile

Запуск
------

1. Установить пакеты

`npm install`

2. [Firebase Console](https://console.firebase.google.com/): зарегистрироваться, создать новое приложение, затем выполнить:

```
npm install -g firebase-tools
firebase login
firebase init
```

при инициализации:

| Вопрос        | Ответ         |
| ------------- |:-------------:|
| Are you ready to proceed? | Y
| What Firebase CLI features do you want to setup for this directory? | только Hosting (выбор при помощи пробела)
| What do you want to use as your public directory? | build
| Configure as a single-page app? | N

3. Всё готово. Для полноценного тестирования используем

`npm run build && firebase deploy`

либо просто

`npm run deploy`

В этот момент должен сбилдится код, сгенерироваться `service-worker.js`. Само приложение должно развернуться на хостинге (url указан в консоле). Приложение кешируется, со смартфона при повторной загрузке доступно оффлайн.
