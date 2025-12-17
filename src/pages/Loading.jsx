
import {useEffect, useState} from "react";
import "./Loading.css";
import map from "../assets/loadingMap.webp";
import phoneMap from "../assets/phoneMap.webp";

export default function Loading({ onConfirm }) {
    const [tipIndex, setTipIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingComplete, setLoadingComplete] = useState(false);

  const TIPS = [
    "Gain experience to increase your stat gauges.",
    "Utility items can affect characters differently.",
    "Loot abandoned buildings for valuable resources.",
    "Relics often come with powerful tradeoffs.",
    "Choose wisely - not every fight can be won in combat.",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTipIndex((prev) => (prev + 1) % TIPS.length);
        setIsFading(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 12000;
    const intervalTime = 100;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      {!loadingComplete ? (
        <>
          <h1 className="loading-title">Loading...</h1>

          <h3 className={`loading-tip ${isFading ? "fade-out" : "fade-in"}`}>
            {TIPS[tipIndex]}
          </h3>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      ) : (
        <button className="credits-btn" onClick={onConfirm}>
          View Credits
        </button>
      )}
      <img src={map} alt="Loading Map" className="map-img loading-map" />
      <img
        src={phoneMap}
        alt="Phone Map"
        className="map-img loading-phone-map"
      />
    </div>
  );
}
