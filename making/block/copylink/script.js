var theme_color = "white";

function copylink() {
  var copyText = document.getElementById("output_link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function checkUrlForm(strUrl) {
  var expUrl = /^http[s]?\:\/\//i;
  return expUrl.test(strUrl);
}

$("#input_theme").click(function () {
  if (theme_color == "white") {
    theme_color = "black";
    $(this).addClass("input_theme_black");
    $(this).removeClass("input_theme_white");
    $(this).val("🌜 어두운 배경");
  } else {
    theme_color = "white";
    $(this).addClass("input_theme_white");
    $(this).removeClass("input_theme_black");
    $(this).val("🌞 밝은 배경");
  }
});

$("#input_link").click(function() {
  $(this).removeClass("warn_border")
})

$("#input_make").click(function () {
  var input_theme = theme_color;
  var i_theme = btoa(input_theme);
  if ($("#input_link").val() == "") {
    $("#input_link").addClass("warn_border");
  } else if (checkUrlForm($("#input_link").val()) != true) {
    $("#input_link").addClass("warn_border");
  } else {
    var i_link = btoa($("#input_link"));
    var url = `https://hyunsdev.github.io/notion-tools-saved/block/copylink/?t=${i_theme}&l${i_link}`;
    $("#output_link").val(url);
    copylink();
  }

});

$(".output_copy").click(function () {
  copylink();
})

//2020-07-08
//[day]
