import { useState } from "react";
import "./ItemSelect.css";
import { ITEMS } from "../data/items";

function ItemCategory({ title, category, items, selectedItem, onSelect }) {
  return (
    <section className="item-category">
      <h2>{title}</h2>

      <div className="item-row">
        {items.map((item) => (
          <div
            key={item.id}
            className={`item-card ${
              selectedItem?.id === item.id ? "selected" : ""
            }`}
            onClick={() => onSelect(item)}
          >
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ItemSelect({ character, onConfirm }) {
  const [selectedItems, setSelectedItems] = useState({
    weapon: null,
    armor: null,
    relic: null,
    utility: null,
  });

  const selectItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.category]: prev[item.category]?.id === item.id ? null : item,
    }));
  };

  const finalStats = Object.values(selectedItems)
    .filter(Boolean)
    .reduce(
      (acc, item) => {
        Object.entries(item.stats).forEach(([key, value]) => {
          acc[key] = (acc[key] ?? 0) + value;
        });
        return acc;
      },
      { ...character.stats }
    );

  const isReady = Object.values(selectedItems).every(Boolean);

  return (
    <div className="items-screen">
      <h1 className="title">Choose Your Starting Items</h1>

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

      <StatsBar
        finalStats={finalStats}
        isReady={isReady}
        onConfirm={onConfirm}
      />
    </div>
  );
}

function StatsBar({ finalStats, isReady, onConfirm }) {
  return (
    <div className="stats-bar">
      <div className="stats">
        {Object.entries(finalStats).map(([stat, value]) => (
          <div key={stat}>
            {stat.toUpperCase()}: {value}
          </div>
        ))}
      </div>

      <button className="ready-btn" disabled={!isReady} onClick={onConfirm}>
        Ready for Battle
      </button>
    </div>
  );
}
