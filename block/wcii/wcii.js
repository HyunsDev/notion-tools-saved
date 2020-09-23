function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let theme = atob(getParameterByName("t"));
let align = atob(getParameterByName("a"));

if(theme == "black") {
    $("#mode").removeClass("day");
    $("#mode").addClass("night");
}

if (align == "left") {
    $(".d").css("justify-content", "flex-start");
    $("#wcii").css("text-align", "left");
} else if (align == "right") {
    $(".d").css("justify-content", "flex-end");
    $("#wcii").css("text-align", "right");
} else {
    $("#wcii").css("text-align", "center");
}

let now = moment()

/* 시간 문구 생성 */
let showtime;
if(now.format("HHmm") == "0000") {
    showtime = "지금은 자정이야";
} else if (now.format("HHmm") == "1200") {
    showtime = "지금은 정오야";
} else {
    let hour = now.format("HH");
    let minu = now.format("mm");
    let showhour = "";
    let showminu;
    let minu_ten;

    let time_map_hour = {0: "", 1: "한", 2: "두", 3: "세", 4: "네", 5: "다섯", 6: "여섯", 7: "일곱", 8: "여덟", 9: "아홉"}
    let time_map_minu = {0: "", 1: "일", 2: "이", 3: "삼", 4: "사", 5: "오", 6: "육", 7: "칠", 8: "팔", 9: "구"}
    /* 아니 이럴거면 그냥 리스트를 쓰지 왜 딕셔너리를 쓴건지 이해가 안가네;; - 구 지금몇시계에서 소스를 옮기고 있는 현재의 혀느현스 남김 */

    //시간
    if (hour == "00") {hour = 24;}
    if (hour >= 21) { show_text = "밤";}
    else if (hour >= 17) { show_text = "저녁";}
    else if (hour >= 15) { show_text = "오후";}
    else if (hour >= 11) { show_text = "점심";}
    else if (hour >= 7) { show_text = "아침";}
    else if (hour >= 5) { show_text = "이른 아침";}
    else if (hour >= 3) { show_text = "새벽";}
    else if (hour >= 1) { show_text = "늦은 밤";}
    else if (hour >= 0) { show_text = "밤";}

    show_text = show_text + " ";

    if(hour > 12) { hour = hour - 12 ;}

    if(hour > 10) {
        hour = hour - 10
        showhour = showhour + "열" + time_map_hour[hour] + " 시 ";
    } else {
        showhour = showhour + time_map_hour[hour] + " 시 ";
    }

    //분
    if(minu >= 10) {
        if(minu >= 20) {
            minu_ten = minu.substring(0, 1)
            showminu = time_map_minu[minu_ten] + "십";
        } else {
            showminu = "십"
        }

        minu_one = minu.substring(1, 2)
        showminu = showminu + time_map_minu[minu_one] + " 분"
    } else if (minu > 0) {
        minu_one = minu.substring(1, 2)
        showminu = showminu + time_map_minu[minu_one] + " 분"
    } else {
        showminu = showminu + "정각"
    }

    showtime = "지금은 " + showhour + showminu + "이야."
}

/* 문구 생성 */
let showtext;
let texts = ["좋은 꿈 꿔", "헉? 아직도 안 잤어?", "좋은 밤이야. 그렇지?", "졸리지 않니..?", "벌써", "점점 아침이 다가오고 있어", "벌써 새벽이네", "상쾌한 아침이야!", "오늘을 뭐할거야?", "힘쌔고 강한 아침!", "지금은 뭐해?", "하아암.. 나른해진당..ㅎㅎ", "쩝.. 배고프당", "밥 맛있게 먹었어?", "더 열심히!", "나른하당..ㅎㅎ", "헉 벌써?!?!", "지금 뭐하고 있니?", "배에서 꼬르륵 소리나..", "지금 해가 졌을려나..?", "저녁 맛있게 먹었니?", "밖은 어두컴컴하네..", "오늘을 별이 보일려나?", "슬슬 졸립지 않아?", "좋은 꿈 꿔!"]
let hour = now.format("HH");

showtext = texts[hour];

$("#wcii").html(showtext + "<br>" + showtime)