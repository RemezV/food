import {getData} from '../services/services';

function cards() {
    class MenuCard {
        constructor(container, src, alt, title, descr, price, ...classes) {
          this.container = container;
          this.src = src;
          this.alt = alt;
          this.title = title;
          this.descr = descr;
          this.price = (price * 28).toFixed(2);
          this.classes = classes;
        }
        render() {
          let card = document.createElement("div");
          if (this.classes.length == 0) {
            this.classes.push("menu__item");
          }
          this.classes.forEach((className) => {
            card.classList.add(className);
          });
          card.innerHTML = `
                  <img src=${this.src} alt=${this.alt}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
              `;
          document.querySelector(this.container).append(card);
        }
      }
        
      getData("http://localhost:3000/menu").then((data) => {
        data.forEach(({ img, altimg, title, descr, price }) => {
          new MenuCard(
            ".menu__field .container",
            img,
            altimg,
            title,
            descr,
            price
          ).render();
        });
      });
}

export default cards;