function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tab = document.querySelectorAll(tabsSelector),
          tabContent = document.querySelectorAll(tabsContentSelector),
          tabBoard = document.querySelector(tabsParentSelector);
  
    function hideTabsContent() {
      tabContent.forEach((item) => {
        item.classList.add("hidden");
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }
    hideTabsContent();
  
    function showTabContent(i = 0) {
      tabContent[i].classList.remove("hidden");
      tab[i].classList.add(activeClass);
    }
    showTabContent();
  
    tabBoard.addEventListener("click", (event) => {
      const target = event.target;
  
      tab.forEach((item, i) => {
        if (target && target == item) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    });
}

export default tabs;