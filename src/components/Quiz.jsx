import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { SectionHeading } from "./Timeline.jsx";
import { ARTIFACTS } from "../data/artifacts.js";

const byId = (id) => ARTIFACTS.find((a) => a.id === id);

const QUESTIONS = [
  {
    q: "Which period is famous for Nataraja bronze sculptures?",
    image: byId("nataraja")?.image,
    options: ["Indus Valley", "Chola", "Mughal", "Modern"],
    correct: 1,
    explain: "Chola bronze casters of Tamil Nadu (9th–13th century CE) perfected the lost-wax Nataraja form.",
  },
  {
    q: "The 'Dancing Girl' bronze figure was discovered at which Indus Valley site?",
    image: byId("dancing-girl")?.image,
    options: ["Harappa", "Lothal", "Mohenjo-daro", "Dholavira"],
    correct: 2,
    explain: "The Dancing Girl was excavated at Mohenjo-daro in 1926.",
  },
  {
    q: "The Lion Capital of Ashoka, now India's National Emblem, originally stood at:",
    image: byId("lion-capital-ashoka")?.image,
    options: ["Sanchi", "Sarnath", "Bodh Gaya", "Nalanda"],
    correct: 1,
    explain: "It was erected at Sarnath, marking the site of the Buddha's first sermon.",
  },
  {
    q: "Which artist painted 'Bharat Mata', closely tied to the Swadeshi movement?",
    image: byId("bharat-mata")?.image,
    options: ["M. F. Husain", "Jamini Roy", "Amrita Sher-Gil", "Abanindranath Tagore"],
    correct: 3,
    explain: "Abanindranath Tagore painted Bharat Mata in 1905, founding the Bengal School style.",
  },
  {
    q: "The Ajanta cave paintings mainly depict scenes from which religious tradition?",
    image: byId("ajanta-painting")?.image,
    options: ["Jainism", "Buddhism", "Sikhism", "Zoroastrianism"],
    correct: 1,
    explain: "The Ajanta caves were Buddhist monastic sites, painted with Jataka tales and Buddhist iconography.",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[current];

  const choose = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 < QUESTIONS.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="quiz" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-2xl mx-auto px-5 md:px-8 relative">
        <SectionHeading eyebrow="How Much Have You Learned?" title="Test Your Knowledge" dark />

        <div className="mt-12 bg-charcoal2 border border-ivory/10 rounded-sm overflow-hidden">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {q.image && <ArtifactImage src={q.image} alt="Quiz artifact" className="w-full h-56 sm:h-64" />}
                <div className="p-6 sm:p-8">
                  <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">
                    Question {current + 1} of {QUESTIONS.length}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory leading-snug mb-6">{q.q}</h3>

                  <div className="flex flex-col gap-2.5">
                    {q.options.map((opt, i) => {
                      const isCorrect = i === q.correct;
                      const isChosen = i === selected;
                      const showState = selected !== null;
                      return (
                        <button
                          key={i}
                          onClick={() => choose(i)}
                          disabled={selected !== null}
                          className={`flex items-center justify-between text-left px-4 py-3 rounded-sm border font-body text-lg transition-colors ${
                            showState && isCorrect
                              ? "bg-gold/15 border-gold text-goldLight"
                              : showState && isChosen
                              ? "bg-terracotta/15 border-terracotta text-terracotta"
                              : "border-ivory/15 text-ivory/85 hover:border-gold/50"
                          }`}
                        >
                          <span>
                            <span className="font-sans text-xs mr-2 text-ivory/40">
                              {String.fromCharCode(65 + i)}.
                            </span>
                            {opt}
                          </span>
                          {showState && isCorrect && <CheckCircle2 size={18} className="text-gold shrink-0" />}
                          {showState && isChosen && !isCorrect && <XCircle size={18} className="text-terracotta shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {selected !== null && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5">
                      <p className="font-body text-base text-ivory/70 leading-relaxed">{q.explain}</p>
                      <button
                        onClick={next}
                        className="mt-5 px-6 py-2.5 bg-gold hover:bg-goldLight text-charcoal font-sans text-sm uppercase tracking-wider transition-colors"
                      >
                        {current + 1 < QUESTIONS.length ? "Next Question" : "See Score"}
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 text-center"
              >
                <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Quiz Complete</p>
                <p className="font-serif text-5xl text-ivory mb-2">
                  Your Score: {score}/{QUESTIONS.length}
                </p>
                <p className="font-body text-lg text-ivory/60 mb-8">
                  {score === QUESTIONS.length
                    ? "A perfect score — you know your Indian art history!"
                    : score >= QUESTIONS.length / 2
                    ? "Well done — a strong grasp of the timeline."
                    : "Explore the timeline above and try again!"}
                </p>
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-ivory/30 hover:border-gold hover:text-gold text-ivory font-sans text-sm uppercase tracking-wider transition-colors"
                >
                  <RotateCcw size={15} />
                  Retake Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
