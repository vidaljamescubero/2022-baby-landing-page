const babyLd = document.querySelector(".baby-ld");
const babyLdB3 = document.querySelector(".baby-ld-block3");

if (babyLd.offsetWidth < 1440) {
    let transform = babyLd.offsetWidth / babyLdB3.offsetWidth;
    let height = transform * 2099
    
    babyLdB3.style.cssText = `
        transform: scale(${transform});
        transform-origin: top left;
        height: ${height}px;
    `
} else {
    babyLdB3.style.cssText = `
    `
}

window.addEventListener('resize', () => {
    if (babyLd.offsetWidth < 1440) {
        let transform = babyLd.offsetWidth / babyLdB3.offsetWidth;
        let height = transform * 2099
        
        babyLdB3.style.cssText = `
            transform: scale(${transform});
            transform-origin: top left;
            height: ${height}px;
        `
    } else {
        babyLdB3.style.cssText = `
        `
    }
}) 

$.getScript( "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function(data, textStatus, jqxhr) {
    
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:1,
                center: true
            },
            500:{
                items:2,
                center: true
            },
            750:{
                items:3
            },
            1000:{
                items:4
            },
            1300:{
                items:5
            },
            1550:{
                items:6
            },
            1750:{
                items:7
            },
            2000:{
                items:8,
                nav: false
            }
        }
    })

    const prevArrow = document.querySelector(".owl-prev");
    const nextArrow = document.querySelector(".owl-next");

    prevArrow.innerHTML = `
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6792 14.3015L26.6792 11.6662L5.41356 11.6662L15.2191 2.84127L13.5644 0.696318L0.204383 12.9532L0.204383 13.0145L13.5644 25.2714L15.2191 23.1264L5.41356 14.3015L26.6792 14.3015Z" fill="black"/>
        </svg>
    `   

    nextArrow.innerHTML = `
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.320753 11.5563V14.1916L21.5864 14.1916L11.7809 23.0165L13.4356 25.1615L26.7956 12.9046V12.8433L13.4356 0.58642L11.7809 2.73137L21.5864 11.5563L0.320753 11.5563Z" fill="black"/>
        </svg>
    `

});

