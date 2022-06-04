const likeButtonShow = () => {
  const cat = document.querySelectorAll(".cat");
  cat.forEach((item) => {
    const likeButton = item.querySelector(".cat__favUnfill");

    item.addEventListener("mouseover", () => {
      likeButton.classList.add("cat__favUnfill-active");
    });

    item.addEventListener("mouseout", () => {
      likeButton.classList.remove("cat__favUnfill-active");
    });
  });
};

const likeButtoActive = () => {
  const likeButton = document.querySelectorAll(".cat__favUnfill");

  likeButton.forEach((button) => {
    const img = button.querySelector(".image_heart");

    button.addEventListener("mouseover", () => {
      img.classList.add("image_heart-hovered");
    });

    button.addEventListener("mouseout", () => {
      img.classList.remove("image_heart-hovered");
    });

    button.addEventListener("click", () => {
      img.classList.toggle("image_heart-liked");
    });
  });
};
