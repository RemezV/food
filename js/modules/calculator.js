function calculator() {

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, activity;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('activity')) {
        activity = localStorage.getItem('activity');
    } else {
        activity = '1.375';
        localStorage.setItem('activity', 1.375);
    }

    function calcCalories() {
        if(!sex || !height || !weight || !age || !activity) {
        result.textContent = '';
        return;
        }
        if(sex == 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity) + ' ккал';
        } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity) + ' ккал';
        }
    }

    function currentElement(selector) {
        let elements = document.querySelectorAll(selector);

        elements.forEach(element => {
        element.classList.remove('calculating__choose-item_active');
        if (element.getAttribute('id') === localStorage.getItem('sex')) {
            element.classList.add('calculating__choose-item_active');
        }
        if (element. getAttribute('data-activity') === localStorage.getItem('activity')) {
            element.classList.add('calculating__choose-item_active');
        }
        });
    }
    currentElement("#gender div");
    currentElement(".calculating__choose_big div");

    function getStaticInfo(parentSelector) {
        let elements = document.querySelectorAll(`${parentSelector} div`);
        elements.forEach(element => {
        element.addEventListener('click', (e) => {

            if (e.target.getAttribute('data-activity')) {
            activity = +e.target.getAttribute('data-activity');
            localStorage.setItem('activity', +e.target.getAttribute('data-activity'));
            } else {
            sex = e.target.getAttribute('id');
            localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            elements.forEach(element => {
            element.classList.remove('calculating__choose-item_active');
            });
            e.target.classList.add('calculating__choose-item_active');
            calcCalories();
        });
        });
    }

    function getDynamicInfo(selector) {
        let input = document.querySelector(selector);

        input.addEventListener('input', () => {
        if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = '';
        }
        switch (input.getAttribute('id')) {
            case 'height':
            height = +input.value;
            break;
            case 'weight':
            weight = +input.value;
            break;
            case 'age':
            age = + input.value;
            break;
        }
        calcCalories();
        });
    }
    getStaticInfo('#gender');
    getStaticInfo('.calculating__choose_big');
    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');
}
export default calculator;