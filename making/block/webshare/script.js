var theme_color = "white";

function copylink() {
  var copyText = document.getElementById("output_link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
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

$("#input_theme").click(function () {
  var input_theme = theme_color;
  var i_theme = btoa(input_theme);

  var url = `https://hyunsdev.github.io/notion-tools-saved/block/webshare/?t=${i_theme}`;
  $("#output_link").val(url);
  copylink();
});

$(".output_copy").click(function() {
  copylink();
})

//2020-07-08
//[day]
