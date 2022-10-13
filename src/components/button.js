export function ButtonApp(text, className, action) {
  const button = document.createElement("button");

  button.setAttribute("class", className ? className : "btn");
  button.textContent = text;

  button.addEventListener("click", () => {
    action();
  });
  return button;
}
