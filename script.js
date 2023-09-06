const models = [
  {
    name: "Honda Civic",
    img: "img/honda.png",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Mercedes",
    img: "img/mercedes.png",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Audi",
    img: "img/audi.png",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
];

let index = 0;
const sliderCount = models.length;
var interval;

showSlide(index);

document.querySelector(".fa-arrow-left").addEventListener("click", () => {
  changeSlide(-1);
});

document.querySelector(".fa-arrow-right").addEventListener("click", () => {
  changeSlide(1);
});

function changeSlide(step) {
  index += step;
  if (index < 0) {
    index = sliderCount - 1;
  } else if (index >= sliderCount) {
    index = 0;
  }
  showSlide(index);
}

function showSlide(index) {
  document.getElementById("card-title").textContent = models[index].name;
  document.querySelector(".card-img-top").setAttribute("src", models[index].img);
  document.getElementById("card-text").textContent = models[index].text;
}

document.querySelectorAll('.arrow').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'pointer';
  });
  item.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
  });
});
