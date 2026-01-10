async function send() {
  const input = document.getElementById("prompt");
  const chat = document.getElementById("chat");

  chat.innerHTML += `<div class="message user">🧑 ${input.value}</div>`;

  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: input.value })
  });

  const data = await res.json();
  chat.innerHTML += `<div class="message ai">🤖 ${data.reply}</div>`;

  input.value = "";
}
