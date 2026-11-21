# Technical Documentation

## Project Overview

This project is an advanced personal portfolio website developed using HTML, CSS, and JavaScript.

Assignment 3 extends the previous portfolio by adding external API integration, advanced JavaScript logic, state management, improved validation, performance improvements, and better error handling.

## Technologies Used

- HTML: Used to create the structure and content of the website.
- CSS: Used for styling, responsive design, dark mode, transitions, and repository cards.
- JavaScript: Used for interactivity, API requests, filtering, sorting, validation, and state management.
- GitHub REST API: Used to retrieve public GitHub repository data.
- Web Storage API (`localStorage`): Used to save the selected theme.

## Project Structure

- `index.html` contains the main website structure.
- `css/styles.css` contains styling and responsive design.
- `js/script.js` contains the interactive JavaScript features.
- `assets/images/` contains project images.
- `docs/ai-usage-report.md` documents AI usage.
- `docs/technical-documentation.md` contains the technical documentation.

## Main Sections

### About Me

The About Me section introduces the portfolio owner and provides a short description of her interests.

### Projects

The Projects section displays portfolio projects using project cards.

Each project contains a Show Details button. JavaScript uses `classList.toggle()` to display or hide additional information.

The button text changes between Show Details and Hide Details depending on the current state.

### GitHub Repositories

The GitHub section dynamically displays public repositories retrieved from the GitHub REST API.

Each repository card can display:

- Repository name
- Description
- Programming language
- Number of stars
- Last updated date
- Repository link

### Contact

The Contact section contains a form with:

- Name
- Email
- Message

JavaScript validates the information before displaying a success message.

## GitHub API Integration

The website connects to the GitHub REST API using `fetch()`.

The API request retrieves public repositories from the GitHub account `HissahAlyaseen`.

The request is handled using `async` and `await`.

If the request fails, `try` and `catch` are used to display a user-friendly error message.

## Complex Logic

### Repository Filtering

The website creates language filter options from the repositories returned by the API.

When the user chooses a programming language, only repositories that use that language are displayed.

### Repository Sorting

Repositories can be sorted by:

- Recently Updated
- Name
- Number of Stars

Different comparison rules are applied depending on the selected sorting option.

### Contact Form Validation

The contact form checks that:

- All fields contain information.
- The name contains at least two characters.
- The email follows a valid email format.
- The message contains at least ten characters.

If a condition is not satisfied, an error message is displayed.

If all conditions are satisfied, a success message is displayed and the form fields are cleared.

## State Management

The website includes Dark Mode and Light Mode.

When the user changes the theme, JavaScript updates the `dark-mode` class.

The selected theme is stored using `localStorage`.

When the page is refreshed or reopened, the saved theme is restored automatically.

## User Feedback and Error Handling

The website provides feedback in several situations:

- A loading message while GitHub repositories are being retrieved.
- A success message when repositories load.
- An error message if the GitHub API request fails.
- Error messages for invalid contact form input.
- A success message for valid form input.
- Show Details / Hide Details button text that changes based on user interaction.

## Animation and Transitions

Project and repository cards use CSS transitions.

When the user moves the pointer over a card, the card moves slightly upward with a smooth transition.

The website also uses smooth transitions when switching between light and dark modes.

## Performance Improvements

The project includes several performance improvements.

### Deferred JavaScript

The JavaScript file uses the `defer` attribute so the browser can continue parsing the HTML before executing JavaScript.

### Lazy Loading

Project images use `loading="lazy"` so they are loaded only when needed.

### Reusable Functions

Repeated logic is organized into reusable functions such as:

- `displayRepositories()`
- `renderRepositories()`
- `showFormMessage()`
- `escapeHTML()`

This reduces repeated code and improves readability.

## Security Considerations

Repository data comes from an external API.

The `escapeHTML()` helper is used before displaying repository text to reduce the risk of unsafe HTML being inserted into the page.

Repository links that open in a new tab use:

`rel="noopener noreferrer"`

## Responsive Design

The website uses Flexbox and CSS Grid.

On larger screens:

- Project cards appear in two columns.
- GitHub repository cards appear in two columns.
- Repository controls can appear in one row.

For screens that are 768 pixels wide or smaller:

- Project cards appear in one column.
- GitHub repository cards appear in one column.
- Navigation becomes vertical.
- Filter and sort controls become full width.

## Testing

The website was tested by:

- Confirming that GitHub repositories load successfully.
- Testing the repository language filter.
- Testing all repository sorting options.
- Opening repository links.
- Testing Dark Mode and Light Mode.
- Refreshing the page to confirm that the selected theme remains saved.
- Testing Show Details and Hide Details buttons.
- Submitting the contact form with empty fields.
- Testing an invalid email address.
- Testing a short name.
- Testing a short message.
- Testing valid form information.
- Resizing the browser window to test responsive design.

## Improvements Based on Assignment 2 Feedback

Feedback from Assignment 2 was considered while developing Assignment 3.

The Show Details / Hide Details feature was tested to confirm that it works correctly.

JavaScript and CSS were organized using clear comments and sections to improve code readability.

The AI usage documentation was also expanded with more details about the development process, testing, modifications, and learning outcomes.