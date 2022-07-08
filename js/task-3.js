const ADMIN_PASSWORD = 'qwerty';
let message;

let password = prompt('Укажите пароль');

// if (password === null) { message = 'Отменено пользователем!' }
// else if (password === ADMIN_PASSWORD) { message = 'Добро пожаловать!' }
// else { message = 'Доступ запрещен, неверный пароль!' };

switch (password) {
  case 'null':
    message = 'Отменено пользователем!';
    break;
  case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
    break;
  
  default:
    message = 'Доступ запрещен, неверный пароль!';
}


alert(message);