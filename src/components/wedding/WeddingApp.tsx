import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GoldenParticles from "./GoldenParticles";
import FallingPetals from "./FallingPetals";
import FloatingHearts from "./FloatingHearts";
import MusicControl from "./MusicControl";
import NavigationHUD from "./NavigationHUD";
import OpeningScene from "./scenes/OpeningScene";
import BismillahScene from "./scenes/BismillahScene";
import CoupleScene from "./scenes/CoupleScene";
import NamesScene from "./scenes/NamesScene";
import LoveStoryScene from "./scenes/LoveStoryScene";
import EventScene from "./scenes/EventScene";
import GiftScene from "./scenes/GiftScene";
import FinalScene from "./scenes/FinalScene";

// Cinematic scene flow with individual durations (ms)
const SCENES = [
  { component: BismillahScene, duration: 6000 },   // Scene 1 – Bismillah
  { component: CoupleScene, duration: 8000 },       // Scene 2 – Couple photos
  { component: NamesScene, duration: 8000 },        // Scene 3 – Full names
  { component: LoveStoryScene, duration: 10000 },   // Scene 4 – Love story
  { component: EventScene, duration: 9000 },        // Scene 5 – Wedding date
  { component: GiftScene, duration: 0 },            // Scene 6 – Gift (paused)
  { component: FinalScene, duration: 10000 },       // Scene 7 – Closing
];

const sceneVariants = {
  initial: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
};

const sceneTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const WeddingApp = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [musicReady, setMusicReady] = useState(false);

  const nextScene = useCallback(() => {
    setCurrentScene((prev) => (prev + 1) % SCENES.length);
  }, []);

  const prevScene = useCallback(() => {
    setCurrentScene((prev) => (prev - 1 + SCENES.length) % SCENES.length);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused((p) => !p);
  }, []);

  useEffect(() => {
    if (!isOpened || isPaused) return;

    const scene = SCENES[currentScene];

    // Pause on interactive scenes (duration === 0)
    if (scene.duration === 0) {
      setIsPaused(true);
      return;
    }

    const timer = setTimeout(nextScene, scene.duration);
    return () => clearTimeout(timer);
  }, [currentScene, isPaused, isOpened, nextScene]);

  const handleOpen = () => {
    setIsOpened(true);
    setMusicReady(true);
  };

  const CurrentSceneComponent = SCENES[currentScene].component;

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Cinematic background overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(43,52%,56%,0.03)_0%,_transparent_70%)]" />
      </div>

      <GoldenParticles />

      {!isOpened ? (
        <OpeningScene onOpen={handleOpen} />
      ) : (
        <>
          <FallingPetals count={currentScene === 6 ? 20 : 12} />
          {(currentScene === 1 || currentScene === 6) && <FloatingHearts count={6} />}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              variants={sceneVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={sceneTransition}
              className="fixed inset-0 flex items-center justify-center"
            >
              <CurrentSceneComponent />
            </motion.div>
          </AnimatePresence>

          <NavigationHUD
            onPrev={prevScene}
            onNext={nextScene}
            onTogglePause={togglePause}
            isPaused={isPaused}
            currentScene={currentScene}
            totalScenes={SCENES.length}
          />
        </>
      )}

      <MusicControl shouldPlay={musicReady} />
    </div>
  );
};

export default WeddingApp;
