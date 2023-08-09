// Getting the portfolio section from the HTML document
const projectsSection = document.getElementById('portfolio');

// Defining the projects data
// Each object represents a project with various details
// Including image source, title, type, description, technologies used, and the source link
// Example project is described below
const projects = [
  {
    img: {
      src: './img/project-9-desktop.png',
      alt: 'Car Rental preview',
    },
    title: 'Diabetes Prediction',
    type: ['End to End Machine Learning Project', 'Data Science', 'Aug, 2023'],
    description: 'Car Rental is a basic app that allows users to reserve a car, add new cars, and delete existing ones. The backend is built using Ruby On Rails and communicates with Reactjs app on the frontend to provide a seamless user experience. The app also includes functionality for user authentication and authorization, allowing only authorized users to perform actions such as adding or deleting cars.',
    technologies: ['Ruby', 'Ruby On Rails', 'PostgreSQL', 'Reactjs', 'Redux'],
    source: 'https://rogerqiu7.github.io/Simple-Calculator/',
  },
  {
    img: {
      src: './img/project-3-desktop.jpg',
      alt: 'League Challengers tracker preview',
    },
    title: 'League Challengers Tracker',
    type: ['Mobile', 'FRONTEND DEV', '2023'],
    description: 'League Challengers Tracker is a basic application that aims to provide users with access to real-time statistics from Riot Games for the top challenger players in League of Legends. With this project, you can retrieve stats such as champion scores, KDA, and win rate for recent games played by these players, across all regions. You can also filter players to find the ones that best meet your needs.',
    technologies: ['Reactjs', 'SCSS', 'Javascript', 'Redux', 'Jest'],
    source: 'https://github.com/Kweeka1/metrics-app',
  },
  {
    img: {
      src: './img/project-4-desktop.png',
      alt: 'Series Guide Application preview',
    },
    title: 'Series Guide Application',
    type: ['Desktop', 'FRONTEND Dev', '2022'],
    description: 'Series Guide Application is a small application that displays some of the popular shows in the world. It also allows users to share their comments and feedback about their favored shows and give a thumbs up thanks to the external Involvement and TVMaze API services.',
    technologies: ['HTML', 'SCSS', 'Javascript', 'Webpack', 'Jest'],
    source: 'https://github.com/Kweeka1/movies-app',
  },
  {
    img: {
      src: './img/project-6-desktop.png',
      alt: '2022 Global artificial intelligence conference page preview',
    },
    title: 'Global AI Conference page',
    type: ['WEB', 'FRONTEND DEV', '2022'],
    description: 'This is my personel version of the conference page design by Cindy Shin in Behance. where I try to implement the mockup as precisely as possible. And I also changed the page content to talk about The Global AI Summit which is a two-way conversation that engages every attendee, speaker, and partner in a rich dialogue about how AI can solve complex problems, empower businesses, and transform society.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    source: 'https://github.com/Kweeka1/capstone-project-conference-page',
  },
  {
    img: {
      src: './img/project-7-desktop.png',
      alt: 'Math Magicians preview',
    },
    title: 'Math Magicians',
    type: ['Desktop', 'FRONTEND DEV', '2022'],
    description: 'Math Magicians is a simple calculator app that lets you perform basic arithmetic operations such as addition, subtraction, multiplication, and division. With an easy-to-use interface, you can quickly get the answers to all your mathematical problems with ease. ',
    technologies: ['Reactjs', 'SCSS', 'Javascript', 'Jest'],
    source: 'https://github.com/Kweeka1/math-magicians',
  },
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