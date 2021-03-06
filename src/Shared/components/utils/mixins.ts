import { rgba } from "polished";
import { css } from "styled-components";
import { lineHeights, TextSize, textSizes, TextWeight } from "./typography";

/**
 * Sets typography attributes. Font size and line height are predefined
 * based on the given size.
 *
 * @param size
 * @param weight
 * @param color
 */
export function text(size: TextSize, weight?: TextWeight, color?: string) {
  return css`
    font-size: ${textSizes[size]};
    font-weight: ${weight ?? 400};
    line-height: ${lineHeights[size]};
    color: ${color};
  `;
}

/**
 * Glass effect / Glassmorphism
 * Falls back to default background color if required CSS attributes
 * are not supported by the browser (eg, Firefox)
 *
 * @param bgColor
 * @param opacity between 0 and 1, inclusive
 * @param blur in px
 * @returns
 */
export function glass(bgColor: string, opacity: number, blur: string) {
  return css`
    background-color: ${bgColor};

    @supports (backdrop-filter: blur(${blur})) {
      backdrop-filter: blur(${blur});
      background-color: ${rgba(bgColor, opacity)};
    }
  `;
}

/**
 * Hides scrollbars from the UI but still keep scrollable behavior
 */
export function hideScrollbars() {
  return css`
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */

    /* Webkit */
    &::-webkit-scrollbar {
      display: none;
    }
  `;
}

/**
 * Sets the color of the text to be a gradient with the given color stops
 *
 * @param angle direction or angle
 * @param colorStops list of color strings with an optional stop along the gradient's axis
 */
export function gradientText(angle: string, colorStops: string[]) {
  return css`
    background: ${`linear-gradient(${angle}, ${colorStops.join(", ")})`};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  `;
}
