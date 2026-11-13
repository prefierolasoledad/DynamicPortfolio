"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "@/i18n/I18nProvider";

const Modal = ({ onClose, toggle }) => {
  const { dict } = useI18n();
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            "
      >
        <p className="font-light">{dict.sound.prompt}</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            {dict.sound.yes}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            {dict.sound.no}
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const { dict } = useI18n();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Browsers reject play() until the user has interacted with the page, so only
  // mark the music as playing once playback has actually started.
  const play = async () => {
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const saveConsent = (value) => {
    localStorage.setItem("musicConsent", String(value));
    localStorage.setItem("consentTime", new Date().toISOString());
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");
    const consentValid =
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > Date.now();

    if (!consentValid) {
      setShowModal(true);
      return;
    }
    if (consent !== "true") return;

    // Consent was given earlier: start the music on the first interaction.
    const events = ["click", "keydown", "touchstart"];
    const handleFirstUserInteraction = () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleFirstUserInteraction)
      );
      if (audioRef.current?.paused) play();
    };
    events.forEach((event) =>
      document.addEventListener(event, handleFirstUserInteraction)
    );
    return () =>
      events.forEach((event) =>
        document.removeEventListener(event, handleFirstUserInteraction)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    if (newState) {
      play();
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
    saveConsent(newState);
    setShowModal(false);
  };

  const decline = () => {
    saveConsent(false);
    setShowModal(false);
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={decline} toggle={toggle} />
      )}

      <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={dict.sound.button}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
