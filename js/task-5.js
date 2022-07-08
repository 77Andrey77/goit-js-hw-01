
let citi = prompt('Укажите страну доставки товара');
let price;

if (citi === null) {
  alert('Отменено пользователем')
} else {
let citiToLowerCase = citi.toLocaleLowerCase();

switch (citiToLowerCase ) {
 
  case 'китай':
    price = 100;
    break;
    
  case 'чили':
    price = 250;
    break;
  
  case 'австралия':
    price = 170;
    break;
  
  case 'индия':
    price = 80;
    break;
  
  case 'ямайка':
    price = 120;
    break;
  
  default:
    alert('В вашей стране доставка не доступна');  
}
}

if (price) {
   alert(`Доставка в ${citi} будет стоить ${price} кредитов`);
}

 






