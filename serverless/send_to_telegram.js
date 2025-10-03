/**
 * Пример serverless-функции для отправки заявки в Telegram.
 * Для Vercel: поместите в api/send_to_telegram.js
 * Для Netlify Functions: поместите в functions/send_to_telegram.js
 *
 * Настройте переменные окружения:
 * - TELEGRAM_BOT_TOKEN = <ваш токен бота>
 * - TELEGRAM_CHAT_ID = <ID чата или @username>
 *
 * Функция ожидает POST с JSON: { name, phone, comment, calc, source }
 */

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  try {
    const body = req.body || JSON.parse(req.payload || '{}');
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      res.status(500).json({error: 'Telegram token or chat id not configured'});
      return;
    }
    const text = `Новая заявка\nИмя: ${body.name || '-'}\nТелефон: ${body.phone || '-'}\nКомментарий: ${body.comment || '-'}\nКалькулятор: ${body.calc || '-'}\nСайт: ${body.source || '-'}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    };
    const resp = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    if (data.ok) {
      res.status(200).json({ok:true});
    } else {
      res.status(500).json({ok:false, error:data});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({error: String(err)});
  }
};
