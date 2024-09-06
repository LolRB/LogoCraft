import inquirer from "inquirer";
import { writeFile } from "fs/promises";
import SVG from "./svg.js";
import { Circle, Triangle, Square, Hexagon } from "./backgrounds.js";

class CLI {
  async run() {
    try {
      const answers = await this.promptUser();
      const svgContent = this.generateSVG(answers);
      await writeFile("logo.svg", svgContent);
      console.log("Crafted logo.svg");
    } catch (error) {
      console.error("Looks like something went wrong:", error);
    }
  }

  promptUser() {
    return inquirer.prompt([
      {
        name: "text",
        type: "input",
        message: "Enter text for the logo (up to 3 characters):",
        validate: (text) =>
          text.length <= 3 || "Text must not exceed 3 characters",
      },
      {
        name: "textColor",
        type: "input",
        message: "Enter the text color:",
      },
      {
        name: "backgroundType",
        type: "list",
        message: "Select a background shape for the logo:",
        choices: ["circle", "square", "triangle", "hexagon"],
      },
      {
        name: "backgroundColor",
        type: "input",
        message: "Enter the background color:",
      },
    ]);
  }

  generateSVG({ text, textColor, backgroundType, backgroundColor }) {
    const background = this.createBackgroundShape(backgroundType);
    background.setColor(backgroundColor);

    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setBackground(background);

    return svg.render();
  }

  createBackgroundShape(type) {
    switch (type) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      case "triangle":
        return new Triangle();
      case "hexagon":
        return new Hexagon();
      default:
        throw new Error("Invalid background type");
    }
  }
}

export default CLI;
