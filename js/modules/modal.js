function openModalWindow(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("visible");
    document.documentElement.style.overflow = "hidden";

    if (modalTimerId) {clearInterval(modalTimerId);}
    
}
function closeModalWindow(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove("visible");
    document.documentElement.style.overflow = "";
}
function modal(triggerSelector, modalSelector, modalTimerId) {
    
    let openModal = document.querySelectorAll(triggerSelector),
    closeModal = document.querySelector(".modal__close"),
    modal = document.querySelector(modalSelector);
    

    openModal.forEach((btn) => {
        btn.addEventListener("click",() => openModalWindow(modalSelector, modalTimerId));
    });
    
    closeModal.addEventListener("click",() => closeModalWindow(modalSelector));
    
    modal.addEventListener("click", (e) => {
        if (e.target == modal || e.target.classList.contains("modal__close")) {
        closeModalWindow(modalSelector);
        }
    });
    
    window.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("visible")) {
        closeModalWindow(modalSelector);
        }
    });
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModalWindow(modalSelector, modalTimerId);
            removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
} //modal
export default modal;
export {openModalWindow, closeModalWindow};