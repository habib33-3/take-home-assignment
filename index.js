const cardData = [
  {
    title: "Holistic Development",
    description: "Right Mix of Curricular and Co-Curricular Activities.",
    img: "assets/card1.jpg",
  },
  {
    title: "Proven and Tested Centralized Curriculum",
    description:
      "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students.",
    img: "assets/card2.jpg",
  },
  {
    title: "Innovative and Challenging learning Methodologies",
    description:
      "Facilitate excellence through critical thinking and profound learning.",
    img: "assets/card3.jpg",
  },
  {
    title: "Faculty Enrichment Program",
    description: "Regular teacher training and curriculum workshops",
    img: "assets/card4.jpg",
  },
];

const cardContainer = document.getElementById("card-container");

cardData.forEach((data) => {
  const card = document.createElement("div");


  cardContainer.appendChild(card);
});
