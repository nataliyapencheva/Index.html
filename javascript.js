

alert('Този сайт използва "бисквитки", за да гарантираме, че Ви предоставяме най-доброто изживяване на нашия уебсайт и да Ви покажем съдържание, което може да Ви заинтересува.');


// актуална дата в новините
var date = new Date();
document.getElementById("update").innerHTML = date;

//тъРСАЧКА
function openSearch(target) {
    var searchContainerElement = document.getElementById('search-container');
    if (searchContainerElement.classList.contains('open')) {
        searchContainerElement.classList.remove('open');

        var iconElement = target.getElementsByClassName('fa-times')[0];
        iconElement.classList.remove('fa-times');
        iconElement.classList.add('fa-search');
    } else {
        searchContainerElement.classList.add('open');

        var iconElement = target.getElementsByClassName('fa-search')[0];
        iconElement.classList.remove('fa-search');
        iconElement.classList.add('fa-times');
    }
}


//ГАЛЕРИЯ
new Splide('.splide', {
    type: 'fade',
    rewind: true,
}).mount();

rewind: true;

//стики
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



// Появяване на секции

const sections = [...document.querySelectorAll("section")];

let options = {
    rootMargin: "0px",
    threshold: 0.25
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        const { target } = entry;
        console.log(entry, target)

        if (entry.intersectionRatio >= 0.25) {
            target.classList.add("is-visible");
        } else {
            target.classList.remove("is-visible");
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
    observer.observe(section);
});

window.onload(removeClass());

// край Появяване на секции
