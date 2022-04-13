// event pada saat link di klik
$('.page-scroll').on('click',function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 800, swing);

    e.preventDefault();

});