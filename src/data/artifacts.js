// Indian Art Through the Ages — artifact dataset
// Images: Wikimedia Commons via Special:FilePath (canonical redirect, no hash needed).
// Filenames must match the Wikimedia Commons title exactly (spaces converted to underscores internally).
// Every image has an onError fallback handled in <ArtifactImage /> if a URL ever fails to load.
const CW = (name, width = 900) => {
  // Wikimedia Commons Special:FilePath is the most stable external linking method.
  // We encode the entire filename; Wikimedia handles spaces vs underscores transparently.
  const encoded = encodeURIComponent(name.trim());
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encoded}?width=${width}`;
};


export const ARTIFACTS = [
  // ───────────────────────── INDUS VALLEY CIVILIZATION ─────────────────────────
  {
    id: "dancing-girl",
    name: "Dancing Girl",
    period: "indus",
    date: "c. 2500 BCE",
    location: "Mohenjo-daro (present-day Sindh, Pakistan)",
    material: "Bronze",
    artForm: "Sculpture",
    image: CW("Dancing girl of Mohenjo-daro.jpg"),
    imageCredit: "National Museum, New Delhi — Wikimedia Commons",
    description:
      "A small bronze figure of a confident young woman, standing with one hand on her hip, bangles stacked along her left arm. At just over 10 centimetres tall, she is one of the most celebrated survivals of the Indus Valley Civilization.",
    historicalContext:
      "Excavated in 1926 from a house in Mohenjo-daro, the figure was cast using the lost-wax method — remarkable evidence of metallurgical skill nearly 4,500 years ago, long before large-scale bronze casting appears elsewhere in the world.",
    artisticFeatures:
      "Her relaxed contrapposto stance, tilted head, and naturalistic proportions show an interest in capturing a living moment rather than an idealised or rigid form, unusual for such an early period.",
    culturalSignificance:
      "Nicknamed by the archaeologist who found her, the 'Dancing Girl' has become a symbol of the sophistication and individuality present in Harappan society, hinting at dance, music, or ritual practice in daily life.",
    facts: [
      "She is barely taller than a hand span, yet is one of the most reproduced Indian sculptures in the world.",
      "X-ray analysis shows she was cast solid, not hollow — a technically demanding choice.",
      "A second, similar figure was found and is held in the National Museum of Pakistan, Karachi.",
    ],
    tags: ["bronze", "sculpture", "harappan", "lost-wax", "mohenjo-daro", "woman"],
  },
  {
    id: "priest-king",
    name: "Priest-King",
    period: "indus",
    date: "c. 2100–1750 BCE",
    location: "Mohenjo-daro",
    material: "Steatite",
    artForm: "Sculpture",
    image: CW("Priest King (Sculpture) of Mohenjo-daro.jpg"),
    imageCredit: "National Museum, Karachi — Wikimedia Commons",
    description:
      "A small bearded bust wearing a trefoil-patterned robe and an armband, with narrowed, meditative eyes. Despite the modern nickname, we do not know if this figure was a priest, a king, or neither.",
    historicalContext:
      "Found in a house at Mohenjo-daro in 1927, it is carved from soft steatite stone and shows traces of red pigment in the trefoil pattern, suggesting the garment was once decorated in colour.",
    artisticFeatures:
      "The heavy-lidded eyes and composed expression give the bust a sense of inward calm, while the carefully groomed beard and headband suggest status or ritual authority.",
    culturalSignificance:
      "As one of the very few figural sculptures from the Indus Valley depicting an apparent figure of authority, it is central to debates over Harappan social and religious structure.",
    facts: [
      "The name 'Priest-King' was given by early excavators and is not based on any inscription — the Indus script remains undeciphered.",
      "The trefoil motif on the robe also appears on Mesopotamian artefacts, hinting at long-distance trade contact.",
    ],
    tags: ["steatite", "sculpture", "harappan", "mohenjo-daro", "bust"],
  },
  {
    id: "pashupati-seal",
    name: "Pashupati Seal",
    period: "indus",
    date: "c. 2350–2000 BCE",
    location: "Mohenjo-daro",
    material: "Steatite",
    artForm: "Seal",
    image: CW("Shiva Pashupati.jpg"),
    imageCredit: "National Museum, New Delhi — Wikimedia Commons",
    description:
      "A carved steatite seal showing a horned, seated figure surrounded by animals — an elephant, tiger, rhinoceros, and buffalo — with two deer beneath the seat.",
    historicalContext:
      "Discovered at Mohenjo-daro, the seal's central figure has been compared by some scholars to later depictions of Shiva as Pashupati, 'Lord of Animals', though this identification remains debated.",
    artisticFeatures:
      "The tight, symmetrical composition packs a seated figure and four animals into a few square centimetres without feeling crowded, using incised outlines typical of Indus glyptic art.",
    culturalSignificance:
      "It is one of the most reproduced Indus seals in scholarship on early Indian religion, illustrating how later Hindu iconography may have deep, pre-Vedic roots.",
    facts: [
      "Seals like this were likely pressed into wet clay to mark ownership of trade goods.",
      "The seal also bears Indus script symbols that remain undeciphered to this day.",
    ],
    tags: ["seal", "steatite", "harappan", "shiva", "religion", "mohenjo-daro"],
  },
  {
    id: "terracotta-mother-goddess",
    name: "Terracotta Mother Goddess",
    period: "indus",
    date: "c. 2600–1900 BCE",
    location: "Indus Valley sites",
    material: "Terracotta",
    artForm: "Sculpture",
    image: CW("Harappan Civilisation terracota, Mother Goddess, National Museum, New Delhi.jpg"),
    imageCredit: "LACMA — Wikimedia Commons",
    description:
      "A hand-modelled terracotta figurine of a woman wearing an elaborate fan-shaped headdress and heavy jewellery, one of thousands of similar figures found across Indus Valley sites.",
    historicalContext:
      "Figures like this are found in large numbers in domestic contexts, suggesting they played a role in household ritual, possibly connected to fertility or protection.",
    artisticFeatures:
      "Pinched, applied clay details build up facial features and ornaments quickly and expressively, in contrast to the refined polish of Indus stone and bronze work.",
    culturalSignificance:
      "These figurines are among the best evidence we have for everyday religious practice in Harappan homes, distinct from the elite imagery on seals and sculpture.",
    facts: [
      "Similar 'Mother Goddess' figurines appear across many Bronze Age cultures, though direct connections to the Indus examples are unproven.",
      "Traces of pigment on some figures suggest they were originally painted.",
    ],
    tags: ["terracotta", "sculpture", "harappan", "goddess", "fertility"],
  },
  {
    id: "indus-bull-seal",
    name: "Indus Bull Seal",
    period: "indus",
    date: "c. 2500–1900 BCE",
    location: "Indus Valley sites",
    material: "Steatite",
    artForm: "Seal",
    image: CW("Indus stamp-seal.jpg"),
    imageCredit: "National Museum, New Delhi — Wikimedia Commons",
    description:
      "A square steatite seal carved with a bull-like animal in profile, often mistakenly called a 'unicorn' because only one horn is shown due to the side-on view, above a line of undeciphered script.",
    historicalContext:
      "This is the most common seal type found across Indus Valley sites, from Harappa to Lothal, suggesting a shared visual and administrative culture across a vast trading network.",
    artisticFeatures:
      "The animal is rendered with confident, economical lines and a raised feeding-trough or standard in front of it, executed in shallow, precise relief carving.",
    culturalSignificance:
      "As the most numerous seal motif, it likely held broad civic or commercial meaning, and remains key evidence for Indus trade, administration, and undeciphered writing.",
    facts: [
      "Seals like this have been found as far away as Mesopotamia, showing the reach of Indus trade.",
      "Over 400 distinct Indus script symbols have been catalogued from seals like this one.",
    ],
    tags: ["seal", "steatite", "harappan", "bull", "script", "trade"],
  },

  // ───────────────────────── MAURYAN PERIOD ─────────────────────────
  {
    id: "lion-capital-ashoka",
    name: "Lion Capital of Ashoka",
    period: "mauryan",
    date: "c. 250 BCE",
    location: "Sarnath, Uttar Pradesh",
    material: "Polished sandstone",
    artForm: "Sculpture",
    image: CW("Sarnath capital.jpg"),
    imageCredit: "Sarnath Museum — Wikimedia Commons",
    description:
      "Four Asiatic lions stand back-to-back atop a drum-shaped abacus carved with a wheel and four animals, crowning a pillar erected by Emperor Ashoka to mark the site of the Buddha's first sermon.",
    historicalContext:
      "Raised around 250 BCE at Sarnath, the capital originally sat atop a tall polished sandstone pillar inscribed with Ashoka's edicts promoting Buddhist ethics across his empire.",
    artisticFeatures:
      "Carved from a single block of Chunar sandstone and given a glass-like polish, the capital shows a maturity of large-scale stone carving that appears almost suddenly in Mauryan art.",
    culturalSignificance:
      "Adopted as the National Emblem of India in 1950, it now appears on currency, passports, and government seals, making it perhaps the most publicly seen artwork in the country.",
    facts: [
      "The original abacus wheel, the dharma chakra, is echoed in the wheel at the centre of the Indian national flag.",
      "The pillar's polish was so fine that early European visitors mistook it for glazed material.",
    ],
    tags: ["sandstone", "sculpture", "mauryan", "ashoka", "sarnath", "national emblem"],
  },
  {
    id: "didarganj-yakshi",
    name: "Didarganj Yakshi",
    period: "mauryan",
    date: "c. 3rd century BCE",
    location: "Didarganj, Patna, Bihar",
    material: "Polished sandstone",
    artForm: "Sculpture",
    image: CW("Didarganj Yakshi full length front.jpg"),
    imageCredit: "Bihar Museum — Wikimedia Commons",
    description:
      "A life-sized standing female figure holding a fly-whisk (chauri), carved with a lustrous Mauryan polish and full, rounded volumes.",
    historicalContext:
      "Discovered on the banks of the Ganges near Patna in 1917, the statue is generally dated to the Mauryan period, though some scholars place it slightly later.",
    artisticFeatures:
      "The heavy jewellery, transparent drapery, and mirror-like Mauryan polish combine sensuous naturalism with an almost architectural solidity of form.",
    culturalSignificance:
      "As a yakshi, a nature spirit associated with fertility and abundance, the figure represents an early, foundational type for the voluptuous female form that recurs throughout later Indian sculpture.",
    facts: [
      "The famous Mauryan polish on this piece has never been fully replicated by modern craftsmen.",
      "It stands over 1.6 metres tall and was carved from a single block of sandstone.",
    ],
    tags: ["sandstone", "sculpture", "mauryan", "yakshi", "patna"],
  },
  {
    id: "ashokan-pillar",
    name: "Ashokan Pillar",
    period: "mauryan",
    date: "c. 250 BCE",
    location: "Various sites across the Mauryan Empire",
    material: "Polished sandstone",
    artForm: "Architecture",
    image: CW("Ashokan Pillar, Sarnath, Varanasi, Uttar Pradesh.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "Tall monolithic sandstone columns inscribed with Ashoka's edicts, erected at key sites across the Mauryan Empire to spread messages of moral governance and Buddhist ethics.",
    historicalContext:
      "Over thirty pillars were originally raised; roughly nineteen survive today, some inscribed in Brahmi script that took over a century after their rediscovery to be deciphered by James Prinsep.",
    artisticFeatures:
      "Each pillar tapers gently upward, topped with an animal capital, and displays the same glass-smooth Mauryan polish seen in the Sarnath lions.",
    culturalSignificance:
      "The pillars are among the earliest surviving royal inscriptions in India and a foundational source for understanding Ashoka's Buddhist-influenced reign.",
    facts: [
      "The edicts were written in Prakrit using the Brahmi script, the ancestor of most modern South Asian scripts.",
      "One pillar at Sarnath still stands close to its original height in situ.",
    ],
    tags: ["sandstone", "architecture", "mauryan", "ashoka", "inscription"],
  },
  {
    id: "mauryan-stone-sculpture",
    name: "Mauryan Yaksha Sculpture",
    period: "mauryan",
    date: "c. 3rd century BCE",
    location: "Parkham, near Mathura",
    material: "Sandstone",
    artForm: "Sculpture",
    image: CW("Yaksha Manibhadra - Parkham Mathura circa 150 BCE.jpg"),
    imageCredit: "Mathura Museum — Wikimedia Commons",
    description:
      "A massive, block-like standing male figure identified as a yaksha, a nature spirit worshipped widely in early India before and alongside Buddhism.",
    historicalContext:
      "Found near Mathura, this colossal sculpture reflects a folk-religious tradition that predates organised Buddhist and Hindu iconography, later absorbed into both.",
    artisticFeatures:
      "The frontal, rigid pose and heavy proportions give the figure a monumental, almost architectural presence, quite different from the fluid naturalism of the Didarganj Yakshi.",
    culturalSignificance:
      "Yaksha and yakshi worship represents one of the oldest continuous threads in Indian religious art, later folded into the guardian figures of Buddhist and Hindu temples.",
    facts: [
      "Yaksha figures like this may have stood over 2.5 metres tall, towering over worshippers.",
      "Many early yaksha images were later reinterpreted as Buddhist or Jain guardian deities.",
    ],
    tags: ["sandstone", "sculpture", "mauryan", "yaksha", "mathura"],
  },

  // ───────────────────────── GANDHARA & MATHURA ART ─────────────────────────
  {
    id: "gandhara-buddha",
    name: "Gandhara Buddha",
    period: "gandhara",
    date: "c. 1st–3rd century CE",
    location: "Gandhara region (present-day Pakistan/Afghanistan)",
    material: "Grey schist",
    artForm: "Sculpture",
    image: CW("Head of the Buddha, Gandhara, 3rd century AD, schist - Arthur M. Sackler Gallery - DSC06041.JPG"),
    imageCredit: "Wikimedia Commons",
    description:
      "A standing or seated Buddha carved with wavy hair, a draped toga-like robe, and naturalistic facial features drawing directly on Greco-Roman sculptural conventions.",
    historicalContext:
      "Gandhara sat at a crossroads of Hellenistic, Persian, and Indian cultures following Alexander's campaigns and later Kushan rule, producing one of the first anthropomorphic depictions of the Buddha.",
    artisticFeatures:
      "Deeply carved, naturalistic drapery folds and idealised, almost Apollo-like facial features mark a clear departure from earlier aniconic Buddhist art, where the Buddha was represented only by symbols.",
    culturalSignificance:
      "The Gandhara Buddha established a visual template — robes, halo, hand gestures (mudras) — that spread along the Silk Road into Central Asia, China, and beyond.",
    facts: [
      "Before Gandhara art, the Buddha was represented only through symbols like the empty throne, footprints, or the Bodhi tree.",
      "Gandhara sculptors carved primarily in local grey-blue schist stone.",
    ],
    tags: ["schist", "sculpture", "gandhara", "buddha", "greco-roman", "kushan"],
  },
  {
    id: "mathura-buddha",
    name: "Mathura Buddha",
    period: "gandhara",
    date: "c. 2nd century CE",
    location: "Mathura, Uttar Pradesh",
    material: "Red sandstone",
    artForm: "Sculpture",
    image: CW("Kimbell seated Buddha, Mathura.jpg"),
    imageCredit: "Kimbell Art Museum — Wikimedia Commons",
    description:
      "A powerfully built, seated Buddha carved in warm red sandstone, with a thin clinging robe, broad shoulders, and a large ornamented halo behind the head.",
    historicalContext:
      "Developing at the same time as Gandhara but drawing on indigenous yaksha imagery rather than Hellenistic models, the Mathura school produced a distinctly Indian Buddha type under Kushan patronage.",
    artisticFeatures:
      "The robe clings close to a solid, rounded body, emphasising physical presence and energy rather than the softer drapery realism of Gandhara sculpture.",
    culturalSignificance:
      "The Mathura style became the dominant native tradition for Buddhist and Hindu imagery, directly feeding into the classical Gupta sculptural style that followed.",
    facts: [
      "Mathura workshops produced images for Buddhist, Jain, and early Hindu patrons simultaneously.",
      "The spotted red sandstone used at Mathura came from nearby quarries at Sikri.",
    ],
    tags: ["sandstone", "sculpture", "mathura", "buddha", "kushan"],
  },
  {
    id: "bodhisattva-sculpture",
    name: "Bodhisattva Sculpture",
    period: "gandhara",
    date: "c. 2nd–3rd century CE",
    location: "Gandhara region",
    material: "Grey schist",
    artForm: "Sculpture",
    image: CW("Standing Bodhisattva, Gandhara, 2nd-3rd century AD, schist - Ethnological Museum, Berlin - DSC01660.JPG"),
    imageCredit: "Ashmolean Museum — Wikimedia Commons",
    description:
      "A richly bejewelled figure representing a bodhisattva — a being who postpones enlightenment to help others — shown with princely ornaments unlike the plain-robed Buddha.",
    historicalContext:
      "As Mahayana Buddhism grew, bodhisattvas such as Avalokiteshvara and Maitreya became popular subjects, allowing sculptors to depict elaborate jewellery, turbans, and drapery.",
    artisticFeatures:
      "Layered necklaces, an elaborate turban, and a moustache reflect the Gandharan taste for decorative realism drawn from Hellenistic portrait sculpture.",
    culturalSignificance:
      "The princely bodhisattva form influenced later Buddhist art across Central Asia, China, and Japan, shaping how compassion deities were visualised for centuries.",
    facts: [
      "Bodhisattva figures are distinguished from Buddha images by their jewellery and princely dress.",
      "Many Gandhara bodhisattva heads were separated from their bodies over centuries of looting and trade.",
    ],
    tags: ["schist", "sculpture", "gandhara", "bodhisattva", "mahayana"],
  },
  {
    id: "buddhist-relief",
    name: "Buddhist Narrative Relief",
    period: "gandhara",
    date: "c. 2nd century CE",
    location: "Gandhara region",
    material: "Grey schist",
    artForm: "Sculpture",
    image: CW("Clevelandart 1958.474.jpg"),
    imageCredit: "Metropolitan Museum of Art — Wikimedia Commons",
    description:
      "A horizontal narrative panel carved with scenes from the life of the Buddha, meant to be 'read' left to right like a continuous visual story on a stupa's surface.",
    historicalContext:
      "Such reliefs decorated the drum and base of Buddhist stupas across Gandhara, teaching pilgrims the Buddha's life story through sequential images rather than text.",
    artisticFeatures:
      "Figures are arranged in shallow, crowded compositions framed by classical-style columns and architectural mouldings borrowed from Hellenistic and Roman relief carving.",
    culturalSignificance:
      "These reliefs functioned as an accessible visual scripture, spreading the Buddha's biography to a largely non-literate pilgrim population.",
    facts: [
      "Many such panels were removed from their original stupas by 19th and early 20th century collectors and are now scattered across museums worldwide.",
      "Common scenes include the Buddha's birth, enlightenment, first sermon, and death (parinirvana).",
    ],
    tags: ["schist", "relief", "gandhara", "buddha", "narrative", "stupa"],
  },

  // ───────────────────────── GUPTA PERIOD ─────────────────────────
  {
    id: "sarnath-buddha",
    name: "Sarnath Buddha",
    period: "gupta",
    date: "c. 5th century CE",
    location: "Sarnath, Uttar Pradesh",
    material: "Chunar sandstone",
    artForm: "Sculpture",
    image: CW("British Museum - Seated Buddha (Gupta period).JPG"),
    imageCredit: "Sarnath Museum — Wikimedia Commons",
    description:
      "A seated Buddha shown teaching, hands in the dharmachakra mudra, with an almost transparent robe and a serenely downcast gaze, widely regarded as the pinnacle of Gupta sculpture.",
    historicalContext:
      "Carved during the Gupta period, often called India's classical 'golden age', this image was found near the site of the Buddha's first sermon and represents the maturation of the Mathura and Gandhara traditions into a single confident style.",
    artisticFeatures:
      "The clinging, almost invisible robe reveals rather than conceals the body's smooth volumes, while an intricately carved halo and calm facial expression convey deep inner stillness.",
    culturalSignificance:
      "This image became the definitive model for the teaching Buddha across South and Southeast Asia, copied and adapted for centuries after.",
    facts: [
      "The robe is carved with almost no folds visible, a hallmark of mature Gupta sculptural technique.",
      "The halo behind the head is carved with delicate floral scrollwork.",
    ],
    tags: ["sandstone", "sculpture", "gupta", "buddha", "sarnath", "classical"],
  },
  {
    id: "vishnu-sculpture",
    name: "Vishnu Sculpture",
    period: "gupta",
    date: "c. 5th century CE",
    location: "Central India",
    material: "Sandstone",
    artForm: "Sculpture",
    image: CW("Vishnu of Mathura, 5th century.jpg"),
    imageCredit: "Mathura Museum — Wikimedia Commons",
    description:
      "A standing four-armed Vishnu carrying his characteristic attributes — conch, discus, mace, and lotus — carved with the balanced, idealised proportions typical of Gupta religious sculpture.",
    historicalContext:
      "Gupta patronage strongly favoured Vaishnavism alongside Buddhism, and temple sculpture from this period established enduring iconographic conventions for Vishnu that continue in Hindu temples today.",
    artisticFeatures:
      "A tall crown (kirita-mukuta), symmetrical stance, and smoothly modelled torso reflect the Gupta ideal of divine calm and physical perfection.",
    culturalSignificance:
      "Gupta-era Vishnu images codified the iconography — four arms, specific attributes, particular ornaments — that Hindu sculptors would follow for the next 1,500 years.",
    facts: [
      "Each of Vishnu's four hands traditionally carries a specific symbolic object tied to his cosmic role.",
      "Gupta temple sculpture increasingly moved from freestanding images to niches set into temple walls.",
    ],
    tags: ["sandstone", "sculpture", "gupta", "vishnu", "hindu", "iconography"],
  },
  {
    id: "ajanta-painting",
    name: "Ajanta Cave Painting",
    period: "gupta",
    date: "c. 5th century CE",
    location: "Ajanta Caves, Maharashtra",
    material: "Natural pigment on rock",
    artForm: "Painting",
    image: CW("Ajanta Cave 1 Padmapani.jpg"),
    imageCredit: "Ajanta Caves, Cave 1 — Wikimedia Commons",
    description:
      "Wall paintings inside rock-cut Buddhist caves, including the famous 'Padmapani' bodhisattva, painted in mineral pigments on a prepared plaster surface across dimly lit chambers.",
    historicalContext:
      "Carved and painted in phases from roughly the 2nd century BCE to 5th century CE, the Ajanta caves served as monasteries and prayer halls for Buddhist monks along an ancient trade route.",
    artisticFeatures:
      "Fluid outlines, subtle shading to suggest volume, and expressive, half-closed eyes give the figures a dreamlike gentleness rarely matched in later Indian mural painting.",
    culturalSignificance:
      "Ajanta is the single most important surviving body of ancient Indian painting, and its techniques influenced Buddhist mural traditions as far away as China and Japan.",
    facts: [
      "The caves were abandoned and reclaimed by jungle for centuries before being 'rediscovered' by a British officer on a tiger hunt in 1819.",
      "Pigments were made from local minerals, plants, and even lapis lazuli imported from Central Asia.",
    ],
    tags: ["painting", "mural", "gupta", "buddhist", "ajanta", "cave art"],
  },
  {
    id: "gupta-buddha-sculpture",
    name: "Gupta Standing Buddha",
    period: "gupta",
    date: "c. 5th century CE",
    location: "Mathura, Uttar Pradesh",
    material: "Red sandstone",
    artForm: "Sculpture",
    image: CW("Torso of a Standing Buddha.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A standing Buddha figure with one hand raised in the gesture of reassurance (abhaya mudra), draped in a thin robe carved with even, rhythmic folds like ripples in water.",
    historicalContext:
      "Produced at the Mathura workshops during the Gupta period, this style continued the region's Kushan-era heritage while adopting the refined proportions of the new classical idiom.",
    artisticFeatures:
      "Unlike the smooth Sarnath type, Mathura Gupta Buddhas often show delicate parallel-line drapery folds covering the entire robe, a distinctive regional signature.",
    culturalSignificance:
      "Gupta Buddha images from Mathura and Sarnath together define the 'classical' phase of Indian Buddhist sculpture most often illustrated in art history surveys worldwide.",
    facts: [
      "Gupta Mathura sculptors carved drapery folds so evenly spaced that they appear almost mechanical, a deliberate stylisation rather than realism.",
      "This style was exported through trade and pilgrimage to Southeast Asia.",
    ],
    tags: ["sandstone", "sculpture", "gupta", "buddha", "mathura"],
  },

  // ───────────────────────── CHOLA PERIOD ─────────────────────────
  {
    id: "nataraja",
    name: "Nataraja",
    period: "chola",
    date: "c. 11th century CE",
    location: "Tamil Nadu",
    material: "Bronze",
    artForm: "Metalwork",
    image: CW("NatarajaMET.JPG"),
    imageCredit: "The Metropolitan Museum of Art — Wikimedia Commons",
    description:
      "Shiva as Nataraja, 'Lord of Dance', captured mid-motion inside a ring of cosmic fire — one foot raised, one foot crushing the demon of ignorance underfoot, hair flying outward in perfect balance.",
    historicalContext:
      "Produced by Chola-period bronze casters in Tamil Nadu, images like this were processional icons, carried through temple festivals rather than kept static in a sanctum.",
    artisticFeatures:
      "Made using the lost-wax (cire perdue) process, the sculpture achieves total rotational balance despite its dynamic pose, with fire, drum, and flame all radiating from a fixed still centre.",
    culturalSignificance:
      "The Nataraja became one of the most recognisable images in world art, later interpreted by physicists and philosophers as a symbol of cosmic creation, destruction, and renewal.",
    facts: [
      "Each element of the pose carries meaning: the drum for creation, the fire for destruction, the raised hand for protection, and the raised foot for liberation.",
      "Casting required an entirely new wax model for every bronze — no two Chola Natarajas are truly identical.",
    ],
    tags: ["bronze", "metalwork", "chola", "shiva", "nataraja", "lost-wax", "dance"],
  },
  {
    id: "parvati-bronze",
    name: "Parvati Bronze",
    period: "chola",
    date: "c. 11th–12th century CE",
    location: "Tamil Nadu",
    material: "Bronze",
    artForm: "Metalwork",
    image: CW("MET Standing Parvati1.jpg"),
    imageCredit: "Government Museum, Chennai — Wikimedia Commons",
    description:
      "A graceful standing bronze of the goddess Parvati, Shiva's consort, with a gently swaying tribhanga (three-bend) pose and elaborate jewellery cast directly into the bronze.",
    historicalContext:
      "Parvati bronzes were often cast as companion pieces to Nataraja or Shiva images, to be carried together in temple processions across Chola-era South India.",
    artisticFeatures:
      "The subtle S-curve of the body, downcast eyes, and slender waist embody the Chola ideal of serene feminine grace, achieved through confident, fluid casting.",
    culturalSignificance:
      "Chola Parvati images set the visual standard for goddess iconography in South Indian bronze art for centuries afterward.",
    facts: [
      "Temple bronzes like this were regularly bathed, dressed, and adorned with real jewellery and garlands during festivals.",
      "The tribhanga pose became a defining feature of Indian sculpture across many later traditions.",
    ],
    tags: ["bronze", "metalwork", "chola", "parvati", "goddess", "lost-wax"],
  },
  {
    id: "shiva-sculpture",
    name: "Shiva Bronze Sculpture",
    period: "chola",
    date: "c. 11th century CE",
    location: "Tamil Nadu",
    material: "Bronze",
    artForm: "Metalwork",
    image: CW("Shiva Vishapaharana from Thanjavur (BM).JPG"),
    imageCredit: "British Museum — Wikimedia Commons",
    description:
      "A standing bronze image of Shiva shown in a benevolent, protective form, holding an antelope and an axe, with an elaborate crown and calm expression.",
    historicalContext:
      "Cast in Thanjavur, the capital of the Chola dynasty, this bronze reflects the Cholas' extensive royal patronage of temple metalwork during their height of power.",
    artisticFeatures:
      "Rich surface detailing on the crown and sacred thread contrasts with the smooth, idealised body, a signature balance of ornament and restraint in Chola bronzework.",
    culturalSignificance:
      "Chola Shiva bronzes exemplify a peak of technical and artistic achievement in South Indian metal sculpture, still studied by casters and art historians today.",
    facts: [
      "The Chola bronze tradition is unbroken — hereditary sthapathi (sculptor) families in Swamimalai, Tamil Nadu, still cast bronzes using the same lost-wax method.",
      "Many Chola bronzes bear inscriptions recording the donor's name and the temple they were made for.",
    ],
    tags: ["bronze", "metalwork", "chola", "shiva", "thanjavur", "lost-wax"],
  },
  {
    id: "chola-temple-sculpture",
    name: "Chola Temple Sculpture",
    period: "chola",
    date: "c. 1010 CE",
    location: "Brihadeeswarar Temple, Thanjavur",
    material: "Granite",
    artForm: "Sculpture",
    image: CW("Brihadeeswarar Temple Thanjavur.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "Monumental granite carvings adorning the Brihadeeswarar Temple, built by the Chola king Rajaraja I, featuring guardian figures, dancers, and deities carved directly into the temple's towering walls.",
    historicalContext:
      "Completed around 1010 CE, the temple's soaring vimana (tower) and surrounding sculpture demonstrate the Chola dynasty's engineering ambition and devotion to Shiva at the height of their power.",
    artisticFeatures:
      "Large-scale relief figures set within niches balance architectural grandeur with individually expressive carving, unusual for structures of this scale and period.",
    culturalSignificance:
      "The temple is a UNESCO World Heritage Site and, alongside its bronzes, represents the fullest expression of Chola artistic and religious ambition.",
    facts: [
      "The temple's capstone weighs an estimated 80 tonnes and was reportedly raised using a ramp nearly 6 kilometres long.",
      "The temple complex is part of the UNESCO-listed 'Great Living Chola Temples'.",
    ],
    tags: ["granite", "sculpture", "architecture", "chola", "thanjavur", "temple"],
  },

  // ───────────────────────── MEDIEVAL INDIAN ART ─────────────────────────
  {
    id: "khajuraho-sculpture",
    name: "Khajuraho Sculpture",
    period: "medieval",
    date: "c. 950–1050 CE",
    location: "Khajuraho, Madhya Pradesh",
    material: "Sandstone",
    artForm: "Sculpture",
    image: CW("Khajuraho sculptures.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "Intricately carved sandstone figures covering the exterior walls of the Khajuraho temples — celestial dancers, musicians, deities, and intertwined couples — built under the Chandela dynasty.",
    historicalContext:
      "Constructed between roughly 950 and 1050 CE, the Khajuraho temple group represents one of the most ambitious sculptural programmes in Indian history, with dozens of temples originally built at the site.",
    artisticFeatures:
      "Sculptors covered nearly every surface with figures in dynamic, twisting poses, blending devotional, courtly, and intimate human themes across a single continuous frieze.",
    culturalSignificance:
      "The temples, now a UNESCO World Heritage Site, are widely studied both for their engineering and for their unusually candid celebration of human and divine union.",
    facts: [
      "Of an estimated 85 original temples, only around 25 survive today.",
      "Only a small fraction of Khajuraho's carvings are the famous intimate scenes — most depict daily life, deities, and mythology.",
    ],
    tags: ["sandstone", "sculpture", "medieval", "khajuraho", "temple", "chandela"],
  },
  {
    id: "konark-sculpture",
    name: "Konark Sun Temple Sculpture",
    period: "medieval",
    date: "c. 1250 CE",
    location: "Konark, Odisha",
    material: "Chlorite and laterite",
    artForm: "Architecture",
    image: CW("Konarka Temple.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "The Sun Temple at Konark is designed as a colossal stone chariot for the sun god Surya, with twelve pairs of intricately carved wheels and rearing horses pulling the entire structure.",
    historicalContext:
      "Built around 1250 CE under the Eastern Ganga dynasty king Narasimhadeva I, the temple was conceived on a scale meant to rival the sun's own cosmic power.",
    artisticFeatures:
      "Each stone wheel functions as a sundial, its spokes casting shadows that mark the time of day, combining astronomical precision with dense figural and floral carving.",
    culturalSignificance:
      "Now a UNESCO World Heritage Site and often called the 'Black Pagoda', the temple represents a high point of Kalinga (Odisha) temple architecture.",
    facts: [
      "The 24 carved wheels are large enough to double as functioning sundials, accurate to within minutes.",
      "The temple's main tower is believed to have collapsed centuries ago, but the surviving structure remains architecturally significant.",
    ],
    tags: ["stone", "architecture", "medieval", "konark", "sun temple", "odisha"],
  },
  {
    id: "hoysala-sculpture",
    name: "Hoysala Temple Sculpture",
    period: "medieval",
    date: "c. 1117–1268 CE",
    location: "Belur & Halebidu, Karnataka",
    material: "Chloritic schist (soapstone)",
    artForm: "Sculpture",
    image: CW("Carvings, Hoysaleswara Temple 16, Halebidu, Karnataka 15.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "Densely detailed reliefs of deities, dancers, and mythological narratives carved in soft soapstone across the star-shaped platforms of Hoysala temples such as Belur and Halebidu.",
    historicalContext:
      "Built under the Hoysala dynasty in present-day Karnataka, these temples were carved from chloritic schist, a stone soft enough when quarried to allow extraordinarily fine detail.",
    artisticFeatures:
      "Continuous horizontal friezes wrap entire temple bases with elephants, horsemen, foliage, and epic scenes, carved with jeweller-like precision rather than broad sculptural strokes.",
    culturalSignificance:
      "Hoysala temples are recognised as a UNESCO World Heritage Site and are considered among the most intricately carved structures in the world.",
    facts: [
      "Soapstone hardens with age after quarrying, which is why such fine detail was achievable when the stone was freshly cut.",
      "Some friezes at Halebidu depict thousands of individual figures across a single temple.",
    ],
    tags: ["soapstone", "sculpture", "medieval", "hoysala", "karnataka", "temple"],
  },
  {
    id: "sittanavasal-mural",
    name: "Sittanavasal Cave Mural",
    period: "medieval",
    date: "c. 7th–9th century CE",
    location: "Sittanavasal, Tamil Nadu",
    material: "Natural pigment on rock",
    artForm: "Painting",
    image: CW("N-TN-C166 Rock cut Jain Temple Sittannavasal Pudukkottai.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "Fragmentary ceiling and pillar paintings inside a Jain rock-cut cave, depicting a lotus pond with dancers, fish, elephants, and lotus blooms in earthy natural pigments.",
    historicalContext:
      "Painted for a Jain monastic community, the Sittanavasal murals are among the few substantial survivals of the South Indian mural tradition that flourished alongside, and after, Ajanta.",
    artisticFeatures:
      "Flowing outlines and a restrained earthy palette of red, yellow, green, and black recall Ajanta's technique while adapting it to a Jain devotional context.",
    culturalSignificance:
      "The cave demonstrates that fresco-style mural painting continued and evolved across medieval South India, connecting the Gupta-era tradition to later regional schools.",
    facts: [
      "The site combines a rock-cut Jain temple with a natural cavern used by ascetics for meditation.",
      "Surviving pigment is limited to a few ceiling panels, much of the original scheme has faded or been lost.",
    ],
    tags: ["mural", "painting", "medieval", "jain", "sittanavasal", "tamil nadu"],
  },

  // ───────────────────────── MUGHAL ART ─────────────────────────
  {
    id: "mughal-miniature",
    name: "Mughal Miniature Painting",
    period: "mughal",
    date: "c. 1590–1600 CE",
    location: "Mughal imperial ateliers, North India",
    material: "Opaque watercolour and gold on paper",
    artForm: "Painting",
    image: CW("Hunting Scene, dated 1591. Ascribed to 'Abd as-Samad and Muhammad Sharif. Signed Muhammad Sharif. Los Angeles County Museum of Art..jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A small, jewel-like painting on paper combining Persian pictorial conventions with Indian colour and observational detail, produced for the Mughal imperial court.",
    historicalContext:
      "Mughal painting workshops, established under Emperor Humayun and flourishing under Akbar, brought together Persian master painters and Indian artists to create a distinctive hybrid style.",
    artisticFeatures:
      "Fine brushwork, flattened perspective inherited from Persian tradition, and closely observed naturalistic detail in figures, animals, and landscape work together in a single small format.",
    culturalSignificance:
      "Mughal miniatures record court life, hunts, and historical events in extraordinary visual detail, functioning as a visual chronicle of the empire.",
    facts: [
      "Major manuscripts like the Akbarnama could involve dozens of specialist painters, each responsible for different elements such as faces, landscape, or animals.",
      "Pigments included ground lapis lazuli, gold leaf, and other costly imported materials.",
    ],
    tags: ["painting", "miniature", "mughal", "akbar", "court art"],
  },
  {
    id: "akbarnama-illustration",
    name: "Akbarnama Illustration",
    period: "mughal",
    date: "c. 1590–1595 CE",
    location: "Mughal imperial ateliers",
    material: "Opaque watercolour and gold on paper",
    artForm: "Painting",
    image: CW("Akbar's general informs him of the conquest of Bengal in 1576, from the History of Akbar (Akbarnama), by Abu’l-Fazl.jpg"),
    imageCredit: "Victoria and Albert Museum — Wikimedia Commons",
    description:
      "A densely populated illustration from the official illustrated history of Emperor Akbar's reign, packed with soldiers, elephants, and architecture rendered in vivid detail.",
    historicalContext:
      "Commissioned by Akbar himself and written by his court historian Abul Fazl, the Akbarnama manuscript combined text and painting to commemorate and legitimise Mughal rule.",
    artisticFeatures:
      "Crowded, high-viewpoint compositions allow the painter to show multiple layers of action simultaneously, with individualised faces even among background figures.",
    culturalSignificance:
      "The Akbarnama is one of the richest visual records of 16th-century Indian court life, urban architecture, and military campaigns to survive from any pre-modern empire.",
    facts: [
      "The original manuscript contained around 116 surviving paintings, now held primarily at the Victoria and Albert Museum, London.",
      "Multiple artists often collaborated on a single page, each contributing their specialty.",
    ],
    tags: ["painting", "manuscript", "mughal", "akbar", "akbarnama"],
  },
  {
    id: "jahangir-portrait",
    name: "Jahangir-era Portrait Painting",
    period: "mughal",
    date: "c. 1615–1620 CE",
    location: "Mughal imperial ateliers",
    material: "Opaque watercolour and gold on paper",
    artForm: "Painting",
    image: CW("Bichitr - Jahangir Preferring a Sufi Shaikh to Kings, from the St. Petersburg album - Google Art Project.jpg"),
    imageCredit: "Freer Gallery of Art — Wikimedia Commons",
    description:
      "A refined portrait-style painting from the reign of Emperor Jahangir, whose personal fascination with naturalism pushed Mughal painters toward closely observed likeness and allegory.",
    historicalContext:
      "Jahangir was an avid patron of the arts and natural history, commissioning studies of flora, fauna, and elaborate allegorical scenes that placed the emperor within symbolic compositions.",
    artisticFeatures:
      "Careful modelling of the face, symbolic use of halo and light, and refined, jewel-toned colour reflect the technical peak of the Mughal painting tradition under Jahangir.",
    culturalSignificance:
      "Jahangir-period painting is often considered the artistic high point of the Mughal school, prized for its psychological subtlety and technical finesse.",
    facts: [
      "Jahangir reportedly claimed he could identify the individual hand of any master painter in his atelier just by looking at a single eye in a portrait.",
      "Halos around the emperor's head in these paintings borrow visual language from European Christian art, which reached the Mughal court through Jesuit missionaries.",
    ],
    tags: ["painting", "portrait", "mughal", "jahangir", "court art"],
  },
  {
    id: "mughal-manuscript",
    name: "Mughal Manuscript Illustration",
    period: "mughal",
    date: "c. 1560–1650 CE",
    location: "Mughal imperial ateliers",
    material: "Opaque watercolour and gold on paper",
    artForm: "Painting",
    image: CW('"\'Umar Walks around Fulad Castle, Meets a Foot Soldier and Kicks Him to the Ground", Folio from a Hamzanama (The Adventures of Hamza) MET DP235937.jpg'),
    imageCredit: "Wikimedia Commons",
    description:
      "A large, dynamically composed manuscript page from an illustrated epic, filled with dramatic action, architecture, and vivid colour, produced for imperial libraries.",
    historicalContext:
      "Manuscripts such as the Hamzanama, commissioned early in Akbar's reign, employed over a hundred painters and took more than a decade to complete across roughly 1,400 large folios.",
    artisticFeatures:
      "Bold, theatrical compositions with dramatic diagonal movement mark the earlier, more experimental phase of Mughal painting before the style matured toward finer detail.",
    culturalSignificance:
      "These manuscripts established painting workshops as a central institution of Mughal court culture, training generations of artists for later imperial projects.",
    facts: [
      "The Hamzanama was painted on cloth rather than paper, unusually large for a manuscript of its time.",
      "Fewer than 200 of the original roughly 1,400 folios are known to survive today, scattered across museums worldwide.",
    ],
    tags: ["painting", "manuscript", "mughal", "hamzanama", "epic"],
  },

  // ───────────────────────── RAJPUT & PAHARI ART ─────────────────────────
  {
    id: "rajput-miniature",
    name: "Rajput Miniature Painting",
    period: "rajput",
    date: "c. 1650–1750 CE",
    location: "Rajasthan (Mewar, Bundi, Kishangarh)",
    material: "Opaque watercolour on paper",
    artForm: "Painting",
    image: CW("Bhairavi Ragini, Manley Ragamala, an album painting in gouache on paper.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A vividly coloured court painting from a Rajasthani royal atelier, favouring flat planes of intense colour, stylised figures, and strong decorative patterning over Mughal naturalism.",
    historicalContext:
      "Independent Rajput courts across Rajasthan developed their own painting traditions, sometimes influenced by Mughal technique but retaining bold, indigenous colour sensibilities and subject matter.",
    artisticFeatures:
      "Flat, unmodulated colour fields, expressive rather than naturalistic faces, and dense floral or architectural borders distinguish Rajput painting from the shading-heavy Mughal style.",
    culturalSignificance:
      "Rajput painting preserved and developed distinctly Indian visual traditions even as the Mughal style dominated much of the subcontinent's elite art production.",
    facts: [
      "Different Rajput courts — Mewar, Bundi, Kishangarh, Marwar — each developed recognisably different painting styles.",
      "Many Rajput paintings illustrate ragamala, sets of paintings visualising the moods of classical musical ragas.",
    ],
    tags: ["painting", "miniature", "rajput", "rajasthan", "ragamala"],
  },
  {
    id: "krishna-radha-painting",
    name: "Krishna-Radha Painting",
    period: "rajput",
    date: "c. 1780 CE",
    location: "Kangra, Himachal Pradesh (Pahari school)",
    material: "Opaque watercolour on paper",
    artForm: "Painting",
    image: CW("Krishna and Radha in a Bower.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A lyrical, softly coloured painting of the divine lovers Krishna and Radha set in a lush garden pavilion, painted in the delicate Kangra style of the Pahari hill courts.",
    historicalContext:
      "The Pahari courts of the Himalayan foothills, particularly Kangra, developed one of the most refined and romantic painting styles in 18th-century India, deeply inspired by Krishna devotional poetry.",
    artisticFeatures:
      "Cool, naturalistic colour, delicately modelled faces, and atmospheric landscape backgrounds set Kangra painting apart from the flatter, bolder Rajasthani schools.",
    culturalSignificance:
      "Krishna-Radha imagery from Kangra remains one of the most beloved and widely reproduced genres of Indian painting, shaping popular devotional art to this day.",
    facts: [
      "The Kangra style flourished under the patronage of Raja Sansar Chand in the late 18th century.",
      "Many Kangra paintings illustrate verses from the Gita Govinda, a 12th-century devotional poem about Krishna and Radha.",
    ],
    tags: ["painting", "miniature", "pahari", "kangra", "krishna", "radha"],
  },
  {
    id: "pahari-miniature",
    name: "Pahari Miniature Painting",
    period: "rajput",
    date: "c. 1700–1800 CE",
    location: "Himalayan foothill courts (Basohli, Guler, Kangra)",
    material: "Opaque watercolour on paper",
    artForm: "Painting",
    image: CW("Radha and Krishna in Rasamanjari by Bhanudatta, Basohli, c1670.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A small hill-court painting, here from the early Basohli style, marked by bold flat colour, oversized eyes, and beetle-wing casing used to simulate emeralds in jewellery.",
    historicalContext:
      "Small kingdoms scattered across the Himalayan foothills each supported their own ateliers, producing a family of related but visually distinct 'Pahari' (hill) painting styles.",
    artisticFeatures:
      "Early Basohli work favours intense, almost primary colour and dramatic simplification, later softening into the naturalistic detail of Guler and Kangra painting.",
    culturalSignificance:
      "The Pahari schools collectively represent one of the most inventive and stylistically diverse chapters of Indian miniature painting.",
    facts: [
      "Basohli painters sometimes embedded actual iridescent beetle-wing cases into paintings to render jewellery more vividly.",
      "Pahari painting evolved over roughly two centuries across many small, competing hill courts.",
    ],
    tags: ["painting", "miniature", "pahari", "basohli", "hill courts"],
  },
  {
    id: "rajasthani-court-painting",
    name: "Rajasthani Court Painting",
    period: "rajput",
    date: "c. 1700 CE",
    location: "Mewar, Rajasthan",
    material: "Opaque watercolour on paper",
    artForm: "Painting",
    image: CW("Maharana Sangram Singh Hunting Wild Boar, Mewar 1725 Metmuseum.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A formal court scene from the Mewar royal atelier, depicting a Rajput ruler in procession or at leisure, rendered with flat architectural backdrops and precise, formal composition.",
    historicalContext:
      "Mewar's Udaipur court maintained one of the most prolific and long-lived painting workshops among the Rajput states, documenting rulers, hunts, festivals, and religious life over generations.",
    artisticFeatures:
      "Strict profile portraiture, architectural settings rendered as flattened backdrops, and a formal, almost heraldic sense of composition define this courtly genre.",
    culturalSignificance:
      "These court paintings serve as an invaluable visual archive of Rajput political life, ceremony, and identity across several centuries.",
    facts: [
      "Mewar rulers were painted in strict profile for most of the 17th and 18th centuries, following a formal court convention.",
      "The Udaipur royal collection preserves thousands of paintings spanning several centuries of continuous production.",
    ],
    tags: ["painting", "rajput", "mewar", "court art", "rajasthan"],
  },

  // ───────────────────────── COLONIAL / 19TH CENTURY ART ─────────────────────────
  {
    id: "ravi-varma-lady-swarbat",
    name: "Lady Playing the Swarbat",
    period: "colonial",
    date: "c. 1889–1900 CE",
    location: "Kilimanoor, Kerala / Bombay",
    material: "Oil on canvas",
    artForm: "Painting",
    image: CW("Raja Ravi Varma, Lady in the Moon Light (1889).jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A finely modelled oil portrait of a woman in traditional dress playing a stringed instrument, painted with academic European technique applied to an Indian subject.",
    historicalContext:
      "Raja Ravi Varma trained in Western academic oil painting techniques while staying rooted in Indian subject matter, becoming the most celebrated Indian painter of the late 19th century.",
    artisticFeatures:
      "Careful attention to fabric texture, soft realistic shading, and a warm, atmospheric palette mark Ravi Varma's fusion of European illusionism with Indian dress and settings.",
    culturalSignificance:
      "Ravi Varma's work bridged elite oil painting and mass visual culture, especially once his images were mass-produced as affordable oleograph prints for Indian homes.",
    facts: [
      "Ravi Varma established one of India's first mechanised printing presses to reproduce his paintings as lithographs, reaching a mass audience.",
      "His depictions of Hindu goddesses became the visual template still used in calendar art and religious prints across India today.",
    ],
    tags: ["oil painting", "colonial", "ravi varma", "portrait", "academic"],
  },
  {
    id: "ravi-varma-galaxy-musicians",
    name: "Galaxy of Musicians",
    period: "colonial",
    date: "c. 1889 CE",
    location: "Bombay",
    material: "Oil on canvas",
    artForm: "Painting",
    image: CW("Raja Ravi Varma, Galaxy of Musicians.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A large group portrait of eleven women in regional dress from across India, each holding a different musical instrument, arranged in a harmonious composed line.",
    historicalContext:
      "Painted for the 1893 World's Columbian Exposition in Chicago, the work was intended to showcase the diversity and unity of Indian culture to an international audience.",
    artisticFeatures:
      "Ravi Varma balances individual regional costume detail with an overall unified, rhythmic composition, treating diversity as a form of visual harmony.",
    culturalSignificance:
      "The painting is often read as an early visual statement of a unified Indian cultural identity, expressed through regional variety brought together in a single frame.",
    facts: [
      "The eleven women represent different regions and communities across India, each in distinct traditional attire.",
      "The painting is now held in the collection of the Sree Chitra Art Gallery in Thiruvananthapuram.",
    ],
    tags: ["oil painting", "colonial", "ravi varma", "music", "regional dress"],
  },
  {
    id: "colonial-company-painting",
    name: "Company School Painting",
    period: "colonial",
    date: "c. 1800–1850 CE",
    location: "Bengal, Delhi, and Madras Presidencies",
    material: "Watercolour on paper",
    artForm: "Painting",
    image: CW("Saras by Sheikh Zainuddin.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A detailed natural-history style watercolour, here of Indian wildlife, produced by Indian artists working for British East India Company patrons who wanted records of local flora, fauna, and daily life.",
    historicalContext:
      "As European patrons commissioned Indian artists to document plants, animals, festivals, and trades, a hybrid 'Company School' style emerged, combining Mughal-derived precision with European botanical and zoological illustration conventions.",
    artisticFeatures:
      "Meticulous, almost scientific attention to detail, flat neutral backgrounds, and careful natural colour reflect the documentary purpose behind these commissioned works.",
    culturalSignificance:
      "Company paintings preserve an invaluable visual record of 18th and 19th century Indian natural history, trades, and social life, produced by skilled but often uncredited Indian artists.",
    facts: [
      "Company School artists were often trained in earlier Mughal or Rajput ateliers before adapting to European patrons' tastes.",
      "Major collections of Company paintings survive today at institutions like the British Library and the Victoria and Albert Museum.",
    ],
    tags: ["watercolour", "colonial", "company school", "natural history"],
  },

  // ───────────────────────── MODERN INDIAN ART ─────────────────────────
  {
    id: "bharat-mata",
    name: "Bharat Mata",
    period: "modern",
    date: "1905 CE",
    location: "Calcutta",
    material: "Watercolour on paper",
    artForm: "Painting",
    image: CW("Bharat Mata by Abanindranath Tagore.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A gentle, four-armed female figure personifying India as a mother goddess, holding symbols of food, cloth, learning, and spiritual teaching, painted in soft wash technique.",
    historicalContext:
      "Painted in 1905 during the Swadeshi movement against the partition of Bengal, Abanindranath Tagore's image became closely tied to the growing Indian nationalist movement.",
    artisticFeatures:
      "Tagore adopted the soft wash technique inspired by Japanese and Mughal miniature painting, deliberately rejecting the heavier academic oil style associated with Raja Ravi Varma and colonial art schools.",
    culturalSignificance:
      "As a founding figure of the Bengal School, Tagore's Bharat Mata helped launch a conscious search for a modern, non-Western Indian artistic identity.",
    facts: [
      "The painting was created the same year as the Partition of Bengal, directly tying art to the Swadeshi political movement.",
      "Abanindranath Tagore was the nephew of poet Rabindranath Tagore and a key founder of the Bengal School of Art.",
    ],
    tags: ["painting", "modern", "bengal school", "nationalism", "abanindranath tagore"],
  },
  {
    id: "amrita-shergil-painting",
    name: "Amrita Sher-Gil Painting",
    period: "modern",
    date: "c. 1937–1938 CE",
    location: "Shimla / Saraya",
    material: "Oil on canvas",
    artForm: "Painting",
    image: CW("Amrita Sher-Gil painting South Indian Villagers Going to Market 1937 Simla.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "A boldly modelled painting rendered with flattened, saturated colour planes, part of Amrita Sher-Gil's mature body of work depicting rural Indian life and interior emotional states.",
    historicalContext:
      "Trained in Paris before returning to India, Sher-Gil consciously moved away from European academic realism to develop a modernist style rooted in Indian subjects and Ajanta-inspired colour.",
    artisticFeatures:
      "Simplified forms, muted earthy colour, and emotionally direct, often melancholic figures mark a decisive break from both colonial academic painting and traditional miniature styles.",
    culturalSignificance:
      "Often called a pioneer of Indian modern art, Sher-Gil's short but influential career reshaped how Indian painters approached both technique and subject in the 20th century.",
    facts: [
      "Sher-Gil died at just 28 years old, yet is still regarded as one of the most important painters in Indian modern art history.",
      "The Indian government has declared several of her works National Art Treasures, restricting their export.",
    ],
    tags: ["oil painting", "modern", "amrita sher-gil", "portrait"],
  },
  {
    id: "jamini-roy-painting",
    name: "Jamini Roy Painting",
    period: "modern",
    date: "c. 1940s CE",
    location: "Calcutta",
    material: "Tempera on cloth or board",
    artForm: "Painting",
    image: CW("Mother and Child Jan 09.JPG"),
    imageCredit: "Wikimedia Commons",
    description:
      "A flat, bold-outlined painting of stylised figures with large almond eyes, drawing directly on Bengali folk art and the visual language of Kalighat pat painting.",
    historicalContext:
      "After training in Western academic painting, Jamini Roy deliberately turned to rural Bengali folk traditions, seeking an authentic and accessible modern Indian visual language.",
    artisticFeatures:
      "Thick black outlines, flat unshaded colour fields, and simplified, repeated forms echo the patterns and economy of village scroll and pat painting traditions.",
    culturalSignificance:
      "Jamini Roy's embrace of folk aesthetics offered an influential alternative path for Indian modernism, distinct from both European realism and elite Bengal School romanticism.",
    facts: [
      "Roy used natural, locally sourced pigments and materials, partly as a political statement of self-reliance echoing the Swadeshi movement.",
      "His workshop produced multiple versions of popular compositions, functioning almost like a folk-art production line.",
    ],
    tags: ["painting", "modern", "jamini roy", "folk art", "bengal"],
  },
  {
    id: "mf-husain-painting",
    name: "M. F. Husain Painting",
    period: "modern",
    date: "c. 1950s CE",
    location: "Bombay",
    material: "Oil on canvas",
    artForm: "Painting",
    image: CW("Horse with a bouquet - M. F. Husain.jpg"),
    imageCredit: "Wikimedia Commons",
    description:
      "An energetic, gesturally painted composition of galloping horses, a recurring motif for M. F. Husain, rendered with expressive brushwork and bold, simplified form.",
    historicalContext:
      "A founding member of the Progressive Artists' Group formed in Bombay in 1947, Husain sought a distinctly Indian modernism that engaged with international movements like Cubism and Expressionism.",
    artisticFeatures:
      "Dynamic linear energy, flattened perspective, and confident economy of form reflect Husain's synthesis of folk motifs, classical Indian sculpture, and modernist abstraction.",
    culturalSignificance:
      "As one of India's most prominent 20th-century painters, Husain's work helped define post-independence Indian modernism on both national and international stages.",
    facts: [
      "Husain began his career painting cinema hoardings in Bombay before joining the Progressive Artists' Group.",
      "His horse motif recurred throughout his six-decade career, inspired partly by the terracotta horses of Bankura, Bengal.",
    ],
    tags: ["oil painting", "modern", "m f husain", "progressive artists group", "horses"],
  },
];

export const TOTAL_ARTIFACTS = ARTIFACTS.length;
