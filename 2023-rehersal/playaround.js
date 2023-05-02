'use strict';

//  Blocking code example

const request = new XMLHttpRequest();
request.open('GET', 'https://example.com', false); // Note the "false" argument for synchronous requests
request.send();

if (request.status === 200) {
  console.log(request.responseText);
} else {
  console.error('Request failed');
}

console.log('this code is blocked');