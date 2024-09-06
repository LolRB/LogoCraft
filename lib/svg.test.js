import SVG from "./svg.js";
import { Circle } from "./backgrounds.js";

describe("SVG Class", () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  test("should render a 400 x 300 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg"></svg>';
    expect(svg.render()).toBe(expectedSvg);
  });

  describe("Text Handling", () => {
    test("should append text element", () => {
      const expectedSvg =
        '<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg"><text x="175" y="150" font-size="80" text-anchor="middle" fill="yellow">A</text></svg>';
      svg.setText("X", "yellow");
      expect(svg.render()).toBe(expectedSvg);
    });

    test("should set text message and color", () => {
      const expectedSvg =
        '<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg"><text x="175" y="150" font-size="80" text-anchor="middle" fill="#666">SVG</text></svg>';
      svg.setText("XYZ", "#666");
      expect(svg.render()).toBe(expectedSvg);
    });

    test("should throw if text exceeds 3 characters", () => {
      const expectedError = new Error("Text must not exceed 3 characters.");
      expect(() => svg.setText("GOODBYE", "#999")).toThrow(expectedError);
    });
  });

  describe("Background Handling", () => {
    test("should include a background", () => {
      const newRadius = 80 * (4 / 3);
      const expectedSvg = `
        <svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="${newRadius}" fill="teal" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="#666">SVG</text>
        </svg>
      `.replace(/\s+/g, "");

      svg.setText("XYZ", "#666");
      const circle = new Circle();
      circle.setColor("teal");
      svg.setShape(circle);
      expect(svg.render()).toBe(expectedSvg);
    });
  });
});
