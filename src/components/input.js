export function InputApp(label, type, id, icon) {
  const wrapper = document.createElement("div");
  const input = document.createElement("input");
  let i = document.createElement("img");
  input.setAttribute("placeholder", label);
  input.setAttribute("id", id);
  input.setAttribute("type", type);

  wrapper.classList.add("wrapper-input");
  i.classList.add("icon");

  i.setAttribute("src", `src/assets/icons/${icon}.svg`);
  i.setAttribute("id", `i-${id}`);
  wrapper.append(input, i);

  return wrapper;
}
