// TODO
// body mit class und reveal mit slide-nummer und markierung fuer first slide (-> API)
//document.getElementsByTagName('body')[0].setAttribute("class", Reveal.getState().indexh );


function getMarkdown() {
  var theName = document.getElementById("someInput").value;
  window.location.replace("http://reveal.maybegeek.de/?md=" + theName );
}

function getMarkdownLive() {
  if ( document.getElementById('live').value != null ) {
    var liveMarked = document.getElementById('live').value;
    sessionStorage.setItem('markdownForRevealUR', JSON.stringify( liveMarked ));
    window.location.replace("http://reveal.maybegeek.de/?live=1");
  }
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
// TODO
// folgendes evtl. besser.
/*
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
*/

var url = getURLParameter("md");
var md = document.querySelector(".md");
if (md !== null) {
  md.setAttribute("data-markdown", url);
}

var theme = getURLParameter("theme");
if (theme !== null) {
  var link = document.getElementById("theTheme");
  link.setAttribute("href", "css/theme/" + theme + ".css");
}
