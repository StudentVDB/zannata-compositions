// main.js
async function fetchCompositions() {
  try {
    const res = await fetch('/.netlify/functions/compositions');
    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    const container = document.getElementById("compositions");
    container.innerHTML = "";

    data.items.forEach(item => {
      const div = document.createElement("div");
      div.className = "composition-item";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Slug:</strong> ${item.slug}</p>
        <p><strong>Crankstel:</strong> ${item.crankstel || "-"}</p>
        <p><strong>Cassette:</strong> ${item.cassette || "-"}</p>
        <p><strong>Shifter:</strong> ${item.shifter || "-"}</p>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Fout bij laden:", error);
  }
}

fetchCompositions();
