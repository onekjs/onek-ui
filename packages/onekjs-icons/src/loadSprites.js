
import { iconSprites } from './icons-sprites';
export const loadSprites = () => {
  const svg = document.createElement('div');
  svg.setAttribute('aria-hidden', 'true');
  svg.style = 'display: none';
  svg.innerHTML += iconSprites;
  const ref = document.body.firstChild;
  document.body.insertBefore(svg, ref);
};
