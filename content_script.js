var request = new XMLHttpRequest();
var response_headers = null;
request.open("HEAD", document.URL, false);
request.send(null);
console.log(request.getAllResponseHeaders());

