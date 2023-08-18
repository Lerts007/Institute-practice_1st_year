const yachts = {
  yacht1: {
    id: 1,
    img: "./img/Yacht1.jpg",
    yachtName: "Azimut Atlantis 51",
    power: 600,
    maxSpeed: 35.0,
    numberOfBeds: 6,
  },
  yacht2: {
    id: 2,
    img: "./img/Yacht2.jpg",
    yachtName: "Princess V40",
    power: 600,
    maxSpeed: 38.0,
    numberOfBeds: 4,
  },
  yacht3: {
    id: 3,
    img: "./img/Yacht3.jpg",
    yachtName: "Galeon 460 Fly",
    power: 600,
    maxSpeed: 30.0,
    numberOfBeds: 6,
  },
  yacht4: {
    id: 4,
    img: "./img/Yacht4.jpg",
    yachtName: "Lagoon 400 S2",
    power: 400,
    maxSpeed: 40.0,
    numberOfBeds: 8,
  },
  yacht5: {
    id: 5,
    img: "./img/Yacht5.jpg",
    yachtName: "Azimut 50",
    power: 670,
    maxSpeed: 32.0,
    numberOfBeds: 6,
  },
  yacht6: {
    id: 6,
    img: "./img/Yacht6.jpg",
    yachtName: "Cranchi E 52 F Evoluzione",
    power: 600,
    maxSpeed: 31.0,
    numberOfBeds: 6,
  },
  yacht7: {
    id: 7,
    img: "./img/Yacht7.jpg",
    yachtName: "Azimut Grande 30 METRI",
    power: 2400,
    maxSpeed: 29.0,
    numberOfBeds: 10,
  },
  yacht8: {
    id: 8,
    img: "./img/Yacht8.jpg",
    yachtName: "Pershing 8X",
    power: 2638,
    maxSpeed: 45.0,
    numberOfBeds: 8,
  },
  yacht9: {
    id: 9,
    img: "./img/Yacht9.jpg",
    yachtName: "Princess S80",
    power: 2000,
    maxSpeed: 33.0,
    numberOfBeds: 8,
  },
  yacht10: {
    id: 10,
    img: "./img/Yacht10.jpg",
    yachtName: "Pershing 9X",
    power: 2638,
    maxSpeed: 42.0,
    numberOfBeds: 12,
  },
};

addYachts(yachts);
function addYachts(yachts) {
  const container = document.querySelector(".infoRent");

  for (const yachtKey in yachts) {
    const yacht = yachts[yachtKey];

    let yachtDiv = document.createElement("div");
    yachtDiv.className = "yacht";
    yachtDiv.id = yachtKey;
    yachtDiv.draggable = false;

    yachtDivImg = document.createElement("img");
    yachtDivImg.src = yacht["img"];

    yachtDivH3 = document.createElement("h3");
    yachtDivH3.textContent = yacht["yachtName"];

    yachtDivP1 = document.createElement("p");
    yachtDivP1.textContent = `Мощность: ${yacht["power"]} л.с.`;

    yachtDivP2 = document.createElement("p");
    yachtDivP2.textContent = `Максимальная скорость: ${yacht["maxSpeed"]} узл.`;

    yachtDivP3 = document.createElement("p");
    yachtDivP3.textContent = `Кол-во спальных мест: ${yacht["numberOfBeds"]} чел.`;

    container.appendChild(yachtDiv);
    yachtDiv.appendChild(yachtDivImg);
    yachtDiv.appendChild(yachtDivH3);
    yachtDiv.appendChild(yachtDivP1);
    yachtDiv.appendChild(yachtDivP2);
    yachtDiv.appendChild(yachtDivP3);
  }
}
