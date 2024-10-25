const root = document.querySelector(".root");

function renderCard() {
  let card = dataCourses
    .map(item => {
      return `
            <div class="card">
                <img id="img__card" src="${item.image}" alt="" width="325" height="200">
              <h3 id="card__title">${item.title}</h3>
              <p id="card__caption">${item.caption}</p>
              <h4 id="card__master"><img src="${item.masterLogo}" alt="" width="30" height="30">${item.master}</h4>
              <h5 id="card__time">${item.time}<img src="${item.timeLogo}" alt=""></h5>
              <hr id="card__hr">
              <h4 id="card__price">${item.price}<img src="${item.priceLog}" alt="" width="30" height="30"></h4>
              </div>
        
        `;
    })
    .join("");

  root.innerHTML = card;
}

renderCard()