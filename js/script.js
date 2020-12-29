import tabs from './modules/tabs';
import calculator from './modules/calculator';
import slider from './modules/slider';
import forms from './modules/forms';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import scrolling from './modules/scrolling';
import {openModalWindow} from './modules/modal';

document.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModalWindow('.modal', modalTimerId), 300000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    forms("form", modalTimerId);
    modal("[data-modal]", ".modal", modalTimerId);
    slider({
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        totalCounter: "#total",
        currentCounter: "#current",
        slide: ".offer__slide"
    });
    timer(".timer", '2021-01-30');
    cards();
    calculator();
    scrolling();
});
  