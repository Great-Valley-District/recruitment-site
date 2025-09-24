// Great Valley District Scouts - Official Scouting America Brand Colors
// Based on Scouting America Brand Guidelines (310-0231.pdf)

// Official Scouting America brand color values
export const colorValues = {
  // Scouts BSA Brand Colors
  scoutsBsa: {
    olive: '#243E2C',      // Scouts BSA Olive (primary)
    tan: '#D6CEBD',        // Scouting Tan (secondary)
    red: '#CE1126',        // Scouting Red (accent)
    // Generated tints and shades for web use
    50: '#f8f7f6',         // Very light tan
    100: '#f0ede7',        // Light tan
    200: '#e8e2d5',        // Tan tint
    300: '#d6cebd',        // Official Scouting Tan
    400: '#c4b6a1',        // Darker tan
    500: '#b29e85',        // Medium tan
    600: '#9d8a6b',        // Dark tan
    700: '#7a674f',        // Very dark tan
    800: '#5c4d39',        // Deep brown
    900: '#3d3426',        // Deepest brown
    oliveDark: '#1a2e1f',  // Darker olive
    oliveLight: '#4a6854', // Lighter olive
  },

  // Cub Scouting Brand Colors
  cubScouts: {
    gold: '#FDC116',       // Cub Scouting Gold (primary)
    blue: '#003F87',       // Scouting Blue (secondary)
    // Generated tints and shades for web use
    50: '#fffdf0',         // Very light gold
    100: '#fffadb',        // Light gold
    200: '#fff4b8',        // Gold tint
    300: '#fdc116',        // Official Cub Scouting Gold
    400: '#e5ad00',        // Darker gold
    500: '#cc9900',        // Medium gold
    600: '#b38500',        // Dark gold
    700: '#996b00',        // Very dark gold
    800: '#805100',        // Deep amber
    900: '#663700',        // Deepest amber
    blueDark: '#002951',   // Darker blue
    blueLight: '#3366a8',  // Lighter blue
  },

  // Corporate Brand Colors (Scouting America)
  corporate: {
    red: '#CE1126',        // Scouting Red
    blue: '#003F87',       // Scouting Blue
    gray: '#53565A',       // Scouting Gray
    tan: '#D6CEBD',        // Scouting Tan
  },

  // Neutral Color - Stone Gray (Text, Backgrounds)
  neutral: {
    50: '#fafaf9',   // stone-50
    100: '#f5f5f4',  // stone-100
    200: '#e7e5e4',  // stone-200
    300: '#d6d3d1',  // stone-300
    400: '#a8a29e',  // stone-400
    500: '#78716c',  // stone-500
    600: '#57534e',  // stone-600
    700: '#44403c',  // stone-700
    800: '#292524',  // stone-800
    900: '#1c1917',  // stone-900
  },

  // Status colors
  danger: {
    50: '#fef2f2',   // red-50
    100: '#fee2e2',  // red-100
    600: '#dc2626',  // red-600
    700: '#b91c1c',  // red-700
    800: '#991b1b',  // red-800
  },
  success: {
    50: '#f0fdf4',   // green-50
    600: '#16a34a',  // green-600
    700: '#15803d',  // green-700
  },
} as const;

// Official Scouting America brand colors for web use
export const colors = {
  // Scouts BSA Program Colors
  scoutsBsa: {
    olive: 'scouts-bsa-olive',
    oliveDark: 'scouts-bsa-olive-dark',
    oliveLight: 'scouts-bsa-olive-light',
    tan: 'scouts-bsa-tan',
    red: 'scouts-bsa-red',
    50: 'scouts-bsa-50',
    100: 'scouts-bsa-100',
    200: 'scouts-bsa-200',
    300: 'scouts-bsa-300',
    400: 'scouts-bsa-400',
    500: 'scouts-bsa-500',
    600: 'scouts-bsa-600',
    700: 'scouts-bsa-700',
    800: 'scouts-bsa-800',
    900: 'scouts-bsa-900',
  },

  // Cub Scouts Program Colors
  cubScouts: {
    gold: 'cub-scouts-gold',
    blue: 'cub-scouts-blue',
    blueDark: 'cub-scouts-blue-dark',
    blueLight: 'cub-scouts-blue-light',
    50: 'cub-scouts-50',
    100: 'cub-scouts-100',
    200: 'cub-scouts-200',
    300: 'cub-scouts-300',
    400: 'cub-scouts-400',
    500: 'cub-scouts-500',
    600: 'cub-scouts-600',
    700: 'cub-scouts-700',
    800: 'cub-scouts-800',
    900: 'cub-scouts-900',
  },

  // Corporate Scouting America Colors
  corporate: {
    red: 'scouting-red',
    blue: 'scouting-blue',
    gray: 'scouting-gray',
    tan: 'scouting-tan',
  },

  // Neutral Color - Stone Gray (Text, Backgrounds)
  neutral: {
    50: 'stone-50',
    100: 'stone-100',
    200: 'stone-200',
    300: 'stone-300',
    400: 'stone-400',
    500: 'stone-500',
    600: 'stone-600',
    700: 'stone-700',
    800: 'stone-800',
    900: 'stone-900',
  },
} as const;

