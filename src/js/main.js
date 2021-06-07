import lang_switch from './modules/lang_switch';
import addPortfoliosToHtml from './modules/addPortfoliosToHtml';
import addSlickSlidesToHtml from './modules/addSlickSlidesToHtml';
import filter from './modules/filter';
import modalSliders from './modules/modalSliders';
import checkNameInputs from './forms/checkNameInputs';
import mask from './forms/mask';
import checkMailInputs from './forms/checkMailInputs';
import forms from './forms/forms';
import menuTabs from './modules/menuTabs';
import slickSlider from './modules/slickSlider';
//import metrika from './modules/metrika';

window.onload = () => {
    setTimeout(() => {
        slickSlider();
        filter();
        modalSliders('.carousel__inner', true);
    }, 500);
}

'use strict';

window.addEventListener('DOMContentLoaded', () => {

    lang_switch();
    addSlickSlidesToHtml('.carousel .carousel__inner');
    addPortfoliosToHtml('#portfolio .portfolio-wrapper');
    modalSliders('.portfolio-wrapper', true);
    modalSliders('.carousel__inner', true);
    checkNameInputs('[name="name"]');
    mask('[name="phone"]');
    checkMailInputs('[name="email"]');
    forms();
    menuTabs();
    //metrika();

});