/**
 * Created by lupan on 2018/10/21.
 */

var measurePage = function () {
    return this;
}

// 初始化
measurePage.prototype.init = function () {
    // 加载顶部导航模板
    // $(".nav-wrap").load("nav.html");

    // 设置选中导航
    $('.nav-list[data-type="measure"]').addClass("select");
}

$(function () {
    var measurePageObj = new measurePage();
    measurePageObj.init();
})