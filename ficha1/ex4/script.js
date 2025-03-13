const input = document.querySelector("#searchText");
const textarea = document.querySelector("#textarea1");

function search() {
  const searchText = input.value;
  const text = textarea.value;
  const positions = [];

  for (let i = 0; i < text.length; i++) {
    const phrase = text.slice(i, i + searchText.length);
    if (phrase === searchText) {
      positions.push(i);
    }
  }

  document.querySelector("span").textContent = positions.join(", ");
}
