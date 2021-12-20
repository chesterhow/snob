import { AppColors } from '../constants/Colors';

export const getColor = (color: Notion.Color | undefined) => {
  if (!color) {
    return AppColors.default;
  }

  return AppColors[color];
};
