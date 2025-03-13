const input = document.querySelector("input");

function count() {
  const value = input.value;
  const matches = value.match(/[aeiou]/gi);
  const count = matches ? matches.length : 0;

  if (!count) {
    document.querySelector("span").textContent = "Nenhuma vogal";
    return;
  }

  const phrase = count === 1 ? "vogal" : "vogais";
  document.querySelector("span").textContent = `${count} ${phrase}`;
}
