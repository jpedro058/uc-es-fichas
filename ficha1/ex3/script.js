const input = document.querySelector("#textarea1");

function filterPhrase() {
  const value = input.value;

  const newValue = [...new Set(value)].join("");
  input.value = newValue;
}
