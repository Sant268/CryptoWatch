const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=INR&api_key=cb4af40ea2f8554c0d0b721c11b328dcc83ddbbd130755ea40c123c778a53487";
const key = "&api_key=cb4af40ea2f8554c0d0b721c11b328dcc83ddbbd130755ea40c123c778a53487";
window.onload = function() {document.getElementById("BTC").onclick = function ()
{
  const request = new XMLHttpRequest();
  request.open('GET',url,true);
  request.send();
  request.onload = function() {
  const json = JSON.parse(request.responseText);
  document.getElementsByClassName('price')[0].innerHTML = JSON.stringify(json);
}
}
}
