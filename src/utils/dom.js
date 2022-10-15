export function create(el, className) {
  const htmlElement = document.createElement(el);
  htmlElement.setAttribute("class", className);
  return htmlElement;
}
