## SkillSprint

Welcome to SkillSprint, your one-stop shop for all looking for science courses. This repository contains the use of various modern technologies in the creation of a simple website.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Technologies](#technologies)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [License](#license)

## Introduction

SkillSprint is an online platform that can be used for enrolling in various courses. Feel free to explore the functionality it possesses.

## Features
- **Course Listing:** Utilizes the `CourseList` component to display available courses.
- **Filter and Search:** Incorporates `FilterBar` and `SearchBar` components for refining course searches based on categories and titles.
- **Dynamic Course Retrieval:** Retrieves course data from the SkillsPrint API (`BASE_URL`) using `fetch` requests.
- **Sorting and Filtering:** Allows users to sort courses alphabetically and filter based on selected categories.
- **Course Display:** Renders course details including title, category, description, start/end dates, and an image.

## Getting Started
These instructions will help you get a copy of our project up and running on your local machine for development and testing purposes. Please take a look at the [Setup](#setup) section for notes on how to deploy the project on a live system.

## Setup
After unbundling the project:

1. Git clone the project.
   ```bash
   git clone https://github.com/jmbeba/SkillSprint
   ```
2. Run `pnpm install` in your terminal.
If you don't have the pnpm package manager installed in your environment, click [here](https://pnpm.io/installation) to go to the pnpm official installation guide.
Alternatively, you can use npm to install it .

  ```bash
  npm install -g pnpm
  ```
3. Edit `/utils/index.js` to setup your database.
4. In a new terminal, run `pnpm run dev`. This will run your Vite app.

## Technologies

- `Vite` : Vite is a build tool that provides a faster and more efficient development environment for modern web projects, utilizing native ES modules to optimize build times.

- `ShadcnUI` : ShadcnUI is a UI framework that offers a collection of customizable and sleek UI components, simplifying the creation of user interfaces with its extensive component library.

- `Lucide-react` : Lucide-react provides a set of customizable and scalable icons as React components, offering a wide range of icons to enhance visual elements within the application.

- `Date-fns` : date-fns is a popular JavaScript date utility library used for manipulating, formatting, and working with dates and times in a more developer-friendly manner.

- `Zod` : Zod is a TypeScript-first schema declaration and validation library used for defining data schemas and performing runtime data validation, ensuring type safety and data integrity in applications.

- `@mantine/hooks` for pagination : @mantine/hooks is a library that offers a variety of React hooks, including hooks specifically designed for pagination, simplifying the implementation of pagination functionality in applications by providing pre-built hooks for managing paginated data.


## Usage

Once  the project set up locally, you can use it for various purposes, such as development, testing, or exploration. Detailed usage instructions can be found in the project documentation and code comments. Feel free to explore the codebase and experiment with the features.

## Author
John Johnson Mbeba ("https://github.com/jmbeba")

## Contributing

We welcome contributions from the open-source community to enhance and improve SkillSprint. If you're interested in contributing, please follow our Contributing Guidelines and adhere to our Code of Conduct. Your contributions can help make the SkillSprint experience even more exceptional.

## License
## License (" MIT License")
SkillSprint is an open-source project licensed under the MIT License. This means that you can use, modify, and distribute the project while providing appropriate attribution and adhering to the license terms outlined in the LICENSE file.





