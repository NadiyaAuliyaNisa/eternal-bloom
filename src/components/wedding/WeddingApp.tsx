import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GoldenParticles from "./GoldenParticles";
import FallingPetals from "./FallingPetals";
import FloatingHearts from "./FloatingHearts";
import MusicControl from "./MusicControl";
import NavigationHUD from "./NavigationHUD";
import OpeningScene from "./scenes/OpeningScene";
import BismillahScene from "./scenes/BismillahScene";
import CoupleScene from "./scenes/CoupleScene";
import LoveStoryScene from "./scenes/LoveStoryScene";
import EventScene from "./scenes/EventScene";
import MapScene from "./scenes/MapScene";
import RsvpScene from "./scenes/RsvpScene";
import GiftScene from "./scenes/GiftScene";
import FinalScene from "./scenes/FinalScene";

const SCENES = [
  { component: BismillahScene, duration: 10000 },
  { component: CoupleScene, duration: 8000 },
  { component: LoveStoryScene, duration: 10000 },
  { component: EventScene, duration: 9000 },
  { component: MapScene, duration: 0 },
  { component: RsvpScene, duration: 0 },
  { component: GiftScene, duration: 0 },
  { component: FinalScene, duration: 12000 },
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

  const heartScenes = [1, 7]; // CoupleScene, FinalScene

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(43,52%,56%,0.03)_0%,_transparent_70%)]" />
      </div>

      <GoldenParticles />

      {!isOpened ? (
        <OpeningScene onOpen={handleOpen} />
      ) : (
        <>
          <FallingPetals count={currentScene === 7 ? 20 : 12} />
          {heartScenes.includes(currentScene) && <FloatingHearts count={6} />}

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
