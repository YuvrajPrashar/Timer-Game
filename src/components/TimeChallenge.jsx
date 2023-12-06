import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function ({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [remainingTime, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaing) => {
        return prevTimeRemaing - 10;
      });
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "'s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
