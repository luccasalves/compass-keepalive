export function TextApp(el, className, content) {
  const text = document.createElement(el);
  text.classList.add(className);
  text.textContent = content;
  return text;
}
