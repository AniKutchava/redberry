document.getElementById("shemdegi").addEventListener("click", myFunction);
function myFunction() {
  location.replace(
    "file:///C:/Users/user/Desktop/Davaleba/Html%20-%20Css/html%20css%20javascript/page1.html"
  );
}

/*function next() {
  var hr = window.location.href.splitOnLast("/.page1");
  var page = hr[1].replace("/", "");
  var nxtIndex = pageArray.indexOf(page) + 1;
  if (nxtIndex > pageArray.length) nxtIndex = 0;
  var redirect = hr[0] + "/" + pageArray[nxtIndex];
  window.location.href = redirect;
}
*/
