import { useEffect, useRef, useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline.jsx";
import ArtifactsSection from "./components/ArtifactsSection.jsx";
import Gallery from "./components/Gallery.jsx";
import DidYouKnow from "./components/DidYouKnow.jsx";
import Journey from "./components/Journey.jsx";
import Quiz from "./components/Quiz.jsx";
import Footer from "./components/Footer.jsx";
import ArtifactModal from "./components/ArtifactModal.jsx";
import MyCollectionDrawer from "./components/MyCollectionDrawer.jsx";

const FAVORITES_KEY = "iat_favorites";
const EXPLORED_KEY = "iat_explored";

function loadSet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [favorites, setFavorites] = useState(() => loadSet(FAVORITES_KEY));
  const [explored, setExplored] = useState(() => loadSet(EXPLORED_KEY));
  const [activeArtifact, setActiveArtifact] = useState(null);
  const [collectionOpen, setCollectionOpen] = useState(false);

  const artifactsRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(EXPLORED_KEY, JSON.stringify(explored));
  }, [explored]);

  const openArtifact = useCallback((artifact) => {
    setActiveArtifact(artifact);
    setExplored((prev) => (prev.includes(artifact.id) ? prev : [...prev, artifact.id]));
  }, []);

  const closeArtifact = useCallback(() => setActiveArtifact(null), []);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  }, []);

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const jumpToPeriod = (periodKey) => {
    scrollToSection("artifacts");
    // give the artifacts section a beat to render/scroll into view first
    setTimeout(() => {
      document.getElementById(`period-${periodKey}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Header
        onSearchClick={() => scrollToSection("artifacts")}
        favoritesCount={favorites.length}
        onCollectionClick={() => setCollectionOpen(true)}
      />

      <Hero
        onExploreTimeline={() => scrollToSection("timeline")}
        onExploreArtifacts={() => scrollToSection("artifacts")}
      />

      <Timeline onSelectPeriod={jumpToPeriod} />

      <ArtifactsSection
        ref={artifactsRef}
        onOpenArtifact={openArtifact}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        exploredCount={explored.length}
        jumpToPeriod={jumpToPeriod}
      />

      <Gallery onOpenArtifact={openArtifact} />

      <DidYouKnow />

      <Journey onSelectPeriod={jumpToPeriod} />

      <Quiz />

      <Footer />

      <ArtifactModal
        artifact={activeArtifact}
        onClose={closeArtifact}
        isFavorite={activeArtifact ? favorites.includes(activeArtifact.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <MyCollectionDrawer
        open={collectionOpen}
        onClose={() => setCollectionOpen(false)}
        favorites={favorites}
        onOpenArtifact={openArtifact}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
