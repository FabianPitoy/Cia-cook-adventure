import { useState } from 'react';
import GenderSelection from './GenderSelection';
import Game from './Game';

export default function StartScreen() {
  const [start, setStart] = useState(false);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  if (!start) return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">🍳 Pixel Cook Adventure</h1>
      <button className="bg-green-600 px-6 py-2 rounded" onClick={() => setStart(true)}>Start Game</button>
    </div>
  );

  if (!gender) return <GenderSelection onSelect={setGender} />;

  return <Game gender={gender} />;
}