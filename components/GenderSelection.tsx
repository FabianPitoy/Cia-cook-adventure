export default function GenderSelection({ onSelect }: { onSelect: (g: 'male' | 'female') => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl mb-4">Pilih Gender</h2>
      <div className="space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => onSelect('male')}>👦 Laki-laki</button>
        <button className="bg-pink-500 px-4 py-2 rounded" onClick={() => onSelect('female')}>👧 Perempuan</button>
      </div>
    </div>
  );
}