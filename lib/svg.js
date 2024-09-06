class SVG {
  constructor() {
    this.elements = {
      text: "",
      background: "",
    };
  }

  render() {
    const { text, background } = this.elements;
    return `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">${background}${text}</svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.elements.text = `<text x="175" y="150" font-size="80" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setBackground(background) {
    this.elements.background = background.render();
  }
}

export default SVG;