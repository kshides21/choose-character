import { useState, useRef, useEffect } from "react";
import "./ItemSelect.css";
import { ITEMS } from "../data/items";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import itemMusic from "../music/menu.mp3";
import StatsBar from "../components/StatsBar";

function ItemCategory({ title, items, selectedItem, onSelect }) {
  return (
    <section className="item-category">
      <h2 className="category-title">Choose your {title}:</h2>

      <div className="item-row">
        {items.map((item) => (
          <div
            key={item.id}
            className={`item-card ${
              selectedItem?.id === item.id ? "selected" : ""
            }`}
            onClick={() => onSelect(item)}
          >
            <div className="item-title-wrapper">
              <h1 className="item-title">{item.name}</h1>
              <img className="item-image" src={item.image} alt={item.name} />
              <h4 className="item-description">{item.description}</h4>
            </div>
            <div className="item-stats-container">
              {Object.entries(item.stats).map(([stat, value]) => (
                <div key={stat} className="item-stat">
                  {value < 0 ? (
                    <span className="item-stat-label negative">
                      {stat.toUpperCase()}
                    </span>
                  ) : (
                    <span className="item-stat-label positive">
                      {stat.toUpperCase()}
                    </span>
                  )}
                  {value < 0 ? (
                    <span className="item-stat-value negative">{value}</span>
                  ) : (
                    <span className="item-stat-value positive">+{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ItemSelect({
  setPlayerStats,
  playerStats,
  theme,
  character,
  onBack,
  onConfirm,
}) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [itemSelectPage, setItemSelectPage] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [beginChoose, setBeginChoose] = useState(false);
  const audioRef = useRef(null);
  const prevItemsRef = useRef(selectedItems);
  const [selectedItems, setSelectedItems] = useState({
    weapon: null,
    armor: null,
    relic: null,
    utility: null,
  });

  useEffect(() => {
    const duration = 6000;
    const intervalTime = 1000;
    const increment = 1000 / (duration / intervalTime);

    const interval = setInterval(() => {
      setLoadingComplete((prev) => {
        if (prev + increment >= 1000) {
          clearInterval(interval);
          return 1000;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [beginChoose]);

  useEffect(() => {
    const prevItems = prevItemsRef.current;

    Object.keys(selectedItems).forEach((category) => {
      const prevItem = prevItems[category];
      const nextItem = selectedItems[category];

      if (prevItem?.id === nextItem?.id) return;

      setPlayerStats((stats) => {
        const updated = { ...stats };

        if (prevItem) {
          Object.entries(prevItem.stats).forEach(([stat, value]) => {
            updated[stat] -= value;
          });
        }

        if (nextItem) {
          Object.entries(nextItem.stats).forEach(([stat, value]) => {
            updated[stat] += value;
          });
        }

        return updated;
      });
    });

    prevItemsRef.current = selectedItems;
  }, [selectedItems, setPlayerStats]);

  useEffect(() => {
    audioRef.current = new Audio(itemMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const selectItem = (item) => {
    setSelectedItems((prev) => {
      const previousItem = prev[item.category];
      const isRemoving = previousItem?.id === item.id;

      return {
        ...prev,
        [item.category]: isRemoving ? null : item,
      };
    });
  };
  const isReady = Object.values(selectedItems).every(Boolean);

  useEffect(() => {
    if (beginChoose) {
      const timer = setTimeout(() => setLoadingComplete(true), 7000);
      return () => clearTimeout(timer);
    }
  }, [beginChoose]);

  return (
    <div className="items-screen">
      {!beginChoose && (
        <div className="intro-overlay">
          <h1 className="character-plead item-plead">
            Welcome brave {character.title}! The journey is only just beginning.
            Equip yourself wisely for the challenges ahead.
          </h1>
          <button
            className="begin-btn item-btn"
            onClick={() => {
              setMusicOn(true);
              setItemSelectPage(true);
              setBeginChoose(true);
              setLoadingComplete(false);
            }}
          >
            Choose Starting Items
          </button>
        </div>
      )}

      {beginChoose && (
        <div className="item-selection">
          {!loadingComplete && (
            <div className="loading-item-overlay">
              <h1 className="loading-item-title">Loading items...</h1>
            </div>
          )}
          <h1 className="title items-title">Starting Items</h1>

          {Object.entries(ITEMS).map(([category, items]) => (
            <ItemCategory
              key={category}
              title={category.toUpperCase()}
              category={category}
              items={items}
              selectedItem={selectedItems[category]}
              onSelect={selectItem}
            />
          ))}

          <button
            onClick={() => setMusicOn((prev) => !prev)}
            className={`music-btn ${theme}`}
          >
            {musicOn ? <TbMusic /> : <TbMusicOff />}
          </button>
          <div className="selection-button-container">
            <button
              className={`char-back-btn ready-btn able`}
              onClick={() => {
                setPlayerStats(null);
                setItemSelectPage(false);
                onBack();
              }}
            >
              Back
            </button>

            <button
              className={`ready-btn ${!isReady ? "disabled" : "able"}`}
              disabled={!isReady}
              onClick={() => {
                setItemSelectPage(false);
                onConfirm();
              }}
            >
              Ready for Battle
            </button>
          </div>
        </div>
      )}

      {playerStats && itemSelectPage && <StatsBar stats={playerStats} />}
    </div>
  );
}
