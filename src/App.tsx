import { useState } from 'react';

import { PARKING_LOT, PARKING_SPOT_COST } from './constants';
import { calculateInitialRevenue } from './utils';

import styles from './styles.module.css';

const App = () => {
  const [parkingLot, setParkingLot] = useState(PARKING_LOT);
  const [revenue, setRevenue] = useState(() =>
    calculateInitialRevenue(parkingLot, PARKING_SPOT_COST),
  );

  const toggleSpot = (id: string, isParked: boolean) => {
    setParkingLot((prev) =>
      prev.map((spot) =>
        spot.id === id ? { ...spot, isParked: !spot.isParked } : spot,
      ),
    );

    if (!isParked) {
      setRevenue((prev) => prev + PARKING_SPOT_COST);
    }
  };

  return (
    <div className={styles.parkingLot}>
      <h1>Price: {PARKING_SPOT_COST} $</h1>
      <h2>Revenue: {revenue} $</h2>

      <div className={styles.spotLayout}>
        {parkingLot.map(({ id, isParked }, index) => (
          <button
            key={id}
            className={styles.spot}
            type="button"
            onClick={() => toggleSpot(id, isParked)}
          >
            <span>Spot {index + 1}:</span>{' '}
            <span
              className={
                isParked ? styles.spotClosedStatus : styles.spotOpenStatus
              }
            >
              {isParked ? 'Closed' : 'Open'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
