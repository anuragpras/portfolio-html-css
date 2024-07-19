const projects = [
    {
        title: "IMAGE CAPTION GENERATOR",
        link: "https://github.com/anuragpras/image-description-deep-learning",
        description: "Image Caption Generator using Flickr dataset",
        gif: "1.gif"
    },
    {
        title: "CAFE SALES ANALYSIS",
        link: "https://github.com/anuragpras/cafe-sales-analysis",
        description: "Detailed cafe sales analysis project using Power BI and MySQL",
        gif: "2.gif"
    },
    {
        title: "FORECASTING HOTEL BOOKING CANCELLATIONS",
        link: "https://github.com/anuragpras/forecasting-hotel-booking-cancellations",
        description: "Machine learning model to predict hotel booking cancellations",
        gif: "11.gif"
    },
    {
        title: "AMAZON INDIA SALES DASHBOARD (TABLEAU)",
        link: "https://github.com/anuragpras/amazon-india-sales-dashboard-tableau",
        description: "Interactive Tableau dashboard analyzing Amazon India's sales data",
        gif: "3.gif"
    },
    {
        title: "EXPLORATORY DATA ANALYSIS",
        link: "https://github.com/anuragpras/exploratory-data-analysis",
        description: "E-Commerce Sales Insights: An Exploratory Data Analysis with Python",
        gif: "4.gif"
    },
    {
        title: "PIZZA SALES ANALYSIS",
        link: "https://github.com/anuragpras/pizza-sales-analysis",
        description: "Analyzing pizza sales data using MySQL and Excel",
        gif: "5.gif"
    },
    {
        title: "NOT BY GULZAR (RANDOM POETRY GENERATOR)",
        link: "https://github.com/anuragpras/not-by-gulzar",
        description: "Capture Gulzar's essence with the Random Poetry Generator",
        gif: "6.gif"
    },
    {
        title: "COVID-19 DASHBOARD (TABLEAU)",
        link: "https://github.com/anuragpras/covid19-tableau",
        description: "Interactive Tableau dashboard tracking COVID-19 statistics",
        gif: "7.gif"
    },
    {
        title: "POMODORO TIMER APP (STREAMLIT)",
        link: "https://github.com/anuragpras/pomodoro-app",
        description: "Productivity tool for time management using Python and Streamlit",
        gif: "8.gif"
    },
    {
        title: "SNAKE GAME (RAYLIB AND C++)",
        link: "https://github.com/anuragpras/snake-game",
        description: "Classic snake game implementation using Raylib library and C++",
        gif: "9.gif"
    },
    {
        title: "TASK MANAGER MERN APP",
        link: "https://github.com/anuragpras/Task-Manager-MERN",
        description: "Full-stack MERN application for managing tasks",
        gif: "10.gif"
    }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.innerHTML = `
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="btn">View Project</a>
        </div>
        <div class="project-image">
            <img src="${project.gif}" alt="${project.title}">
        </div>
    `;
    projectsContainer.appendChild(projectElement);
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        body.classList.toggle('dark-mode', e.matches);
    }
});
