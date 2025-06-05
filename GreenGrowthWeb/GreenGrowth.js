 document.getElementById('aboutTitle').innerHTML = 'About Organic Farming';
        document.getElementById('aboutP').innerHTML = ' Organic farming is a sustainable agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal and plant wastes. Developed as a response to the environmental harm of chemical-based farming, organic farming offers several ecological benefits. Compared to conventional agriculture, it uses fewer pesticides, reduces soil erosion, decreases nitrate runoff, and recycles animal waste. While organic yields are often lower and costs higher, its environmental advantages make it essential for a sustainable future.';
      
const leftSubContent = {
  sections: [
    {
      title: "Common Problems",
      items: [
        "Soil nutrient depletion",
        "Pest infestation without chemicals",
        "Weed management",
        "Lower crop yield",
        "Market access for organic produce",
        "Limited organic inputs supply",
        "Climate variability"
      ]
    },
    {
      title: "Tips for Organic Farming",
      items: [
        "Use natural compost to enrich soil.",
        "Practice crop rotation to reduce pests.",
        "Encourage beneficial insects like ladybugs.",
        "Mulch to retain soil moisture.",
        "Use rainwater harvesting for irrigation."
      ]
    },
    {
      title: "Quick Facts",
      items: [
        "Organic farming reduces greenhouse gases by 30%.",
        "It supports over 80% more biodiversity than conventional farms.",
        "Organic produce often contains higher antioxidants.",
        "Certified organic farms avoid synthetic fertilizers and pesticides."
      ]
    },
    {
      title: "Seasonal Planting Guide",
      items: [
        "<strong>Spring:</strong> Tomatoes, Lettuce, Carrots, Peas",
        "<strong>Summer:</strong> Beans, Corn, Cucumber, Peppers",
        "<strong>Fall:</strong> Broccoli, Spinach, Kale, Radishes",
        "<strong>Winter:</strong> Garlic, Onions, Leeks, Brussels Sprouts"
      ]
    },
    {
      title: "Organic Pest Control",
      items: [
        "Introduce beneficial insects (ladybugs, lacewings).",
        "Use neem oil or insecticidal soap sprays.",
        "Practice companion planting (e.g., marigolds with tomatoes).",
        "Remove pests manually by handpicking.",
        "Use traps and barriers like sticky traps or row covers."
      ]
    },
    {
      title: "Sustainability Practices",
      items: [
        "Reduce water usage with drip irrigation.",
        "Compost farm and kitchen waste.",
        "Use renewable energy sources when possible.",
        "Protect wildlife habitats on farm edges.",
        "Minimize tillage to preserve soil structure."
      ]
    },
    {
      title: "Success Stories",
      items: [
        "<em>Maria's Organic Farm:</em> Increased yield by 40% using crop rotation.",
        "<em>Green Valley Cooperative:</em> Reduced pests without chemicals.",
        "<em>EcoFarmers Group:</em> Gained new markets for organic vegetables."
      ]
    }
  ]
};


      function renderLeftSub() {
  const container = document.createElement('div');
  container.className = 'left-sub';

  let html = '';

  leftSubContent.sections.forEach(section => {
    html += `<div class="left-subsection">`;
    html += `<h3>${section.title}</h3>`;
    html += `<ul>`;

    section.items.forEach(item => {
      html += `<li>${item}</li>`;
    });

    html += `</ul></div>`;
  });

  container.innerHTML = html;
  return container;
}

document.addEventListener('DOMContentLoaded', () => {
  const leftSubContainer = document.getElementById('left-sub-container');
  if (leftSubContainer) {
    leftSubContainer.appendChild(renderLeftSub());
  }
});
      
        const farmingItems = [
    {
        name: "Compost Bin",
        image: "Image/compostBin.jpeg",
        description: "Used for decomposing organic waste into nutrient-rich compost."
    },
    {
        name: "Rainwater Barrel",
        image: "Image/rainwaterbarrel.jpg",
        description: "Collects rainwater for irrigation, reducing water usage."
    },
    {
        name: "Organic Seeds",
        image: "Image/organicseed.jpg",
        description: "Seeds that are non-GMO and grown without synthetic chemicals."
    },
    {
        name: "Mulching Sheets",
        image: "Image/mulchingsheet.webp",
        description: "Helps retain soil moisture and suppress weed growth."
    },
    {
        name: "Natural Pest Spray",
        image: "Image/naturalspray.webp",
        description: "Eco-friendly spray to deter pests without harmful chemicals."
    },
    {
        name: "Crop Rotation Plan",
        image: "Image/croprotation.jpeg",
        description: "Rotational planting map to maintain soil fertility."
    },
    {
        name: "Drip Irrigation Kit",
        image: "Image/driprrigation.jpeg",
        description: "Delivers water directly to plant roots, minimizing waste."
    },
    {
        name: "Manure Spreader",
        image: "Image/manure_spreader.jpeg",
        description: "Applies organic manure evenly across fields."
    },
    {
        name: "Soil Test Kit",
        image: "Image/soiltestkit.jpeg",
        description: "Analyzes soil nutrients and pH for informed planting."
    },
    {
        name: "Bee Hive Box",
        image: "Image/beehive.jpeg",
        description: "Encourages natural pollination through local bee activity."
    },
    {
        name: "Vermicompost Bin",
        image: "Image/vermicompost.jpeg",
        description: "Uses worms to break down food waste into rich compost."
    },
    {
        name: "Greenhouse Tunnel",
        image: "Image/greenhousetunnel.jpeg",
        description: "Protects crops from weather and extends growing season."
    }
];

