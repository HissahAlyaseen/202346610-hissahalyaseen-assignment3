# Hissah Alyaseen Portfolio - Assignment 3

## Project Description

This project is an advanced interactive personal portfolio website built using HTML, CSS, and JavaScript.

It builds on Assignments 1 and 2 by adding external API integration, advanced JavaScript logic, state management, improved form validation, performance improvements, and better documentation.

## Features

- About Me section
- Projects section with interactive Show Details / Hide Details buttons
- GitHub REST API integration
- Dynamic display of public GitHub repositories
- Filter repositories by programming language
- Sort repositories by recently updated, name, or number of stars
- Dark / Light mode
- Theme preference saved using `localStorage`
- Contact form with multiple validation rules
- Success and error feedback messages
- API error handling with user-friendly messages
- Responsive design for desktop, tablet, and mobile
- Hover animations and smooth transitions
- Lazy loading for project images
- Deferred JavaScript loading for better performance

## Projects

### Hello Web App

A simple web application built using Node.js and Express. It helped me practice basic web development concepts and server-side development.

### Recipe Sharing Platform

An in-progress recipe-sharing platform designed for users with dietary restrictions such as halal, vegan, gluten-free, and food allergies.

## GitHub API Integration

The portfolio uses the GitHub REST API to fetch and display my public repositories dynamically.

The repository section displays:

- Repository name
- Description
- Programming language
- Number of stars
- Last updated date
- Repository link

If the API request fails, the website displays a user-friendly error message.

## Complex Logic

The GitHub repositories can be filtered by programming language and sorted using different rules.

The contact form also uses multiple validation conditions before accepting a submission.

## State Management

The website includes a Dark / Light mode feature.

The selected theme is stored using `localStorage`, so the user's preference remains saved after refreshing or reopening the page.

## Performance Improvements

Performance was improved by:

- Using `defer` when loading JavaScript
- Using lazy loading for project images
- Organizing JavaScript into reusable functions
- Avoiding unnecessary repeated code
- Keeping the project structure simple and organized

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub REST API
- Web Storage API (`localStorage`)

## Project Structure

```text
202346610-hissahalyaseen-assignment3/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## How to Run

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Make sure an internet connection is available so the GitHub API can load repository data.
5. Test the GitHub filter and sort controls.
6. Test Dark / Light mode and refresh the page to verify that the selected theme remains saved.
7. Test the Show Details / Hide Details buttons.
8. Test the contact form with invalid and valid input.

## Testing

The website was tested by:

- Confirming that GitHub repositories load successfully
- Filtering repositories by programming language
- Sorting repositories using different options
- Testing Dark / Light mode
- Refreshing the page to confirm that the theme is saved
- Testing Show Details / Hide Details buttons
- Submitting the contact form with empty fields
- Testing invalid email input
- Testing short messages
- Testing valid form input
- Resizing the browser to check responsive design

## AI Usage

ChatGPT (GPT-5.6 Sol) was used to assist with requirement review, GitHub API integration, JavaScript logic, state management, debugging, CSS improvements, and documentation.

All AI-assisted work was reviewed, tested, understood, and modified before being included in the project.

Detailed AI usage is documented in:

- [AI Usage Report](docs/ai-usage-report.md)

## Documentation

- [AI Usage Report](docs/ai-usage-report.md)
- [Technical Documentation](docs/technical-documentation.md)
