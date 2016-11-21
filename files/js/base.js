(function (window) {
    var getBodyFontSize = function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        /* 
         * font-size的取值通过js计算，取当前viewport的deviceWidth与设计稿的宽的比例值
         * 这个fontSize就是根据设计稿的横向宽度640px来确定的, 因为得出的font-size太小，不方便计算，且有的浏览器可能不兼容太小字号，所以将font-size放大100倍
         * 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px'
         */
        html.style.fontSize = windowWidth / 640 * 100 + 'px';
        console.log(html.style.fontSize);
    };

    window.addEventListener('resize', getBodyFontSize, false);
    document.addEventListener('DOMContentLoaded', getBodyFontSize, false);

    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    window.isMobile = isMobile;
})(window);