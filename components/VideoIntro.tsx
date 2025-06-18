"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoIntroProps {
  onComplete: () => void;
}

export default function VideoIntro({ onComplete }: VideoIntroProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percentage = (video.currentTime / video.duration) * 100;
      setProgress(percentage);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const handleSkip = () => {
    onComplete();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
          {/* Video Player */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            muted={isMuted}
            onEnded={onComplete}
            playsInline
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            {/* Fallback for development - replace with actual video */}
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-900 to-accent-900">
              <div className="text-center p-8">
                <h2 className="text-4xl font-bold mb-4 gradient-text">
                  Welcome Video Placeholder
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Place your 1-2 minute intro video here
                </p>
                <button
                  onClick={onComplete}
                  className="px-6 py-3 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Continue to Portfolio
                </button>
              </div>
            </div>
          </video>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-1 mb-4">
              <motion.div
                className="bg-gradient-to-r from-primary-400 to-accent-400 h-full rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={toggleMute}
                className="p-2 glass-effect rounded-lg hover-glow"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <button
                onClick={handleSkip}
                className="px-4 py-2 glass-effect rounded-lg hover-glow flex items-center gap-2"
              >
                Skip Intro
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Script Guide */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 left-6 glass-effect rounded-lg p-4 max-w-md"
          >
            <h3 className="font-semibold mb-2">Video Script Guide:</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>0-15s: "I've transformed business challenges into AI solutions..."</li>
              <li>15-45s: Your journey from Vrbo to AI leadership</li>
              <li>45-75s: Highlight 3 major achievements with visuals</li>
              <li>75-90s: "Let me show you what's possible with AI..."</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}