import { Square, Triangle, Circle, Hexagon } from "./shapes";

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const newRadius = 80 * (4 / 3);
    const expectedSvg = `<circle cx="200" cy="150" r="${newRadius}" fill="blue" />`;
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const newRadius = 80 * (4 / 3);
    const expectedSvg = `<circle cx="200" cy="150" r="${newRadius}" fill="yellow" />`;
    const circle = new Circle();
    circle.setColor("yellow");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const points = [
      [150 * (4 / 3), 18 * (4 / 3)],
      [244 * (4 / 3), 182 * (4 / 3)],
      [56 * (4 / 3), 182 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    const expectedSvg = `<polygon points="${pointsString}" fill="teal" />`;
    const triangle = new Triangle();
    triangle.setColor("teal");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const points = [
      [150 * (4 / 3), 18 * (4 / 3)],
      [244 * (4 / 3), 182 * (4 / 3)],
      [56 * (4 / 3), 182 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    const expectedSvg = `<polygon points="${pointsString}" fill="dodgerblue" />`;
    const triangle = new Triangle();
    triangle.setColor("dodgerblue");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const newX = 90 - 30;
    const newY = 40 - 40;
    const newWidth = 120 * (4 / 3);
    const newHeight = 120 * (4 / 3);
    const expectedSvg = `<rect x="${newX}" y="${newY}" width="${newWidth}" height="${newHeight}" fill="purple" />`;
    const square = new Square();
    square.setColor("purple");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const newX = 90 - 30;
    const newY = 40 - 40;
    const newWidth = 120 * (4 / 3);
    const newHeight = 120 * (4 / 3);
    const expectedSvg = `<rect x="${newX}" y="${newY}" width="${newWidth}" height="${newHeight}" fill="green" />`;
    const square = new Square();
    square.setColor("green");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Hexagon", () => {
  test("should render svg for a green circle element", () => {
    const points = [
      [150 * (4 / 3), 25 * (4 / 3)],
      [244 * (4 / 3), 75 * (4 / 3)],
      [244 * (4 / 3), 175 * (4 / 3)],
      [150 * (4 / 3), 225 * (4 / 3)],
      [56 * (4 / 3), 175 * (4 / 3)],
      [56 * (4 / 3), 75 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    const expectedSvg = `<polygon points="${pointsString}" fill="orange" />`;
    const hexagon = new Hexagon();
    hexagon.setColor("orange");
    const actualSvg = hexagon.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const points = [
      [150 * (4 / 3), 25 * (4 / 3)],
      [244 * (4 / 3), 75 * (4 / 3)],
      [244 * (4 / 3), 175 * (4 / 3)],
      [150 * (4 / 3), 225 * (4 / 3)],
      [56 * (4 / 3), 175 * (4 / 3)],
      [56 * (4 / 3), 75 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    const expectedSvg = `<polygon points="${pointsString}" fill="beige" />`;
    const hexagon = new Hexagon();
    hexagon.setColor("beige");
    const actualSvg = hexagon.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
