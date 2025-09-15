# UIverse Component Library

UIverse is a comprehensive UI component library built with Next.js, React, and Tailwind CSS. It provides a collection of reusable and customizable UI components to accelerate development and ensure consistency across projects. Storybook is integrated for interactive component documentation and development, while Vitest handles unit testing.

## Features

-   **Rich Component Set:** A wide range of UI components including Accordions, Alerts, Avatars, Badges, Banners, Breadcrumbs, Buttons, Cards, Carousels, Checkboxes, Empty States, Forms, Inputs, Modals, Navbars, Pagination, Product Cards, Progress Bars, Radio Buttons, Sidebar Menus, Skeleton Loaders, Spinners, Tables, Tabs, Toasts, and Tooltips.
-   **Built with Modern Technologies:** Leverages Next.js for a powerful React framework, Tailwind CSS for utility-first styling, and TypeScript for type safety.
-   **Interactive Documentation:** Storybook provides a dedicated environment to view, interact with, and test components in isolation.
-   **Unit Testing:** Vitest is configured for fast and efficient unit testing of components.
-   **Responsive Design:** Components are designed with responsiveness in mind, adapting to various screen sizes.
-   **Themable:** Easily customizable through Tailwind CSS configuration.

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Storybook](https://storybook.js.org/)
-   [Vitest](https://vitest.dev/)

## Installation

To get started with UIverse, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/uiverse.git
    cd uiverse
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install Playwright browsers (for testing):**

    ```bash
    npx playwright install
    ```

## Usage

### Development Server

To run the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Storybook

To launch Storybook for interactive component documentation:

```bash
npm run storybook
# or
yarn storybook
```

Storybook will typically open at [http://localhost:6006](http://localhost:6006).

### Running Tests

To run the unit tests using Vitest:

```bash
npx vitest
```

### Building for Production

To build the Next.js application for production:

```bash
npm run build
# or
yarn build
```

## Component Structure

-   **`src/components`**: Contains the core UI components.
-   **`src/stories`**: Contains Storybook stories for each component, demonstrating their usage and variations.
-   **`src/app`**: Contains the main Next.js application pages.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

