class Background {
  constructor(color = "") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Render method should be implemented in the subclass");
  }
}

class Circle extends Background {
  render() {
    const radius = 100 * (4 / 3);
    return `<circle cx="200" cy="150" r="${radius}" fill="${this.color}" />`;
  }
}

class Square extends Background {
  render() {
    const x = 90;
    const y = 40;
    const width = 120 * (4 / 3);
    const height = 120 * (4 / 3);
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
  }
}

class Triangle extends Background {
  render() {
    const points = [
      [150 * (4 / 3), 18 * (4 / 3)],
      [244 * (4 / 3), 182 * (4 / 3)],
      [56 * (4 / 3), 182 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    return `<polygon points="${pointsString}" fill="${this.color}" />`;
  }
}

class Hexagon extends Background {
  render() {
    const points = [
      [150 * (4 / 3), 25 * (4 / 3)],
      [244 * (4 / 3), 75 * (4 / 3)],
      [244 * (4 / 3), 175 * (4 / 3)],
      [150 * (4 / 3), 225 * (4 / 3)],
      [56 * (4 / 3), 175 * (4 / 3)],
      [56 * (4 / 3), 75 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    return `<polygon points="${pointsString}" fill="${this.color}" />`;
  }
}

export { Circle, Triangle, Square, Hexagon };
