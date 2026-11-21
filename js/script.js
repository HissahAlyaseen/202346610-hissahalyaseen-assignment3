// ===============================
// Greeting
// ===============================

const hour = new Date().getHours();

let greeting;

if (hour < 12) {
    greeting = "Good morning!";
} else if (hour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

console.log(greeting);


// ===============================
// Show / Hide Project Details
// ===============================

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const details = button.nextElementSibling;

        details.classList.toggle("show");

        if (details.classList.contains("show")) {
            button.textContent = "Hide Details";
        } else {
            button.textContent = "Show Details";
        }

    });

});


// ===============================
// Dark Mode State Management
// ===============================

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Light Mode";

}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("portfolio-theme", "dark");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("portfolio-theme", "light");

    }

});


// ===============================
// GitHub API Integration
// ===============================

const githubUsername = "HissahAlyaseen";

const githubReposContainer =
    document.getElementById("github-repos");

const githubStatus =
    document.getElementById("github-status");

const languageFilter =
    document.getElementById("language-filter");

const repoSort =
    document.getElementById("repo-sort");

let repositories = [];


// Fetch repositories from GitHub API
async function loadGitHubRepositories() {

    githubStatus.textContent =
        "Loading repositories...";

    try {

        const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?per_page=100`
        );

        if (!response.ok) {
            throw new Error("GitHub API request failed.");
        }

        const data = await response.json();

        repositories = data.filter(function (repo) {
            return !repo.fork;
        });

        createLanguageOptions();

        displayRepositories();

        githubStatus.textContent =
            `${repositories.length} repositories loaded successfully.`;

    } catch (error) {

        console.error(error);

        githubStatus.textContent =
            "Sorry, GitHub repositories could not be loaded. Please try again later.";

        githubReposContainer.innerHTML = "";

    }

}


// ===============================
// Create Language Filter
// ===============================

function createLanguageOptions() {

    const languages = [];

    repositories.forEach(function (repo) {

        if (
            repo.language &&
            !languages.includes(repo.language)
        ) {
            languages.push(repo.language);
        }

    });

    languages.sort();

    languages.forEach(function (language) {

        const option =
            document.createElement("option");

        option.value = language;

        option.textContent = language;

        languageFilter.appendChild(option);

    });

}


// ===============================
// Filter + Sort Complex Logic
// ===============================

function displayRepositories() {

    let filteredRepositories =
        [...repositories];

    const selectedLanguage =
        languageFilter.value;

    const selectedSort =
        repoSort.value;


    // Filter repositories by language
    if (selectedLanguage !== "all") {

        filteredRepositories =
            filteredRepositories.filter(function (repo) {

                return repo.language === selectedLanguage;

            });

    }


    // Sort repositories
    if (selectedSort === "name") {

        filteredRepositories.sort(function (a, b) {

            return a.name.localeCompare(b.name);

        });

    } else if (selectedSort === "stars") {

        filteredRepositories.sort(function (a, b) {

            return b.stargazers_count -
                a.stargazers_count;

        });

    } else {

        filteredRepositories.sort(function (a, b) {

            return new Date(b.updated_at) -
                new Date(a.updated_at);

        });

    }


    renderRepositories(filteredRepositories);

}


// ===============================
// Render Repository Cards
// ===============================

function renderRepositories(repoList) {

    githubReposContainer.innerHTML = "";

    if (repoList.length === 0) {

        githubReposContainer.innerHTML =
            "<p>No repositories match this filter.</p>";

        return;

    }


    repoList.forEach(function (repo) {

        const card =
            document.createElement("article");

        card.className = "repo-card";


        const description =
            repo.description ||
            "No description available.";


        const language =
            repo.language ||
            "Not specified";


        const updatedDate =
            new Date(
                repo.updated_at
            ).toLocaleDateString();


        card.innerHTML = `
            <h3>${escapeHTML(repo.name)}</h3>

            <p>
                ${escapeHTML(description)}
            </p>

            <div class="repo-info">

                <span>
                    💻 ${escapeHTML(language)}
                </span>

                <span>
                    ⭐ ${repo.stargazers_count}
                </span>

                <span>
                    Updated: ${updatedDate}
                </span>

            </div>

            <a
                href="${repo.html_url}"
                target="_blank"
                rel="noopener noreferrer">
                View Repository
            </a>
        `;

        githubReposContainer.appendChild(card);

    });

}


// ===============================
// Basic Security Helper
// ===============================

function escapeHTML(value) {

    const element =
        document.createElement("div");

    element.textContent =
        String(value);

    return element.innerHTML;

}


// ===============================
// Filter and Sort Events
// ===============================

languageFilter.addEventListener(
    "change",
    displayRepositories
);

repoSort.addEventListener(
    "change",
    displayRepositories
);


// Start API request
loadGitHubRepositories();


// ===============================
// Contact Form Validation
// ===============================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const message =
            document
                .getElementById("message")
                .value
                .trim();


        // Rule 1: all fields required
        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            showFormMessage(
                "Please fill in all fields.",
                "error"
            );

            return;

        }


        // Rule 2: name length
        if (name.length < 2) {

            showFormMessage(
                "Please enter a valid name.",
                "error"
            );

            return;

        }


        // Rule 3: email format
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        // Rule 4: message length
        if (message.length < 10) {

            showFormMessage(
                "Your message must contain at least 10 characters.",
                "error"
            );

            return;

        }


        // All rules passed
        showFormMessage(
            "Thank you! Your message has been submitted.",
            "success"
        );

        contactForm.reset();

    }
);


// ===============================
// Form Feedback Helper
// ===============================

function showFormMessage(
    message,
    type
) {

    formMessage.textContent =
        message;

    formMessage.className =
        type;

}