# Indian Art Through the Ages — Interactive Timeline

A picture-rich, interactive digital timeline built for the assignment brief:
**"Interactive Timeline with Artifacts" (CO1)** — create an interactive digital
timeline that includes virtual replicas of key artifacts from different periods
of Indian art, each clickable with detailed information and historical context.

## Features

- Museum-style hero with a real artifact image collage
- Interactive vertical timeline across 10 periods (Indus Valley to Modern)
- 34 artifacts, each with a real image, full detail modal, historical context,
  artistic features, cultural significance, and interesting facts
- Search across name / period / region / material / art form
- Filters by period, art form, and material
- Masonry image gallery
- "Did You Know?" educational callouts
- "Your Journey Through Indian Art" step-by-step visual path
- Favorites ("My Collection") and "Artifacts Explored" progress, both saved
  in your browser's localStorage
- 5-question quiz with instant feedback and score
- Fully responsive (vertical timeline, single-column cards, full-screen modal
  on mobile)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build a production version:

```bash
npm run build
npm run preview
```

## Tech Stack

React, Vite, Tailwind CSS, Framer Motion, Lucide React

## Image Sources

All artifact photographs are loaded directly from Wikimedia Commons
(commons.wikimedia.org/wiki/Special:FilePath/...), which serves public
domain and Creative Commons-licensed images from institutions including:

- The Metropolitan Museum of Art
- The British Museum
- National Museum, New Delhi
- Government Museum, Chennai
- LACMA (Los Angeles County Museum of Art)
- Kimbell Art Museum
- Victoria and Albert Museum
- Freer Gallery of Art (Smithsonian)
- Ashmolean Museum

Each artifact's detail view displays its specific image credit line. Because
images are fetched live from Wikimedia Commons rather than bundled with the
project, an internet connection is required to see them, and every image
component includes a graceful fallback (a styled placeholder, never a broken
image icon) in case any individual file is ever moved or renamed on Commons.

## Project Structure

```
src/
  data/
    periods.js       period metadata (name, date range, color, thumbnail)
    artifacts.js      34 artifacts with full detail content
  components/
    ArtifactImage.jsx       image with graceful fallback
    Header.jsx               nav bar
    Hero.jsx                  hero with image collage
    Timeline.jsx              interactive vertical timeline
    ArtifactsSection.jsx      period cards, progress, search/filter, grids
    ArtifactCard.jsx          artifact preview card
    ArtifactModal.jsx         full artifact detail modal
    SearchFilterBar.jsx       search + filter controls
    PeriodCards.jsx           large image period cards
    ProgressBar.jsx           "Artifacts Explored" tracker
    Gallery.jsx                masonry image gallery
    DidYouKnow.jsx             educational fact callouts
    Journey.jsx                 step-by-step visual journey
    Quiz.jsx                    knowledge quiz
    MyCollectionDrawer.jsx     favorites side drawer
    Footer.jsx                   credits and image sources
  App.jsx        composes everything, manages favorites/explored state
```

## Notes for Faculty Demonstration

- Every artifact card, timeline node, and gallery tile is clickable and opens
  a full detail view (left: large image, right: period / date / location /
  material / art form, description, historical context, artistic features,
  cultural significance, interesting facts).
- Search and filters are live: try searching "Nataraja" or "Mughal", or
  filtering by Period, Chola.
- Favorites and explored progress persist between visits via localStorage.
