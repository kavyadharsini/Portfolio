const username = "kavyadharsini"; // Replace with your GitHub username
const projectContainer = document.getElementById('project-container');

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const projects = await response.json();

        projects.slice(0, 6).forEach(project => {
            projectContainer.innerHTML += `
                <div class="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition">
                    <h4 class="font-semibold">${project.name}</h4>
                    <p>${project.description || 'No description available'}</p>
                    <a href="${project.html_url}" target="_blank" class="text-blue-600 mt-2 block">View Project</a>
                </div>
            `;
        });
    } catch (error) {
        console.error("Failed to fetch projects:", error);
    }
}

fetchGitHubProjects();
// Change header background on scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

