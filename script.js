function recommendMaterial() {
  const comp = document.getElementById("componentSelect").value;
  const result = document.getElementById("result");
  const title = document.getElementById("materialTitle");
  const desc = document.getElementById("materialDesc");
  const table = document.getElementById("comparisonTable");
  const suggestions = document.getElementById("suggestions");
  const buyLinks = document.getElementById("buyLinks");

  if (!comp) return;

  const data = {
    brake: {
      title: "Recommended Material: Aluminum + Silicon Carbide Composite (Al-SiC)",
      desc: `
      The Al-SiC composite combines **Aluminum (Al)** — a lightweight metal with good thermal conductivity — 
      and **Silicon Carbide (SiC)** — a hard ceramic material with excellent wear resistance. 
      Together, they form a strong, heat-resistant, and lightweight composite ideal for high-performance brake discs.
      <br><br>
      🔹 **Aluminum (Matrix):** Provides light weight and good heat dissipation.  
      🔹 **Silicon Carbide (Reinforcement):** Increases hardness, wear resistance, and stiffness.  
      <br>
      ⚙️ Commonly used in: sports cars, aircraft brakes, and racing bikes.
    `,
      comparison: [
        ["Material", "Strength", "Weight", "Durability", "Cost (₹/kg)"],
        ["Pure Aluminum", "Low", "Light", "Low", "₹500/kg"],
        ["Steel", "High", "Heavy", "Medium", "₹400/kg"],
        ["Al + SiC", "High", "Light", "High", "₹800/kg"]
      ],
      suggestion: "✅ Buy Al-SiC composites for performance cars. ❌ Avoid pure aluminum brakes for heavy vehicles.",
      links: [
        { name: "Indiamart - AlSiC Composite", url: "https://www.indiamart.com" },
        { name: "Tata Steel Materials", url: "https://www.tatasteel.com" },
        { name: "Amazon India (Auto Materials)", url: "https://www.amazon.in" }
      ]
    },

    blades: {
      title: "Recommended Material: Glass Fiber Reinforced Polymer (GFRP)",
      desc: `
      GFRP combines **Glass fibers** — made primarily from **silica (SiO₂)** and other oxides — 
      with a **Polymer resin** such as epoxy or polyester. 
      This composite provides an excellent balance between strength, light weight, and corrosion resistance.
      <br><br>
      🔹 **Glass Fiber (Reinforcement):** Adds tensile strength and stiffness.  
      🔹 **Polymer Resin (Matrix):** Binds fibers together and offers flexibility and weather resistance.  
      <br>
      ⚙️ Commonly used in: wind turbine blades, boats, and aircraft fairings.
    `,
      comparison: [
        ["Material", "Strength", "Weight", "Durability", "Cost (₹/kg)"],
        ["Steel", "High", "Heavy", "High", "₹300"],
        ["Carbon Fiber Composite", "Very High", "Very Light", "Very High", "₹1500"],
        ["GFRP", "High", "Light", "High", "₹600"]
      ],
      suggestion: "✅ Choose GFRP for cost-effective and durable wind turbine blades. ❌ Avoid steel for large blades due to heavy weight.",
      links: [
        { name: "GFRP Blades on IndiaMART", url: "https://www.indiamart.com" },
        { name: "Composite Suppliers - Tata Advanced Materials", url: "https://www.tatamatmaterials.com" }
      ]
    },

    piston: {
      title: "Recommended Material: Aluminum + Silicon Carbide Composite (Al-SiC)",
      desc: `
      Pistons made from Al-SiC combine **Aluminum (Al)** — a light, thermally conductive metal — 
      and **Silicon Carbide (SiC)** — a hard ceramic compound. 
      This combination enhances strength, reduces wear, and improves heat stability inside the engine.
      <br><br>
      🔹 **Aluminum:** Provides light weight and excellent heat dissipation.  
      🔹 **Silicon Carbide:** Adds hardness and wear resistance, reducing friction losses.  
      <br>
      ⚙️ Commonly used in: high-performance engines, racing vehicles, and aerospace components.
    `,
      comparison: [
        ["Material", "Strength", "Weight", "Durability", "Cost (₹/kg)"],
        ["Cast Iron", "High", "Heavy", "Medium", "₹600/kg"],
        ["Pure Aluminum", "Low", "Light", "Low", "₹500/kg"],
        ["Al + SiC", "High", "Light", "High", "₹850/kg"]
      ],
      suggestion: "✅ Use Al-SiC pistons for better mileage and speed. ❌ Avoid cast iron for racing vehicles.",
      links: [
        { name: "AlSiC Pistons on Alibaba", url: "https://www.alibaba.com" },
        { name: "Indiamart Auto Components", url: "https://www.indiamart.com" }
      ]
    },

    frame: {
      title: "Recommended Material: Carbon Fiber Reinforced Polymer (CFRP)",
      desc: `
      CFRP combines **Carbon fibers** — made mostly from **polyacrylonitrile (PAN)** or **pitch** — 
      with a **Polymer resin matrix** (usually epoxy). 
      The result is an ultra-light, super-strong material with a high stiffness-to-weight ratio.
      <br><br>
      🔹 **Carbon Fiber (Reinforcement):** Provides tensile strength, stiffness, and low weight.  
      🔹 **Epoxy Resin (Matrix):** Binds the fibers and improves toughness and corrosion resistance.  
      <br>
      ⚙️ Commonly used in: bicycle frames, sports cars, aerospace frames, and drones.
    `,
      comparison: [
        ["Material", "Strength", "Weight", "Durability", "Cost (₹/kg)"],
        ["Steel", "High", "Heavy", "Medium", "₹400/kg"],
        ["Aluminum", "Medium", "Light", "Medium", "₹500/kg"],
        ["CFRP", "High", "Very Light", "High", "₹1200/kg"]
      ],
      suggestion: "✅ Choose CFRP for sports vehicles or bicycles. ❌ Avoid steel for lightweight builds.",
      links: [
        { name: "Carbon Fiber Frames on Amazon", url: "https://www.amazon.in" },
        { name: "Carbon Fiber Suppliers (IndiaMART)", url: "https://www.indiamart.com" }
      ]
    }
  };

  const d = data[comp];
  title.textContent = d.title;
  desc.textContent = d.desc;

  // Table setup
  table.innerHTML = "";
  d.comparison.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  suggestions.innerHTML = `<p><strong>Suggestion:</strong> ${d.suggestion}</p>`;
  buyLinks.innerHTML = "";
  d.links.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
    buyLinks.appendChild(li);
  });

  result.classList.remove("hidden");
}
