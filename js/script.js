///////////Nikko et Loic /////////

const courses = [
  {
    picture: "img/wok-porc-gambas-langoustines.png",
    title: "Wok de porc, crevettes et langoustines",
    category: ["Asiatique", " Wok", " Viande", " Poisson"],
    description:
      "Dans cette recette, le porc est taillé en lanières et mis en cuisson le premier pour avoir le temps de cuire, viennent ensuite les fruits de mer qui nécessitent une cuisson courte et les courgettes taillées en bâtonnets pour qu'elles cuisent en restant juste un peu fermes. Vous pouvez servir ce wok tel quel ou accompagné d'un petit bol de riz blanc par personne, selon votre appétit.",
    price: 14.5,
  },
  {
    picture: "img/risotto-calamar-chorizo.png",
    title: "Risotto calamars et chorizo",
    category: ["Européen", " Wok", " Viande", " Poisson"],
    description:
      "Le risotto est un apprêt de riz d'origine italienne réalisé avec un riz rond à forte teneur en amidon tels que l'Arborio ou le Carnaroli. Pour la cuisson, j'utilise toujours un wok qui permet un mélange idéal des ingrédients.",
    price: 11.95,
  },
  {
    picture: "img/quiche-roquette.png",
    title: "Quiche à la roquette et au jambon cru",
    category: ["Européen", " Viande"],
    description:
      "Version assez sympathique pour changer un peu de la classique quiche lorraine. Nous avons particulièrement apprécié la fraîcheur apportée par la roquette et la feta. Et si vous appréciez les produits de la mer, la quiche aux fruits de mer (selon que vous y ajouterez du poisson ou non) sera parfaite en entrée comme en plat unique accompagnée d'une salade de saison.",
    price: 8.5,
  },
  {
    picture: "img/legumes-vapeur.png",
    title: "Meunière de fruits de mer aux légumes vapeur",
    category: ["Vapeur", " Poisson"],
    description:
      "Si vous utilisez des saint Jacques fraîches les coquilles doivent être fermées ou se fermer lorsqu'on les touche. Elles doivent être lourdes. Le bord du manteau touché avec la pointe du couteau doit se rétracter. Si vous utilisez des noix de Saint Jacques surgelées, sortez les noix de leur sachet et posez les sur une assiette, couvrez d'un film alimentaire et laissez les plusieurs heures au réfrigérateur.",
    price: 13.85,
  },
  {
    picture: "img/recette_Salade_composee.png",
    title: "Salade composée",
    category: ["Vegetarien"],
    description:
      "La salade composée, c'est toujours un bonheur quelque soit sa composition. Un savoureux mélange de légumes, du cru, du cuit, le tout relevé par des herbes aromatiques et une vinaigrette typée pour marquer le thème choisi.",
    price: 7.5,
  },
  {
    picture: "img/pates-saumon.png",
    title: "Spaghettis au saumon fumé",
    category: ["Européen", " Poisson"],
    description:
      "Achetez pour l'occasion de vrais spaghetti italiens ou encore mieux, faites vos spaghettis maison. Ajouter un peu d'échalote suée et de la crème ou une simple et bonne huile d'olive sur les pâtes et des herbes aromatiques en quantité généreuse pour \"rafraîchir\" le goût prononcé du saumon fumé.",
    price: 9.95,
  },
  {
    picture: "img/bowl-dish-food-produce-vegetable-soup.png",
    title: "Potage aux topinambours et salade de saison",
    category: ["Vegetarien", " Américain"],
    description:
      "Originaire d'Amérique du Nord et portant le nom d'une peuplade du Brésil, le topinambour fut introduit en France par Champlain. Bien que faisant partie des \"tubercules\" et parfois assimilé à la pomme de terre, il ne contient pas d'amidon. L'arrow-root est une fécule légère et digeste que les cuisiniers utilisaient autrefois pour lier sauces et potages. Vous pouvez servir ce potage avec un peu de coriandre fraîche.",
    price: 7.75,
  },
  {
    picture: "img/salade-chevre-chaud.png",
    title: "Salade au chèvre chaud",
    category: ["Vegetarien"],
    description:
      "Une salade gourmande et parfumée qui joue avec la douceur et le moelleux du fromage et le croustillant du toast. N'hésitez pas à réaliser cette salade de chèvre chaud en version hiver avec de la mâche ou un coeur de frisée et une julienne de betterave rouge crue ou de radis noir plus piquant. Adaptez l'assaisonnement avec une huile d'olive et du vinaigre balsamique et un peu de pesto de roquette !",
    price: 8.5,
  },
  {
    picture: "img/mousse-chocolat-blanc.png",
    title: "Mousse au chocolat blanc",
    category: ["Dessert", " Vegetarien"],
    description:
      "C'est la recette de base de la mousse au chocolat blanc. Une fois réalisée, si vous le désirez, vous pouvez y ajoutant des éclats de chocolat noir ou de pistaches et autres fruits secs ou même de macarons. Cette mousse est très douce, presque trop ! Il faut jouer sur les contrastes. Elle gagnera a être servie en accompagnement de fruits frais (fraises, framboises...) ou avec du chocolat noir amer, un coulis de fruits rouges ou même un caramel avec des pépites de nougatine.",
    price: 6.95,
  },
  {
    picture: "img/compote-de-rhubarbe.png",
    title: "Compote de rhubarbe",
    category: ["Dessert", " Vegetarien"],
    description:
      "Servez la bien froide dans des petits verres avec de la crème fouettée ou de la crème tiramisu en couches superposées et quelques langues de chat bien craquantes. La douceur sucrée de la crème et l'acidité de la compote s'associent à merveille. La rhubarbe est aussi excellente en tarte ou en crumble.",
    price: 6.75,
  },
  {
    picture: "img/rognon-veau-madere.png",
    title: "Rognons de veau au Madère",
    category: ["Européen", " Viande"],
    description:
      "La cuisson dite \"à la goutte de sang\" est une cuisson rapide qui s'adapte très bien aux rognons de veau mais qui n'est pas recommandée pour des rognons de boeuf ou de porc. Suivant la taille des rognons de veau et la façon dont vous allez les servir vous compterez en général un rognon pour une ou deux personnes.",
    price: 10.75,
  },
  {
    picture: "img/salade-cressonniere.png",
    title: "Salade cressonnière",
    category: ["Vegetarien"],
    description:
      "Une petite salade de pommes de terre toute simple et économique puisque vous garderez les tiges du cresson pour faire un potage. Une recette simple classique où la vinaigrette moutardée s'accordera avec le goût prononcé du cresson. Cuisine légère aussi parce que la vinaigrette a beaucoup de saveur donc il en faut peu pour assaisonner cette salade.",
    price: 7.95,
  },
];

