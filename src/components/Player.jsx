import { useRef, useState } from "react";

export default function Player() {
  const PLayerName = useRef();
  const [EnteredPlayerName, setPlayerName] = useState(null);
  function HandleClick() {
    setPlayerName(PLayerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {EnteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={PLayerName} />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
