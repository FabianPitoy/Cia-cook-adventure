import { useState } from 'react';
import GameMain from './GameMain';

export default function StartScreen() {
  const [start, setStart] = useState(false);

  return start ? <GameMain /> : (
    <div className="start-screen">
      <h1>🍳 Cooking Village RPG</h1>
      <button onClick={() => setStart(true)}>Start Game</button>
    </div>
  );
}