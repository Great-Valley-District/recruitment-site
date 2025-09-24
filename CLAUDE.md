# Great Valley District Scouts - Development Guidelines

## Color Consistency Standards

### Typography Colors
- **All headings (h1, h2, h3, h4)**: Use `text-gray-800` for consistency
- **Body text**: Use `text-gray-700` for main content
- **Muted text**: Use `text-gray-600` for secondary information
- **Light text on dark backgrounds**: Use `text-white` or specific light variants

### Brand Colors (from /src/config/colors.ts)
- **Primary**: Emerald green (`emerald-*`) for main CTAs and primary elements
- **Secondary**: Sky blue (`sky-*`) for secondary actions and accents
- **Accent**: Amber (`amber-*`) for highlights and special elements
- **Neutral**: Gray (`gray-*`) for text and backgrounds

### Background Colors
- **Page backgrounds**: Use `gradients.page` from config (`from-emerald-50 to-sky-50`)
- **Card backgrounds**: Use `bg-white` for cards and content sections
- **Accent backgrounds**: Use light tints (`emerald-50`, `sky-50`, `amber-50`) for sections

### Avoid
- ❌ Randomly changing heading colors (purple-800, green-800, etc.)
- ❌ Using too many different color variants in one design
- ❌ Hard-to-read color combinations

### Icon Colors
- Use semantic colors that match the content context
- Prefer emerald, sky, and amber variants
- Keep consistent within sections

## Testing Commands
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Type check**: `npm run type-check` (if available)

## Site Structure
- All pages include Navigation component
- Consistent gradient backgrounds using `gradients.page`
- Icons use the Icon component from `/src/components/Icon.tsx`
- Colors managed through `/src/config/colors.ts`

## Brand Information
- **Organization**: Great Valley District (part of Scouting America)
- **Focus**: Adventure, leadership, character development for youth ages 5-17
- **Location**: Virginia's Blue Ridge Mountains
- **Key Facility**: Blue Ridge Scout Reservation (BRSR) - 16,000 acres