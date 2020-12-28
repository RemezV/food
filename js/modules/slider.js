import {addZero} from './timer';

function slider({slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const prevSlide = document.querySelector(prevArrow),
        nextSlide = document.querySelector(nextArrow),
        slides = document.querySelectorAll(slide),
        slidesQuantity = document.querySelector(totalCounter),
        currentSlide = document.querySelector(currentCounter),
        sliderWrapper = document.querySelector(wrapper),
        slidesField = sliderWrapper.querySelector(field),
        slideWidth = window.getComputedStyle(sliderWrapper).width;
    let   slideIndex = 1,
            offset = 0;

    slidesQuantity.textContent = addZero(slides.length);
    currentSlide.textContent = addZero(slideIndex);

    sliderWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
        slide.style.width = slideWidth;
    });

    slidesField.style.display = "flex";
    slidesField.style.width = 100 * slides.length + "%";

    function toNum(str) { return +str.replace(/\D/g, '');}

    function setActiveDot() {
        dots.forEach((dot) => {
            dot.style.opacity = 0.5;
        });
        dots[slideIndex - 1].style.opacity = 1;
    }
    function showSlideNumber() { currentSlide.textContent = addZero(slideIndex); }

    nextSlide.addEventListener("click", () => {
        
        if (offset == toNum(slideWidth) * (slides.length - 1)) {
        offset = 0;
        } else {
        offset += toNum(slideWidth);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
        slideIndex = 1;
        } else {
        slideIndex++;
        }

        showSlideNumber();
        setActiveDot();
    });

    prevSlide.addEventListener("click", () => {
        if (offset == 0) {
        offset = toNum(slideWidth) * (slides.length - 1);
        } else {
        offset -= toNum(slideWidth);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
        slideIndex = slides.length;
        } else {
        slideIndex--;
        }

        showSlideNumber();
        setActiveDot();
    });

    // Dots for slider
    let dotsWrapper = document.createElement("ol"),
        slider = document.querySelector(".offer__slider"),
        dots = [];

    slider.style.position = "relative";
    dotsWrapper.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(dotsWrapper);

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("li");
        dot.setAttribute("data-slide", i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;

        dots.push(dot);
        dotsWrapper.append(dot);
        if (i == 0) {
        dot.style.opacity = 1;
        }
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
        let slideTo = e.target.getAttribute("data-slide");

        slideIndex = slideTo;

        offset = toNum(slideWidth) * (slideIndex - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        setActiveDot();
        showSlideNumber();
        });
    });
} // slider

export default slider;