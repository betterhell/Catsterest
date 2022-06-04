const url = "https://api.thecatapi.com/v1/images/search?limit=20";
const list = document.querySelector(".cats");

async function fetchCats() {
  try {
    let responce = await fetch(url);
    let content = await responce.json();

    for (key in content) {
      list.innerHTML += `<div id="${content[key].id}" class="cat">
    <img class="cat__image" src="${content[key].url}" alt="Котик" />
    <button class="cat__favUnfill">
      <img class="image_heart" src="images/favorite_border.svg" alt="Добавить в Любимые" />
    </button>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

async function setCats() {
  await fetchCats();
  likeButtonShow();
  likeButtoActive();
  favoriteCats();
}

setCats();
