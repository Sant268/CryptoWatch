const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=INR";
  document.getElementById("btc").addEventListener("click", getReq);
 function getReq()
{
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resultJson = JSON.parse(xhttp.response);
      console.log(resultJson);
       document.getElementById("priceB").innerHTML = resultJson["BTC"]["INR"];
       document.getElementById("priceE").innerHTML = resultJson["ETH"]["INR"];
    }
};

xhttp.open("GET", url, true);
xhttp.send();
}
