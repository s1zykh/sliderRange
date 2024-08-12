export const getPositionPercentage = (
  value: number,
  min: number,
  max: number,
  isInverted: boolean = false
) => {
  if (isInverted) {
    return `${((max - value) / (max - min)) * 100}%`;
  }
  return `${((value - min) / (max - min)) * 100}%`;
};