// Semantic color mappings using official Scouting America brand colors
export const semanticColors = {
  // Page backgrounds - using brand-compliant colors
  background: {
    scoutsBsa: colors.scoutsBsa[50],
    cubScouts: colors.cubScouts[50],
    primary: colors.scoutsBsa[100],
    secondary: colors.cubScouts[100],
    neutral: colors.neutral[50],
  },

  // Text colors - following brand guidelines typography
  text: {
    primary: colors.neutral[800],
    secondary: colors.neutral[700],
    muted: colors.neutral[600],
    heading: colors.neutral[800], // Consistent heading color per CLAUDE.md
    scoutsBsaHeading: colors.scoutsBsa.olive,
    cubScoutsHeading: colors.cubScouts.blue,
  },

  // Buttons and interactive elements - using brand colors
  button: {
    scoutsBsa: {
      bg: colors.scoutsBsa.olive,
      hover: colors.scoutsBsa.oliveDark,
      text: 'white',
    },
    cubScouts: {
      bg: colors.cubScouts.blue,
      hover: colors.cubScouts.blueDark,
      text: 'white',
    },
    scoutsBsaTan: {
      bg: colors.scoutsBsa.tan,
      hover: colors.scoutsBsa[600],
      text: colors.scoutsBsa.olive,
    },
    cubScoutsGold: {
      bg: colors.cubScouts.gold,
      hover: colors.cubScouts[600],
      text: colors.cubScouts.blue,
    },
    primary: {
      bg: colors.scoutsBsa.olive,
      hover: colors.scoutsBsa.oliveDark,
      text: 'white',
    },
    outline: {
      border: colors.scoutsBsa.olive,
      text: colors.scoutsBsa.olive,
      hover: {
        bg: colors.scoutsBsa.olive,
        text: 'white',
      },
    },
  },

  // Borders and dividers
  border: {
    light: colors.neutral[200],
    default: colors.neutral[300],
    dark: colors.neutral[400],
  },

  // Status colors (using brand palette)
  success: colors.scoutsBsa.olive,
  warning: colors.cubScouts.gold,
  info: colors.cubScouts.blue,
  danger: colors.corporate.red,

  // Navigation - using brand colors
  nav: {
    bg: 'white',
    border: colors.neutral[200],
    text: colors.neutral[700],
    textHover: colors.scoutsBsa.olive,
    textActive: colors.scoutsBsa.olive,
    bgActive: colors.scoutsBsa[50],
  },

  // Program-specific color schemes
  programs: {
    scoutsBsa: {
      primary: colors.scoutsBsa.olive,
      secondary: colors.scoutsBsa.tan,
      accent: colors.scoutsBsa.red,
      background: colors.scoutsBsa[50],
      lightBg: colors.scoutsBsa[100],
    },
    cubScouts: {
      primary: colors.cubScouts.blue,
      secondary: colors.cubScouts.gold,
      background: colors.cubScouts[50],
      lightBg: colors.cubScouts[100],
    },
    mixed: {
      primary: colors.corporate.blue,
      secondary: colors.corporate.tan,
      accent: colors.corporate.red,
      background: 'bg-gradient-to-r from-scouts-bsa-50 to-cub-scouts-50',
    },
  },
};

// Helper function to get Tailwind classes
export const tw = {
  bg: (color: string) => `bg-${color}`,
  text: (color: string) => `text-${color}`,
  border: (color: string) => `border-${color}`,
  hover: {
    bg: (color: string) => `hover:bg-${color}`,
    text: (color: string) => `hover:text-${color}`,
  },
  gradient: (from: string, to: string) => `bg-gradient-to-b from-${from} to-${to}`,
};

// Helper function to get actual color values
export const getColorValue = (colorPath: string): string => {
  const [palette, shade] = colorPath.split('-');
  const paletteObj = colorValues[palette as keyof typeof colorValues];
  if (!paletteObj) return '';
  return (paletteObj as Record<string, string>)[shade] || '';
};

// Brand-compliant gradients using official Scouting America colors
export const gradients = {
  // Main page gradient - dual program support
  page: 'from-scouts-bsa-50 to-cub-scouts-50',

  // Program-specific gradients
  scoutsBsa: 'from-scouts-bsa-50 to-scouts-bsa-100',
  cubScouts: 'from-cub-scouts-50 to-cub-scouts-100',

  // Mixed program gradients for district-wide content
  mixed: 'from-scouts-bsa-50 via-scouting-tan to-cub-scouts-50',
  hero: 'from-scouts-bsa-olive to-cub-scouts-blue',
  adventure: 'from-scouts-bsa-olive-light to-scouts-bsa-olive',

  // Legacy support (updated to brand colors)
  primary: 'from-scouts-bsa-50 to-cub-scouts-50',
  secondary: 'from-cub-scouts-50 to-scouts-bsa-50',
  nature: 'from-scouts-bsa-olive to-scouts-bsa-olive-light',
};

// Export the complete theme configuration
export const theme = {
  colors: colorValues,
  tailwindClasses: colors,
  semanticColors,
  gradients,
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
};