export default function Game({ gender }: { gender: 'male' | 'female' }) {
  return (
    <div className="w-full h-screen bg-green-200 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Halo, {gender === 'male' ? 'Chef Pria' : 'Chef Wanita'}!</h1>
      <p className="mt-2">Ini adalah dunia pixel tempatmu memasak, menjelajah, dan bertemu NPC.</p>
      <p className="mt-4">🎮 [Gameplay scene akan dikembangkan di sini]</p>
    </div>
  );
}