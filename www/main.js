$(document).ready(function () {
    if (typeof eel !== 'undefined') {
        console.log('Eel is loaded');
    } else {
        console.log('Eel is not loaded');
    }
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn",


        },
        out:{
            effect: "bounceOut",
        },
    });
    $(document).ready(function () {
        $('.tlt').textillate({
            in: { effect: 'fadeIn' }, // 원하는 애니메이션 효과 선택
            out: { effect: 'fadeOut' },
            loop: true, // 반복 여부 설정
        });
    });

    // SiriWave 초기화 부분
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 640,
        height: 200,
        autostart: true,  // 자동 시작 여부
        style: 'ios9',    // Siri 스타일 선택 (ios 또는 classic)
    });

    // Siri message animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },
    });

    // mic button click event

    $("#MicBtn").click(function () {
        $("#Oval").attr("hidden", true); // Oval 섹션 숨김
        $("#SiriWave").removeAttr("hidden"); // SiriWave 섹션 표시
    });
});