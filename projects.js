// Getting the portfolio section from the HTML document
const projectsSection = document.getElementById('portfolio');

// Defining the projects data
// Each object represents a project with various details
// Including image source, title, type, description, technologies used, and the source link
// Example project is described below
const projects = [
  {
    img: {
      src: './img/diabetes.png',
      alt: 'diabetes prediction',
    },
    title: 'Diabetes Prediction',
    type: ['Machine Learning Project', 'Data Science', 'Aug, 2023'],
    description: 'Group Project for University of San Diegos ADS-504 Machine Learning class. Used various methods and machine learning models to predict diagnosis of diabetes based on individual features. Used hyperparameter tuning to find best parameters for each model that results in the highest AUC ROC score.',
    technologies: ['Python', 'Logistic Regression', 'Random Forest', 'K-Means Clustering'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/ADS_504_Final_Project.ipynb',
  },
  {
    img: {
      src: './img/weather.png',
      alt: 'weather api',
    },
    title: 'Weather API',
    type: ['Javascript API', 'Engineering', '2022'],
    description: 'This is a simple live weather API built using HTML, CSS and JS. It takes a city name from user input and display weather conditions of that city using JSON from weatherapi.com. Inspiration and guide for this project is from The Odin Project course. You can access this project on my website or at the link in the "About" section of this page.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    source: 'https://rogerqiu7.github.io/Live-Weather/',
  },
  {
    img: {
      src: './img/keras.png',
      alt: 'keras',
    },
    title: 'Global Life Expectency',
    type: ['Machine Learning Project', 'Data Science', '2022'],
    description: 'Created a Keras neural network model through a combination of nodes of data inputs, weights, and bias. These all work together to recognize and classify objects within the data using multiple layers of nodes to optimize the prediction. Then, through the processes of gradient descent and backpropagation, the deep learning algorithm adjusts and fits itself for accuracy allowing it to make predictions about a life expectancy based on numerous standardized fields such as vaccinations or schooling. Models like this could eventually inform and bring insights to countries and governments ways to improve the life expectancy of their populations.',
    technologies: ['Python', 'Neural Networks'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/Life%20Expectancy/Life%20Expectancy.ipynb',
  },
  {
    img: {
      src: './img/calculator.png',
      alt: 'calculator',
    },
    title: 'Calculator App',
    type: ['Javascript App', 'Engineering', '2022'],
    description: 'This is a simple calculator app built using HTML, CSS and JS. It takes number entries from buttons selected, performs the selected operators on them and prints it out on the screen. Inspiration and guide for this project is from The Odin Project course. You can access this project on my website or at the link in the "About" section of this page.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    source: 'https://rogerqiu7.github.io/Simple-Calculator/',
  },
/*
  {
    img: {
      src: './img/calculator.png',
      alt: 'java',
    },
    title: 'Java Project',
    type: ['Java', 'Engineering', 'Jan, 2024'],
    description: 'Java',
    technologies: ['Java', 'SCSS', 'Javascript', 'Jest'],
    source: 'https://rogerqiu7.github.io/Simple-Calculator/',
  },
*/
];

// Function to generate a list of items from an array
const generateList = (arr) => arr.reduce((elements, element) => `${elements}<li class="project_detail">${element}</li>`, '');

// Function to generate HTML code for a card representing a project
const generateCard = (project, id) => `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
          ${generateList(project.type)}
        </ul>
        <p class="project__description">${project.description}</p>
        <ul class="flex project_coding_langs">
          ${generateList(project.technologies)}
        </ul>
        <div class="btn-container">
          <a href="${project.source}" target="_blank">
          <button id=${id} class="project-detail btn-primary btn-outlined">See Project</button>
          </a>
        </div>
      </article>
    </section>`;

  
// Event listener to populate the projects section with cards when the window loads
// Iterating over the projects array and inserting each card into the projectsSection
window.addEventListener('load', () => {
  projects.forEach((project, index) => {
    const card = generateCard(project, index);
    projectsSection.insertAdjacentHTML('beforeend', card);
  });
});