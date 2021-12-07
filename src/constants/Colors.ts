export const NotionColors = {
  default: 'default' as const,
  gray: 'gray' as const,
  brown: 'brown' as const,
  orange: 'orange' as const,
  yellow: 'yellow' as const,
  green: 'green' as const,
  blue: 'blue' as const,
  purple: 'purple' as const,
  pink: 'pink' as const,
  red: 'red' as const,
};

export const AppColors = {
  [NotionColors.default]: 'hsl(60, 5%, 70%)',
  [NotionColors.gray]: 'hsl(60, 5%, 50%)',
  [NotionColors.brown]: 'hsl(30, 30%, 50%)',
  [NotionColors.orange]: 'hsl(25, 80%, 60%)',
  [NotionColors.yellow]: 'hsl(43, 80%, 60%)',
  [NotionColors.green]: 'hsl(100, 55%, 60%)',
  [NotionColors.blue]: 'hsl(210, 80%, 60%)',
  [NotionColors.purple]: 'hsl(270, 50%, 60%)',
  [NotionColors.pink]: 'hsl(320, 60%, 60%)',
  [NotionColors.red]: 'hsl(0, 60%, 60%)',
};
