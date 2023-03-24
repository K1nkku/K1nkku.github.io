$(document).ready(function () {
    $(".menu_icon").click(function () {
        $(".menu").css("left", "0");
        function showMenu() {
            $(".menu").css("-webkit-clip-path", "polygon(0 0,100% 0,100% 100%,0% 100%)");
            $(".menu_icon").animate({ right: '-100px' }, 200);
        }
        setTimeout(showMenu, 75);
    });

    $(".menu_close").click(function () {
        $(".menu").css("-webkit-clip-path", "polygon(0 0,0% 0,100% 100%,0% 100%)");
        function hideMenu() {
            $(".menu").css("left", "-25%");
            $(".menu_icon").animate({ right: '50px' }, 200);
        }
        setTimeout(hideMenu, 200);

        function originalLayout() {
            $(".menu").css("-webkit-clip-path", "polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout, 400);
    });
});
