console.log("Hi")

// $('.burger-lines').click(function() {
//     // $('.burger-menu').css("display", "flex")
//     // ================================================
//     $('.burger-lines').toggleClass('active');
//     // $('.burger-menu').toggle("show");
//     // $('.burger-menu').css("display", "flex")
//     // ================================================
//     var menu = $('.burger-menu')[0];

//     if (menu.getAttribute('style') === null) {
//         menu.setAttribute('style', 'display: flex');
//     } else if (menu.getAttribute('style') === ('display: none')) {
//         menu.setAttribute('style', 'display: flex');
//     } else {
//         menu.setAttribute('style', 'display: none');
//     }
// });

$('.fa-bars').click(function() {
    var menu = $('.burger-menu')[0];

    if (menu.getAttribute('style') === null) {
        menu.setAttribute('style', 'display: flex');
    } else if (menu.getAttribute('style') === ('display: none')) {
        menu.setAttribute('style', 'display: flex');
    } else {
        menu.setAttribute('style', 'display: none');
    }
})