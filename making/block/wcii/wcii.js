var theme_color = "white";
var align_text = "left";

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

$("#input_align").click(function () {
  if (align_text == "center") {
    align_text = "right";
    $(this).val("오른쪽 정렬");
  } else if (align_text == "right") {
    align_text = "left";
    $(this).val("왼쪽 정렬");
  } else if (align_text == "left") {
    align_text = "center";
    $(this).val("가운데 정렬");
  }
});

$("#input_make").click(function () {
  var input_theme = theme_color;
  var input_align = align_text;

  var i_theme = btoa(input_theme);
  var i_align = btoa(input_align);

  var url = `https://block2.notion-tools.com/wcii?t=${i_theme}&a=${i_align}`;
  $("#output_link").val(url);
  copylink();
});

//2020-07-08
//[day]
