// Period metadata used across the timeline, filters, and journey sections.
const CW = (name, width = 600) => {
  const encoded = encodeURIComponent(name.trim());
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encoded}?width=${width}`;
};

export const PERIODS = [
  {
    key: "indus",
    name: "Indus Valley Civilization",
    short: "Indus Valley",
    range: "3300 – 1300 BCE",
    color: "#8C6B4F",
    image: CW("Dancing girl of Mohenjo-daro.jpg"),
    blurb:
      "One of the world's earliest urban civilizations, known for precise town planning, seals, and quietly confident bronze and terracotta figures.",
  },
  {
    key: "mauryan",
    name: "Mauryan Period",
    short: "Mauryan",
    range: "322 – 185 BCE",
    color: "#A9835F",
    image: CW("Sarnath capital.jpg"),
    blurb:
      "India's first great empire under Chandragupta and Ashoka, remembered for polished sandstone pillars and monumental stone sculpture.",
  },
  {
    key: "gandhara",
    name: "Gandhara & Mathura Art",
    short: "Gandhara",
    range: "50 BCE – 500 CE",
    color: "#C9A24B",
    image: CW("Head of the Buddha, Gandhara, 3rd century AD, schist - Arthur M. Sackler Gallery - DSC06041.JPG"),
    blurb:
      "Twin schools that gave the Buddha his first human form — Gandhara blending Greco-Roman realism, Mathura rooted in native red-sandstone warmth.",
  },
  {
    key: "gupta",
    name: "Gupta Period",
    short: "Gupta",
    range: "320 – 550 CE",
    color: "#B4552C",
    image: CW("British Museum - Seated Buddha (Gupta period).JPG"),
    blurb:
      "Often called India's classical 'golden age' — serene Buddha images, refined temple sculpture, and the great murals of Ajanta.",
  },
  {
    key: "chola",
    name: "Chola Period",
    short: "Chola",
    range: "850 – 1250 CE",
    color: "#7A1F1F",
    image: CW("NatarajaMET.JPG"),
    blurb:
      "The high point of South Indian bronze casting — lost-wax masterpieces like the Nataraja, alongside soaring granite temples.",
  },
  {
    key: "medieval",
    name: "Medieval Indian Art",
    short: "Medieval",
    range: "950 – 1300 CE",
    color: "#8C6B4F",
    image: CW("Carvings, Hoysaleswara Temple 16, Halebidu, Karnataka 15.jpg"),
    blurb:
      "An explosion of temple architecture across the subcontinent — Khajuraho, Konark, and the Hoysala courts pushed stone carving to new extremes.",
  },
  {
    key: "mughal",
    name: "Mughal Art",
    short: "Mughal",
    range: "1526 – 1857 CE",
    color: "#C9A24B",
    image: CW("Hunting Scene, dated 1591. Ascribed to 'Abd as-Samad and Muhammad Sharif. Signed Muhammad Sharif. Los Angeles County Museum of Art..jpg"),
    blurb:
      "A jewel-toned fusion of Persian, Central Asian, and Indian painting traditions, produced in imperial ateliers for the Mughal court.",
  },
  {
    key: "rajput",
    name: "Rajput & Pahari Art",
    short: "Rajput",
    range: "1600 – 1850 CE",
    color: "#B4552C",
    image: CW("Krishna and Radha in a Bower.jpg"),
    blurb:
      "Miniature painting from the Rajasthani courts and Himalayan foothills — devotional, lyrical, and rich with color and emotion.",
  },
  {
    key: "colonial",
    name: "Colonial / 19th Century",
    short: "Colonial",
    range: "1848 – 1906 CE",
    color: "#7A1F1F",
    image: CW("Raja Ravi Varma, Lady in the Moon Light (1889).jpg"),
    blurb:
      "European academic technique meets Indian subject matter — led by Raja Ravi Varma, whose oil paintings reached ordinary homes as prints.",
  },
  {
    key: "modern",
    name: "Modern Indian Art",
    short: "Modern",
    range: "1900s – 1950s CE",
    color: "#231F1C",
    image: CW("Bharat Mata by Abanindranath Tagore.jpg"),
    blurb:
      "A search for a modern Indian visual language — the Bengal School, Amrita Sher-Gil, Jamini Roy, and the Progressive Artists' Group.",
  },
];

export const ART_FORMS = ["Sculpture", "Painting", "Architecture", "Metalwork", "Pottery", "Seal", "Textile"];
export const MATERIALS = ["Bronze", "Stone", "Terracotta", "Copper", "Paper", "Wood", "Sandstone", "Canvas"];
