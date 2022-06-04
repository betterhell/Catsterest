const setFavoriteCats = () => {
  const myFavoriteCats = JSON.parse(localStorage.getItem("favoriteCats"));
  const listFav = document.querySelector("#favoriteCats");

  for (key in myFavoriteCats) {
    fetch(
      `https://api.thecatapi.com/v1/images/${myFavoriteCats[key]}?api_key=e7fc49e2-94ce-425e-b9d0-c882218dbd30`
    )
      .then((responce) => {
        return responce.json();
      })
      .then(
        (data) =>
          (listFav.innerHTML += `<div id="${myFavoriteCats[key]}" class="cat">
      <img class="cat__image" src="${data.url}" alt="Котик" />
      <button class="cat__favUnfill">
        <img class="image_heart" src="images/favorite_border.svg" alt="Добавить в Любимые" />
      </button>
      </div>`)
      );
  }
};

setFavoriteCats();
