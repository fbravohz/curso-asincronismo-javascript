//const XMLHttpRequest = require('xmlhttprequest');

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if(xhttp.readyState === 4 && xhttp.status === 200){
      callback(null, JSON.parse(xhttp.responseText));
    } else {
      const error = new Error('Error ' + urlApi);
      return callback(error, null);
    }
  }
  xhttp.send();
}

//USO DE XMLHttpRequest con el metodo onload que espera hasta que readyState == 4
// para proceder con el resto del codigo. Esta mejora se implemento con AJAX 2
function fetchDataMejorado() {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', API, true);
  xhttp.onload = function () {
    document.querySelector('#response').innerHTML = xhttp.responseText;
  }
  xhttp.send();
}

fetchDataMejorado();