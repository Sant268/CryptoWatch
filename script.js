const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=INR&api_key=cb4af40ea2f8554c0d0b721c11b328dcc83ddbbd130755ea40c123c778a53487";
  document.getElementById("btc").addEventListener("click", getReq);
 function getReq()
{
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resultJson = JSON.parse(xhttp.response);
       document.getElementById("price").innerHTML = resultJson["INR"];
    }
};
xhttp.open("GET", url, true);
xhttp.send();
}
