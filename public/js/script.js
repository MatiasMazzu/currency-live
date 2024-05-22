const fetch = require('node-fetch');

fetch('https://dolarapi.com/v1/dolares', {
    method: 'GET',
})
.then(response => response.json())
.then(data => {
    console.log(JSON.stringify(data, null, 2)); 
})
.catch(error => {
    console.error('Error:', error);
});