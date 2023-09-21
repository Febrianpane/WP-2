const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const product = [
  {
    id: 1,
    title: "JORDAN",
    price: 1500000,
    colors: [
      {
        code: "blue",
        Img: "./IMAGE/nike1.png",
      },
      {
        code: "blue",
        Img: "./IMAGE/nike2.png",
      },
    ],
  },
  {
    id: 2,
    title: "PUMA",
    price: 1500000,
    colors: [
      {
        code: "blue",
        Img: "./IMAGE/puma.png",
      },
      {
        code: "blue",
        Img: "./IMAGE/puma2.png",
      },
    ],
  },
  {
    id: 3,
    title: "ADIDAS",
    price: 1500000,
    colors: [
      {
        code: "blue",
        Img: "./IMAGE/ads1.png",
      },
      {
        code: "blue",
        Img: "./IMAGE/converse2.png",
      },
    ],
  },
  {
    id: 4,
    title: "CONVERSE",
    price: 1500000,
    colors: [
      {
        code: "blue",
        Img: "./IMAGE/NIKE1.png",
      },
      {
        code: "blue",
        Img: "./IMAGE/NIKE1.png",
      },
    ],
  },
  {
    id: 5,
    title: "JORDAN",
    price: 1500000,
    colors: [
      {
        code: "blue",
        Img: "./IMAGE/NIKE1.png",
      },
      {
        code: "blue",
        Img: "./IMAGE/NIKE1.png",
      },
    ],
  },
];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});