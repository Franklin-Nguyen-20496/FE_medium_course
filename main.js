
const testimonialsItems = $('.testimonials__item');
const itemsLength = testimonialsItems.length;

var indexImg = 0;

function changeImg(){
    indexImg++; 
    if (indexImg > itemsLength){
        indexImg = 1;
    }

    $(`.testimonials__item${indexImg}`).removeClass('d-none');

    setTimeout(() => {
        $(`.testimonials__item${indexImg}`).addClass('d-none');
        changeImg();
    }, 3750);
}

$('document').ready(() => {
    changeImg();
    $('.header__responsive').click(() => {
        
        $('.header__menu').toggleClass('d-none');
    })

    $('.notify__btn').click(() => {
        $('.notify').addClass('d-none');
    })
})