function renderFarmingItems() {
    const container = document.getElementById("farming-items-carousel");
    container.innerHTML = "";

    farmingItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "carousel-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(div);
    });
}
    const missionVision = [
        {
            title: "Mission",
            content: "To empower farmers and consumers through education and resources that make organic farming accessible, profitable, and environmentally regenerative.",
            bullets: [
                "Providing practical training in organic techniques.",
                "Connecting local organic producers with markets.",
                "Advocating for policies that support sustainable agriculture."
            ]
        },
        {
            title: "Vision",
            content: "We envision a world where organic farming is the norm—not the exception. A future where:",
            bullets: [
                "All food is grown without harming ecosystems.",
                "Farmers earn fair wages for sustainable practices.",
                "Communities thrive on locally grown, chemical-free food."
            ]
        }
    ];

    const contacts = [
        {
            title: "📞 General Inquiries",
            items: [
                "Email: info@greengrowth.org",
                "Phone: (123) 456-7890",
                "Hours: Mon-Fri, 9AM–5PM"
            ]
        },
        {
            title: "🌾 Farmer Support",
            items: [
                "Email: farmers@greengrowth.org",
                "Phone: (123) 987-6543"
            ]
        },
        {
            title: "📍 Visit Us",
            items: [
                "123 Green Valley Road",
                "EcoVillage, CA 90210"
            ]
        },
        {
            title: "🌐 Follow Us",
            items: [
                "Facebook: @GreenGrowthOrganic",
                "Instagram: @GreenGrowth",
                "YouTube: GreenGrowth Farming"
            ]
        }
    ];

    const benefitsData = {
        title: "Benefits of Organic Farming",
        subtitle: "Why Choose Organic?",
        items: [
            { icon: "🌱", text: "<strong>Healthier Food:</strong> No toxic pesticide residues; higher nutrient density." },
            { icon: "🌍", text: "<strong>Environmental Protection:</strong> Reduces pollution and conserves water." },
            { icon: "🔄", text: "<strong>Soil Health:</strong> Improves long-term fertility through natural methods." },
            { icon: "🐝", text: "<strong>Biodiversity:</strong> Supports pollinators and ecosystem balance." },
            { icon: "👩‍🌾", text: "<strong>Farmer Well-being:</strong> Safer working conditions without chemical exposure." }
        ],
        conclusion: "Organic farming isn't just a method, it's a commitment to future generations and planetary health."
    };

    const features = [
        { items: ["Protecting soil quality using organic material and encouraging biological activity."] },
        { items: ["Indirect provision of crop nutrients using soil microorganisms."] },
        { items: ["Nitrogen fixation in soils using legumes."] },
        { items: ["Weed and pest control based on methods like crop rotation, biological diversity, natural predators, organic manures and suitable chemical, thermal and biological intervention."] },
        { items: ["Rearing of livestock, taking care of housing, nutrition, health, rearing and breeding."] },
        { items: ["Care for the larger environment and conservation of natural habitats and wildlife."] }
    ];

    function renderMissionVision() {
        const container = document.getElementById("mission-vision");
        container.innerHTML = "";

        missionVision.forEach(item => {
            const section = document.createElement("section");
            section.className = "section";
            section.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.content}</p>
                <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
            `;
            container.appendChild(section);
        });
    }

    function renderContacts() {
        const container = document.getElementById("contact-list");
        container.innerHTML = "";

        contacts.forEach(contact => {
            const ul = document.createElement("ul");
            ul.innerHTML = `
                <p><b>${contact.title}</b></p>
                ${contact.items.map(item => `<li>${item}</li>`).join("")}
            `;
            container.appendChild(ul);
        });
    }

    function renderBenefits() {
        const container = document.getElementById("benefits-section");
        container.innerHTML = `
            <section class="section benefits-content">
                <h2>${benefitsData.title}</h2>
                <h3>${benefitsData.subtitle}</h3>
                <ul class="benefits-list">
                    ${benefitsData.items.map(item => `<li>${item.icon} ${item.text}</li>`).join("")}
                </ul>
                <p style="margin-top: 20px;">${benefitsData.conclusion}</p>
            </section>
        `;
    }

    function renderFeatures() {
        const container = document.getElementById("features-list");
        container.innerHTML = "";

        features.forEach(feature => {
            const ul = document.createElement("ul");
            ul.innerHTML = feature.items.map(item => `<li>${item}</li>`).join("");
            container.appendChild(ul);
        });
    }

    function loadAll() {
        renderMissionVision();
        renderContacts();
        renderBenefits();
        renderFeatures(); 
        renderFarmingItems();
    }