import {openModalWindow, closeModalWindow} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    let forms = document.querySelectorAll(formSelector),
    messages = {
        success: "Данные успешно отправлены",
        loading: "icons/spinner.svg",
        err: "Произошла ошибка",
    };

    forms.forEach((form) => {
        sendForm(form);
    });


    function sendForm(form) {
        form.addEventListener("submit", (e) => {
        e.preventDefault();

        let spinner = document.createElement("img");
        spinner.src = messages.loading;
        spinner.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
        form.insertAdjacentElement("afterend", spinner);

        const formData = new FormData(form);
        let json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData("http://localhost:3000/requests", json)
            .then((data) => {
            spinner.remove();
            openModalWindow('.modal', modalTimerId);
            showThanksModal(messages.success);
            form.reset();
            })
            .catch(() => {
            openModalWindow('.modal', modalTimerId);
            showThanksModal(messages.err);
            });
        });
    }

    function showThanksModal(message) {
        let regularContent = document.querySelector(".modal__content"),
            thanksContent = document.createElement("div");

        thanksContent.classList.add("modal__content");
        regularContent.classList.add("hidden");

        thanksContent.innerHTML = `
            <div class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        `;
        document.querySelector(".modal__dialog").append(thanksContent);

        setTimeout(() => {
        thanksContent.remove();
        regularContent.classList.remove("hidden");
        closeModalWindow('.modal');
        }, 3000);
    }
}

export default forms;