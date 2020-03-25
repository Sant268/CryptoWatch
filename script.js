const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=INR&api_key=cb4af40ea2f8554c0d0b721c11b328dcc83ddbbd130755ea40c123c778a53487";
  document.getElementById("btc").addEventListener("click", getReqBTC);
 function getReqBTC()
{
  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = "text";
var response = XMLHttpRequest.responseText;
  request.send();
  document.getElementById("price").innerHTML = response['INR'];
}
