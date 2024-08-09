# SEVEN Empathy Case Study

## Project Overview

This project is a recreation of the SEVEN Empathy website, including a component library that showcases various reusable elements used throughout the site. The project is built using HTML, CSS, and JavaScript and is structured for easy navigation and further development.

## Project Structure

SEVEN-casestudy/
├── index.html               # Main website file
├── components.html          # Component library showcase
├── styles/
│   ├── main.css             # Main styling file for the website
│   └── components.css       # Styling file specific for the component showcase
├── components/
│   ├── Header.js            # Header component
│   ├── Hero.js              # Hero component
│   ├── NewsUpdates.js       # News Updates component
│   ├── CommunityPartners.js # Community Partners component
│   └── Footer.js            # Footer component
├── images/                  # All images used in the project
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── news1.png
│   ├── news2.png
│   ├── news3.png
│   ├── partner1.png
│   ├── partner2.png
│   ├── partner3.png
├── js/
│   └── main.js              # JavaScript for the carousel functionality
└── README.md                # Project documentation
```

## Components Overview

### 1. Header Component (components/Header.js)
- Description: Contains the website's logo and navigation menu. Includes a "Book" button.
- Usage: This component is used at the top of the page to allow easy navigation through the site.

### 2. Hero Component (components/Hero.js)
- Description: Displays a large, visually appealing section with a title, subtitle, and a "Learn More" button.
- Usage: Typically used at the top of the homepage to grab users' attention.

### 3. News Updates Component (components/NewsUpdates.js)
- Description: Displays a list of news items, each with an image, title, description, date, and a "Read More" button.
- Usage: This component is used to showcase recent news or updates related to the organization or website.

### 4. Community Partners Component (components/CommunityPartners.js)
- Description: Displays a carousel of logos or images representing community partners.
- Usage: Acknowledges and highlights the website's collaborators or supporters.

### 5. Footer Component (components/Footer.js)
- Description: Contains navigation links for secondary pages, like "About SEVEN," "Reach Out," "Share Your Story," and "Contact."
- Usage: Placed at the bottom of the page to provide additional navigation options and site information.

## JavaScript Functionality

### Carousel Functionality (js/main.js)
- Description: Provides the functionality for the carousel in the Community Partners component, allowing users to scroll through the partner logos/images.
- Key Features:
  - Enables horizontal scrolling with mouse drag.
  - Enhances the user experience by allowing smooth interaction with partner logos.

## Styling (styles/main.css)

### Global Styling
- The CSS file covers typography, layout, colors, and specific styling for each component.
- The site uses `EB Garamond` and `Open Sans` fonts for a clean and professional look.

### Component-Specific Styling
- Each component has its own set of styles defined in `main.css`.
- The component library has an additional CSS file (`components.css`) to style the component showcase.

## How to Use

### Viewing the Website
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Nikoldigital777/SEVEN-Casestudy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SEVEN-casestudy
   ```
3. Open `index.html` in your preferred browser to view the main website.

### Viewing the Component Library
- Open `components.html` in your preferred browser to view the component library showcase.

## Future Improvements

- Additional Components: More reusable components can be added as the project evolves.
- Responsive Design: Further improvements can be made to ensure the website is fully responsive on all devices.
- **Optimization: Minifying CSS and JS files for better performance.


## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code as long as you include the original license.
