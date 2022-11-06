const btns = document.querySelectorAll(".btn");
const all = document.querySelectorAll(".all");
const input = document.querySelectorAll("input");
const main = document.querySelector("main");
let data;

const fetchData = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  foo(data);
};

input.forEach((x) => {
  x.addEventListener("change", (e) => {
    const filteredData = data.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    main.innerHTML = "";
    console.log(filteredData);
    foo(filteredData);
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filteredData = data.filter((el) => el.house === e.target.innerHTML);
    main.innerHTML = "";
    foo(filteredData);
  });
});


btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filteredData = data.filter((el) => el.house === e.target.innerHTML);
    main.innerHTML = "";
    foo(filteredData);
  });
});

all.forEach((x) => {
  x.addEventListener("click", (e) => {
    const filteredData = data;
    main.innerHTML = "";
    foo(filteredData);
  });
});

window.onload = fetchData();
const background = (house) => {
  switch (house) {
    case "Gryffindor":
      return "#d80c0c";
    case "Slytherin":
      return "#38761d";
    case "Hufflepuff":
      return "#f2db18";
    case "Ravenclaw":
      return "lightgray";

    default:
      return "grey";
  }
};

const avatar = (image, gendre) => {
  if (image === "") {
    if (gendre === `male`) {
      return "css/imgicons/men.jpeg";
    } else {
      return "css/imgicons/women.jpeg";
    }
  } else return image;
};

const undefiendCheck = (info) => {
  return info === "" ? ": не известно" : info;
};

const foo = (data) => {
  data.forEach((el) => {


    const card = document.createElement("div");
    main.append(card);
    card.innerHTML = `<div class="card" class="${el.house}" style="background:${background(el.house)};>
  <div class="desc">
    <ul>
    <li><span>Name:</span> ${el.name}</li>
    <li><span>Actor:</span> ${el.actor}</li>
    <li><span>Birth date</span> ${undefiendCheck(el.dateOfBirth)}</li>
    <li><span>Hair Colour:</span> ${el.hairColour}</li>
    <li><span>Species:</span> ${el.species}</li>
    <li><span>Gender:</span> ${el.gender}</li>
    <li><span>House:</span> ${el.house}</li>
    <li><span>Patronus:</span> ${undefiendCheck(el.patronus)}</li>
    <li><span>Ancestry:</span> ${undefiendCheck(el.ancestry)}</li>
    </ul>
    <img src="${avatar(el.image, el.gender)}" alt="">
    </div>


    </div>`;
  });
};
