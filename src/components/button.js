export function ButtonApp(text, action) {
  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.textContent = text;

  button.addEventListener("click", () => {
    action();
  });
  return button;
}
