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

if (theme == "black") {
  $("#mode").removeClass("day");
  $("#mode").addClass("night");
}




if (document.referrer != "") {
  $("#output_link").val(document.referrer);
}

let url_link = "";

if (typeof navigator.share === "undefined") {
  $(".output_copy").val("복사하기");
}

$(".output_copy").click(function () {
  if (document.referrer != "") {
    url_link = document.referrer;
  } else {
    url_link = "https://notion-tools.com";
  }

  if (navigator.share) {
    navigator
      .share({
        url: url_link,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    copylink();
  }
});
