import Star from '../components/svg/Star';
import GoBack from '../components/svg/GoBack';
export const icons = {
  start: Star,
  goBack: GoBack,
};

export type IconNames = keyof typeof icons;
