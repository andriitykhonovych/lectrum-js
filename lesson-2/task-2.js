let message;
let login = '';

const result = login === 'Pitter' ? message = 'Hi'
    : login === 'Owner' ? message = 'Hello'
    : login === '' ? message = 'unknown'
    : message = '';

console.log(result);

