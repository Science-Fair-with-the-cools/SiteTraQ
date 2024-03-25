
// Language files
const translations = {
  en: {
    title: "EcoTraQ (Carbon footprint calculator)",
    questionnaire: "Questionnaire",
    about: "About",
    credits1: "Created by:  Cameron Lemoine and Hasan Ahmed",
    credits2: " With help from: Will Reavie and Aaron Chung",
    topbtn: "Back to Top",
    github: "GitHub Repository",
    pbpage: "ProjectBoard Page",

    // submit: "Submit",
    projectdesc: "People live their everyday lives oblivious that every decision they make alters their impact on our environment. EcoTraQ is a carbon footprint calculator that helps people understand and reduce their environmental impact, it is a tool for tracking personal emissions and website carbon footprints. Users input their lifestyle choices or website links to see how much carbon they release. By comparing user’s results with the average emissions released per capita, we can better understand how to live a more efficient lifestyle. Our project aims to raise awareness for individuals to take action towards a more sustainable future."
  },
  fr: {
    title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
    questionnaire: "Quiz",
    about: "Crédits",
    credits1: "Créé par: Cameron Lemoine et Hasan Ahmed",
    credits2: "Avec aide de: Will Reavie et Aaron Chung",
    topbtn: "En Haut",
    github: "Page de GitHub",
    pbpage: "Page de ProjectBoard",

    // submit:"Soumettre",
    projectdesc: "Les gens vivent leur vie quotidienne sans se rendre compte que chaque décision qu'ils prennent modifie leur impact sur l'environnement. EcoTraQ est un calculateur d'empreinte carbone qui aide les gens à comprendre et à réduire leur impact sur l'environnement. C'est un outil qui permet de suivre les émissions personnelles et l'empreinte carbone des sites web. Les utilisateurs saisissent leurs choix de mode de vie ou les liens de leur site web pour connaître la quantité de carbone qu'ils émettent. En comparant les résultats des utilisateurs avec les émissions moyennes par habitant, nous pouvons mieux comprendre comment adopter un mode de vie plus efficace. Notre projet vise à sensibiliser les individus à agir en faveur d'un avenir plus durable."
  }
};

// Function to switch language
function switchLanguage(lang) {
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('projectdesc').textContent = translations[lang].projectdesc;
  document.getElementById('questionnaire').textContent = translations[lang].questionnaire;
  document.getElementById('about').textContent = translations[lang].about;
  document.getElementById('credits2').textContent = translations[lang].credits2;

  document.getElementById('credits1').textContent = translations[lang].credits1;
  document.getElementById('topbtn').textContent = translations[lang].topbtn;
  document.getElementById('github').textContent = translations[lang].github;
  document.getElementById('pbpage').textContent = translations[lang].pbpage;


  // code below not working cause submit button is programmed as an input not a button idk

  // document.getElementsById('submit').textContent = translations[lang].submit;

}


// Detect user's language
const userLanguage = navigator.language.split('-')[0];
switchLanguage(userLanguage);

// Get button
const topBtn = document.getElementById("topbtn");

// Scroll to top
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
