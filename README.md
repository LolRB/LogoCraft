# LogoCraft

## Overview

As a freelance web developer, I needed a straightforward solution for creating simple logos for my projects without the expense of hiring a graphic designer. This command-line tool enables users to design custom logos by specifying the text, text color, background shape, and background color. The end result is an SVG file ready to be integrated into your projects.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)

## Instructions

1. Start the application:

```bash
node index.js
```

2. Follow the prompts to customize your logo:

- Text: Input the text for your logo (up to 3 characters).
- Text Color: Specify the text color (use a color name like "red" or "blue," or a hexadecimal code like "#ff5733").
- Background: Choose a background shape from the available options: circle, square, triangle, or hexagon.
- Background Color: Provide the background color (use a color name or a hexadecimal code).

3. Once you've provided all the necessary information, the application will create an SVG file named logo.svg in the root directory.

4. You will see "Generated logo.svg" displayed in the command line.

5. View your custom logo by opening the logo.svg file in a web browser.

## Features

- Customizable Text: Add up to three characters to your logo.
- Color Selection: Select any color for both text and background using color names or hexadecimal codes.
- Background Options: Choose from four different shapes—circle, square, triangle, or hexagon.
- SVG Output: Outputs a scalable vector graphic (SVG) that is ready for use in your projects.

## Credits

This tool was developed as part of a learning exercise and may feature basic implementations.