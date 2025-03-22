// Getting the portfolio section from the HTML document
const projectsSection = document.getElementById('portfolio');

// Defining the projects data
// Each object represents a project with various details
// Including image source, title, type, description, technologies used, and the source link
// Example project is described below
const projects = [
  {
    img: {
      src: './img/SpringBoot.png',
      alt: 'springboot',
    },
    title: 'Spring Bank App',
    type: ['Back-end', 'Mar, 2025'],
    description: 'Simple Spring Boot application with JPA and MySQL DB, using RESTful APIs to create, read, update, and delete account information.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL DB', 'REST APIs'],
    source: 'https://github.com/rogerqiu7/Spring-Bank/tree/main',
  },
  {
    img: {
      src: './img/exponent-webpage.png',
      alt: 'exponent',
    },
    title: 'Exponent Web App',
    type: ['Full-stack / DevOps project', 'Infrastructure', 'Jan, 2025'],
    description: 'Full-stack DevOps project using Terraform, AWS, Jenkins, Javascript and REST APIs with a complete CI/CD pipeline and cloud infrastructure. This project uses a simple exponent calculator web application with a complete CI/CD pipeline and cloud infrastructure. When users input a base number and exponent, the application calculates the result and stores the data in a database.',
    technologies: ['Terraform', 'AWS', 'Jenkins', 'Javascript', 'REST APIs'],
    source: 'https://github.com/rogerqiu7/Exponent-Web-App',
  },
  {
    img: {
      src: './img/stomachcancer.png',
      alt: 'stomach cancer',
    },
    title: 'County-Level Predictive Modeling of Gastric Cancer Mortality',
    type: ['Machine Learning Project', 'Data Science', 'Aug, 2024'],
    description: 'Capstone project using machine learning to predict stomach cancer mortality rates across US counties by analyzing 353 demographic, social determinants of health, and health equity factors, aiming to optimize resource allocation and identify key areas for public health interventions',
    technologies: ['Data Engineering', 'Data Mining', 'Data Visualization', 'EDA', 'Inferential Statistics', 'Dimensionality Reduction (PCA)', 'Predictive Modeling', 'Machine Learning', 'Hyperparameter Tuning (GridSearchCV)', 'SHAP Values for Model Explainability'],
    source: 'https://github.com/rogerqiu7/Cancer-Mortality-Prediction',
  },
  {
    img: {
      src: './img/carprediction.png',
      alt: 'car prediction',
    },
    title: 'Car Price and Trim Prediction',
    type: ['Machine Learning Project', 'Data Science', 'June, 2024'],
    description: 'The project utilized various preprocessing methods such as normalization, one-hot encoding, TF-IDF vectorization, and Principal Component Analysis (PCA) to handle high-dimensional data. The best models, Logistic Regression for trim prediction and Linear (Ridge) Regression for price prediction, were selected and optimized using GridSearchCV for high accuracy and performance.',
    technologies: ['EDA', 'Data Pre-processing', 'Natural Language Processing', 'Dimensionality Reduction','Hyperparameter Tuning'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/CarPriceAndTrimPrediction/CarPriceAndTrimPrediction.ipynb',
  },
  {
    img: {
      src: './img/cartext.png',
      alt: 'car text',
    },
    title: 'Car Brand Text Prediction',
    type: ['Machine Learning Project', 'Data Science', 'May, 2024'],
    description: 'The project uses an API to retrieve text from news articles and then performs various natural languague processing methods such as sentiment analysis, classification models from TF-IDF Vectorization, and topic modeling.',
    technologies: ['APIs', 'EDA', 'Natural Language Processing', 'Machine Learning Models', 'NLTK', 'Regex', 'Sentiment Analysis', 'Topic Modeling'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/CarBrandTextComparison/CarBrandTextComparison.ipynb',
  },
  {
    img: {
      src: './img/breastcancerprediction.png',
      alt: 'cancer prediction',
    },
    title: 'Breast Cancer prediction',
    type: ['Machine Learning Project', 'Data Science', 'March, 2024'],
    description: 'This project uses machine learning techniques to diagnose breast cancer,using EDA, data pre-processing, Logistic Regression, Decision Tree, Random Forest, K-Nearest Neighbors, and XGBoost. Hyperparameter tuning is used to optimize these models, and feature selection techniques such as univariate feature selection, recursive feature elimation with cross validation (RFECV) and principal component analysis (PCA) are used to identify the most relevant features.',
    technologies: ['EDA', 'data pre-processing','Hyperparameter tuning','Feature Selection', 'Feature Importance', 'SHAP values'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/Breast%20Cancer%20Prediction/BreastCancerPrediction.ipynb',
  },
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
  }
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