let sectionMain = document.querySelector("section.main_container");

courses.forEach((food) => {
  let section = document.createElement("section");
  section.setAttribute("data-category", food.category);
  section.innerHTML = `<img src= ${food.picture} > <div class="info"><span class="title_food" > ${food.title} </span> <span class="category_food"> Catégorie: ${food.category} </span> <span class="aliments_food"> Description: ${food.description} </span> <span class="price_food"> Prix: ${food.price} </span>   <button class="button_achat">Ajouter au panier</button></div>  `;

  sectionMain.appendChild(section);
  section.setAttribute("class", "main_container_card");
});
////////////////////////////Tous/////////////
function TousSections() {
  const sectionsAll = document.querySelectorAll("section");

  for (let i = 0; i < sectionsAll.length; i++) {
    sectionsAll[i].style.display = "block";
  }
}

const buttonTous = document.getElementById("all-button");
buttonTous.addEventListener("click", TousSections);
////////////////////////////POISSON/////////////
function hideNonPoissonSections() {
  const sections = document.querySelectorAll("section[data-category]");

  for (let i = 0; i < sections.length; i++) {
    const category = sections[i].getAttribute("data-category");
    if (!category.includes("Poisson")) {
      sections[i].style.display = "none";
    } else {
      sections[i].style.display = "block";
    }
  }
}

const buttonPoisson = document.getElementById("poisson-button");
buttonPoisson.addEventListener("click", hideNonPoissonSections);

///////////////////////////VIANDE////////////////

function hideNonViandeSections() {
  const sections = document.querySelectorAll("section[data-category]");

  for (let i = 0; i < sections.length; i++) {
    const category = sections[i].getAttribute("data-category");
    if (!category.includes("Viande")) {
      sections[i].style.display = "none";
    } else {
      sections[i].style.display = "block";
    }
  }
}

const buttonViande = document.getElementById("viande-button");
buttonViande.addEventListener("click", hideNonViandeSections);

///////////////////////////VEGETARIEN////////////////

function hideNonVegetarienSections() {
  const sections = document.querySelectorAll("section[data-category]");

  for (let i = 0; i < sections.length; i++) {
    const category = sections[i].getAttribute("data-category");
    if (!category.includes("Vegetarien")) {
      sections[i].style.display = "none";
    } else {
      sections[i].style.display = "block";
    }
  }
}

const buttonVege = document.getElementById("vegetarien-button");
buttonVege.addEventListener("click", hideNonVegetarienSections);

///////////////////////////DESSERT////////////////

function hideNonDessertSections() {
  const sections = document.querySelectorAll("section[data-category]");

  for (let i = 0; i < sections.length; i++) {
    const category = sections[i].getAttribute("data-category");
    if (!category.includes("Dessert")) {
      sections[i].style.display = "none";
    } else {
      sections[i].style.display = "block";
    }
  }
}

const buttonDessert = document.getElementById("dessert-button");
buttonDessert.addEventListener("click", hideNonDessertSections);

///////////////////////////Wok////////////////

function hideNonWokSections() {
  const sections = document.querySelectorAll("section[data-category]");

  for (let i = 0; i < sections.length; i++) {
    const category = sections[i].getAttribute("data-category");
    if (!category.includes("Wok")) {
      sections[i].style.display = "none";
    } else {
      sections[i].style.display = "block";
    }
  }
}

const buttonWok = document.getElementById("wok-button");
buttonWok.addEventListener("click", hideNonWokSections);
///////////////////////////////PRIX///////////////////////////////////

function sortPrice() {
  courses.sort((a, b) => (a.price > b.price ? 1 : -1));
}

///////////////////////////////PANIER//////////////////////////////////////
// const cart = document.querySelector("footer_panier");
// const buttonCart = document.querySelectorAll("button_achat");

// function display() {
//   console.log("Ok");
// }
// buttonCart.addEventListener("click", display);

// buttonCart.forEach((but) => {
//   but.addEventListener("click", display);
// });

const buttonCart = document.querySelectorAll(".button_achat");
const cart = document.querySelector(".footer_panier");

buttonCart.forEach(function (but) {
  but.addEventListener("click", function () {
    const sectionParent = but.closest("div");

    const sectionClone = sectionParent.cloneNode(true);
    delete sectionClone["description"];
    console.log(sectionClone);
    cart.appendChild(sectionClone);
  });
});
