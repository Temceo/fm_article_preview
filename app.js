const shareIcons = document.querySelectorAll(".share-icon");
console.log(shareIcons);

shareIcons.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".share").classList.toggle("hide");
  });
});
