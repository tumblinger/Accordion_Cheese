$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('.block').hasClass('one')) {
            //remove class 'active' from all titles except this clicked one:
            $('.block__title').not($(this)).removeClass('active');
            //hide all texts except next after this - clicked title:
            $('.block__text').not($(this).next()).slideUp(300);

        }
        //.next is the next block - text in our case:
        $(this).toggleClass('active').next().slideToggle(300);
    })
})