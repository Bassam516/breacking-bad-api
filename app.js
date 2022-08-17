/*TODO: breacking bad api (new way to fetch data)*/
async function get() {
  let response = await fetch("https://www.breakingbadapi.com/api/characters/");
  let data = await response.json();
  console.log(data);
  let cards = document.querySelector(".breacking-bad");
  cards.innerHTML = "";
  data.forEach((ac) => {
    let h2 = document.createElement("h2");
    let span = document.createElement("span");
    let img = document.createElement("img");
    let card = document.createElement("div");
    card.setAttribute("class", "cards");
    h2.innerHTML = ac.name;
    span.innerHTML = ac.birthday;
    img.src = ac.img;
    cards.append(card);
    card.append(img, h2, "Birthday: ",span);
  });
}

/*TODO: breacking bad api (new way to fetch data) by name*/

async function getDataByName() {
  let res = await fetch("https://www.breakingbadapi.com/api/characters/");
  let data = await res.json();

  let select = document.getElementById("actorName");
  select.innerHTML = data.map(
    (d) => `<option value=${d.char_id}>${d.name}</option>`
  );
}
getDataByName();

async function getDataById(value) {
  let id = value;
  let res = await fetch("https://www.breakingbadapi.com/api/characters/" + id);
  let data = await res.json();
  console.log(data);
  let cards = document.querySelector(".breacking-bad");
  let h2 = document.createElement("h2");
  let span = document.createElement("span");
  let img = document.createElement("img");
  let card = document.createElement("div");
  card.setAttribute("class", "cards");
  h2.innerHTML = data[0].name;
  span.innerHTML = data[0].birthday;
  img.src = data[0].img;
  cards.innerHTML = "";
  cards.append(card);
  card.append(img, h2, "Birthday: ", span);
}
