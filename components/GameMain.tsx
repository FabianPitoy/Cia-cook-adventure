import CookingHUD from './hud/CookingHUD';
import VillageMap from './map/VillageMap';

export default function GameMain() {
  return (
    <div className="game-main">
      <VillageMap />
      <CookingHUD />
    </div>
  );
}