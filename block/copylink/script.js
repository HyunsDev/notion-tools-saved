function copylink() {
  var copyText = document.getElementById("output_link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let theme = atob(getParameterByName("t"));
let link = atob(getParameterByName("l"));

$("#output_link").val(link);

if (theme == "black") {
  $("#mode").removeClass("day");
  $("#mode").addClass("night");
}

$(".output_copy").click(function () {
  copylink()
});