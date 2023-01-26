const data = document.getElementById("box");
let box = [];

function render() {
  data.innerHTML = "";
  for (let i = 0; i < box.length; i++) {
    data.innerHTML += `<p>${i + 1} : ${box[i]}</p>`;
  }
}

function insert() {
  const newData = document.getElementById("input").value;
  if (newData.length === 0) {
    return alert("Empty value nahi hoti insert");
  }
  box.push(newData);
  render();
}

function del() {
  if (!box.length > 0) {
    return alert("Empty box, kya delete karega?");
  }
  box.pop();
  render();
}

document.getElementById("insert").addEventListener("click", (event) => {
  event.preventDefault();
  insert();
  document.getElementById("input").value=''
});
