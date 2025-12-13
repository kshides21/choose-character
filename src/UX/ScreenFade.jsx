import { useEffect, useState } from "react";
import "./ScreenFade.css";

export default function ScreenFade({ children, active }) {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) setVisible(true);
    else {
      const timeout = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  return (
    <div className={`screen-fade ${active ? "fade-in" : "fade-out"}`}>
      {visible && children}
    </div>
  );
}
