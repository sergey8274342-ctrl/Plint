# Сайт-визитка — Монтаж скрытых плинтусов (шаблон)

Файлы:
- index.html — основной одностраничный сайт (готово).
- CNAME — укажите ваш домен (пример: www.example.com).
- /images/photo-1.jpg ... photo-30.jpg — места для ваших фотографий (пока заглушки).
- serverless/send_to_telegram.js — пример serverless-эндпойнта для безопасной отправки заявок в Telegram.
- README.md — вы сейчас его читаете.

## Быстрая инструкция для GitHub Pages
1. Создайте репозиторий на GitHub с именем: `yourusername.github.io`.
2. Загрузите содержимое архива в корень репозитория (index.html + папки).
3. В GitHub: Settings → Pages → выберите ветку `main` (или `gh-pages`) и нажмите `Save`.
4. Сайт будет доступен по `https://yourusername.github.io`.

## Привязка собственного домена
1. В файле `CNAME` укажите ваш домен, например:
   ```
   www.yourdomain.com
   ```
2. В панели управления доменом (регистратор) добавьте DNS-записи:
   ```
   A 185.199.108.153
   A 185.199.109.153
   A 185.199.110.153
   A 185.199.111.153
   CNAME www -> yourusername.github.io
   ```
3. Подождите 1–24 часа для распространения DNS.

## Интеграция форм (рекомендуемые варианты)
- Formspree (просто, без сервера) — замените `YOUR_FORMSPREE_ID` в index.html.
- Netlify Forms — можно подключить, если вы хостите на Netlify.
- Serverless webhook → Telegram (лучше для приватности токена) — пример в `serverless/send_to_telegram.js`.

## Serverless-пример (Deploy: Vercel, Netlify Functions, AWS Lambda)
Файл `serverless/send_to_telegram.js` (пример для Vercel/Netlify). Укажите в переменных окружения `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.

## Аналитика и SEO
- Добавьте GA4 (gtag) — вставьте Measurement ID в head.
- Добавьте Яндекс.Метрику — счётчик в head/body.
- Создайте sitemap.xml и robots.txt при необходимости.

Если нужно — помогу:
- Подготовить ZIP-архив (готово).
- Подключить Formspree или настроить serverless-функцию и показать, как задать секреты.
- Сгенерировать 30 фотографий в выбранном стиле (пришлите референсы или напишите стиль).

