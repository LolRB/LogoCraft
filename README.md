# LogoCraft

## Description

As a freelance web developer, I wanted a quick and easy way to generate simple logos for my projects without the need to hire a graphic designer. This command-line application allows users to create a custom logo by specifying the text, text color, background, and background color. The result is an SVG file that can be used directly in your projects.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Features](#features)
- [Acknowledgements](#acknowledgements)

## Usage

1. Run the application:

```bash
node index.js
```

2. Follow the prompts:

- Text: Enter text for the logo (up to 3 characters).
- Text Color: Enter the text color (a color keyword e.g; red, blue or a hexadecimal number e.g; #ff5733).
- Background: Select a background shape from the list: circle, square, triangle or hexagon.
- Background Color: Enter the background color (a color keyword or a hexadecimal number).

3. After entering all the required input, the application will generate an SVG file named logo.svg in the root directory.

4. The output "Generated logo.svg" will be printed in the command line.

5. Open the logo.svg file in a web browser to view your custom logo.

## Features

- Customizable Text: Enter up to three characters to display on the logo.
- Color Selection: Choose any color for the text and background using either color keywords or hexadecimal values.
- Background Options: Select from four backgrounds—circle, square, triangle, or hexagon.
- SVG Output: Generates a scalable vector graphic (SVG) file that can be used directly in your projects.

## Acknowledgements

This project was created as part of a learning exercise and may contain simplistic implementations.