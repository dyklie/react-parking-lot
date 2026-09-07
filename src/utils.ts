import type { Spot } from './types';

export const calculateInitialRevenue = (spots: Spot[], cost: number) =>
  spots.reduce((acc, spot) => acc + (spot.isParked ? cost : 0), 0);
