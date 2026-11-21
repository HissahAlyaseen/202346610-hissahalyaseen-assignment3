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

When the user changes the theme, JavaScript updates the dark-mode class.

The selected theme is stored using localStorage.

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

The JavaScript file uses the defer attribute so the browser can continue parsing the HTML before executing JavaScript.

### Lazy Loading

Project images use loading="lazy" so they are loaded only when needed.

### Reusable Functions

Repeated logic is organized into reusable functions such as:

- displayRepositories()
- renderRepositories()
- showFormMessage()
- escapeHTML()

This reduces repeated code and improves readability.

## Security Considerations

Repository data comes from an external API.

The escapeHTML() helper is used before displaying repository text to reduce the risk of unsafe HTML being inserted into the page.

Repository links that open in a new tab use:

rel="noopener noreferrer"

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
