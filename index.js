const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error('BOT_TOKEN не установлен');
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
    '🎁 Добро пожаловать в Offers WQFEIC!\n\n' +
    'Создавай тестовые NFT-предложения и отправляй их друзьям.\n\n' +
    'Команды:\n' +
    '/offer — создать предложение\n' +
    '/help — помощь'
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id,
    'Для создания тестового предложения используй /offer.'
  );
});

bot.onText(/\/offer/, (msg) => {
  bot.sendMessage(msg.chat.id,
    '🎁 Создание NFT-предложения\n\n' +
    'Отправь ссылку на подарок.'
  );
});

console.log('Offers WQFEIC запущен!');
