export const PARKING_LOT = Array.from({ length: 6 }, (_, index) => ({
  id: `spot-${index + 1}`,
  isParked: false,
}));

export const PARKING_SPOT_COST = 20;
