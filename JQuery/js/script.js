 // 대상을 지정하는 방법은 자바스크립트에서 변수
        // $("")
        $(".hide-btn").click(function () {
            $(".text1").hide(1000);
        })
        $(".show-btn").click(function () {
            $(".text1").show();
            $(".text1").css("color", "red");
        })
        $(".toggle-btn").click(function () {
            $(".text1").toggle(1000);
        })

        // Fadein / out
        $(".fade-in").click(function () {
            $(".text2").fadeIn();
        })
        $(".fade-out").click(function () {
            $(".text2").fadeOut();
        })
        $(".fade-toggle").click(function () {
            $(".text2").fadeToggle();
        })


        $(".slide-toggle").click(function () {

        })
        // slide
        $(".slide-up").click(function () {
            $(".text3").slideUp();
        })
        $(".slide-down").click(function () {
            $(".text3").slideDown();

        })


        $(".ani-btn").click(function(){
            $(".box-1").stop().animate({
                left:'+=250px',
                opacity:'0.5',
                height:'150px',
                width:'150px'
            })
        })
        let mot =$(".mot-btn");
        let anibox = $(".box-2");

        mot.click(function(){
            anibox.animate({
                height:'300px',
                opacity:'0.4'

            },1000);
            anibox.animate({
                width:'300px',
                opacity:'0.8'
            },2000);
            anibox.animate({
                while:'300px',
                opacity:'3rem'
            },3000);
            anibox.animate({
                while:'100px',
                // opacity:'0.8'
            },4000);
        })