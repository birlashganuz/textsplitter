function splitText() {
  let text = document.getElementById("inputText").value;

  let limit = parseInt(document.getElementById("wordLimit").value);

  let words = text.trim().split(/\s+/);

  let result = document.getElementById("result");

  result.innerHTML = "";

  for (let i = 0; i < words.length; i += limit) {
    let chunk = words.slice(i, i + limit).join(" ");

    let div = document.createElement("div");
    div.className = "chunk";

    let id = "Part" + i;

    div.innerHTML = `
<h3>${i / limit + 1} - qism</h3>
<p id="${id}">${chunk}</p>
<button class="copyBtn" onclick="copyText('${id}')">Nusxalash</button>`;

    result.appendChild(div);
  }
}

function copyText(id) {
  let text = document.getElementById(id).innerText;

  navigator.clipboard.writeText(text);

  //   alert("Copied!");
}
