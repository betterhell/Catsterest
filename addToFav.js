
const favoriteCats = () => {
  const cat = document.querySelectorAll(".cat");
  const likeButtonActive = document.querySelectorAll(".cat__favUnfill");
  const favoriteCatsArray = [];

  likeButtonActive.forEach((button) =>
    button.addEventListener("click", () => {
      const idFavCats = button.parentNode.id;
      favoriteCatsArray.push(idFavCats);
      localStorage.setItem("favoriteCats", JSON.stringify(favoriteCatsArray));
    })
  );
};
