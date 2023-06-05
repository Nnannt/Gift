function popupku() {
  var body = document.querySelector("body");      
  var pWm = document.createElement("a");
  pWm.setAttribute("href", "https://youtu.be/b1-ifLhRxNw");
  pWm.setAttribute("style", "text-decoration: none; color: white; opacity: .5; position: fixed; bottom : 10px; left: 10px");
  pWm.innerHTML = "Youtube : Tekan ini";
  body.appendChild(pWm);
}
