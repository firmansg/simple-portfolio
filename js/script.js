// Event pada saat link diklik
$('.page-scroll').on('click', function (e) {
    // Ambil isi href
    var tujuan = $(this).attr('href');
    // Tangka elemen tersebut
    var elemenTujuan = $(tujuan);
    // Pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 73
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});


//Efek Parallax

//About
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.5 + '%)'
    });

    //Portofolio
    if (wScroll > $('.portofolio').offset().top - 300) {
        $('.img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    } else {
        $('.img-thumbnail').removeClass('muncul');
    }

});

// $('.img-thumbnail').each(function (i) {
//     setTimeout(function () {
//         $('.img-thumbnail').eq(i).removeClass('muncul');
//     }, 300 * (i + 1));
// });