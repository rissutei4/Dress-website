$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        navText: [" ", " "],
        animateOut: 'fadeOutUp',
        animateIn: 'fadeInDown',
        smartSpeed: 100,
    });
});
//Open Burger Menu/Close Menu
const burgCont = document.querySelector(".burger-container-wrapper");
const burgIcon = document.querySelector(".burgerIcon");
const topLine = document.querySelector(".TopLine");
const botLine = document.querySelector(".BotLine");
const midLine = document.querySelector(".MidLine");
const logoIcon = document.querySelector(".logoIcon");

function toggleMenu() {
    if (burgCont.classList.contains("openedMenu")) {
        burgIcon.classList.remove("openedMenu");
        burgCont.classList.remove("openedMenu");
        topLine.classList.remove("openedMenu");
        botLine.classList.remove("openedMenu");
        midLine.classList.remove("openedMenu");
        logoIcon.classList.remove("openedMenu");

    } else {
        burgIcon.classList.add("openedMenu");
        burgCont.classList.add("openedMenu");
        topLine.classList.add("openedMenu");
        botLine.classList.add("openedMenu");
        midLine.classList.add("openedMenu");
        logoIcon.classList.add("openedMenu");
    }
}

burgIcon.addEventListener("click", toggleMenu);


langToggler = document.querySelector(".sub-menu").querySelectorAll("li");
console.log(langToggler);
langToggler.forEach(element => {
    element.addEventListener("click", function () {
        langToggler.forEach(ul => ul.classList.remove("active"))
        this.classList.add("active");
    })
});

//Language button shows languages
const button = document.querySelector('.langbtn');
const dropdownContent = document.querySelector('.sub-menu');
const dropdownLinks = document.querySelectorAll('.sub-menu li');

button.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownContent.classList.remove('show');
    });
});

//all sticky headers
window.onscroll = function () {
    let stickyheader = document.querySelector('.header');
    if (window.pageYOffset > 1) {
//sticky header
        stickyheader.classList.add("sticky-nav");
    } else {
//normal header
        stickyheader.classList.remove("sticky-nav");
    }
}


//Load More button
function handleLoadMoreClick(event) {
    const container = event.target.closest('.product-cards-cont');
    const loadMoreButton = container.querySelector('.load-more');
    const hiddenCards = container.querySelectorAll('.hidden-prod');

    for (let i = 0; i < Math.min(hiddenCards.length, 3); i++) {
        hiddenCards[i].classList.add('shownCards');
        hiddenCards[i].classList.remove('hidden-prod');
    }

    if (container.querySelectorAll('.hidden-prod').length === 0) {
        loadMoreButton.style.display = 'none';
    }
}

const loadMoreButtons = document.querySelectorAll('.load-more');

loadMoreButtons.forEach(button => {
    button.addEventListener('click', handleLoadMoreClick);
});

//Mobile Filters
const filterBlock = document.querySelector('.filters-mobile');
const filterButton = document.querySelector('.filtersClick');
const filterDropdownContent = document.querySelector('.filters-mobile-cont');
const liItem = document.querySelectorAll('.filters-mobile-cont > li');
const filterOptions = document.querySelectorAll('.filters-mobile-cont button');

filterButton.addEventListener('click', () => {
    filterBlock.classList.toggle('show-mobile');
    filterButton.classList.toggle('show-mobile');
    filterDropdownContent.classList.toggle('show-mobile');
});

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedFilter = option.dataset.filter;
        filterButton.querySelector('h5').textContent = selectedFilter;
        filterBlock.classList.remove('show-mobile');
        filterButton.classList.remove('show-mobile');
        filterDropdownContent.classList.remove('show-mobile');
        liItem.forEach(item => {
            if (item.querySelector('button').dataset.filter === selectedFilter) {
                item.classList.add('d-none');
            } else {
                item.classList.remove('d-none');
            }
        });
    });
});

const filterMobileCont = document.querySelector('.filters-mobile-cont');
filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        filterMobileCont.style.bottom = '-274px';
    });
});

