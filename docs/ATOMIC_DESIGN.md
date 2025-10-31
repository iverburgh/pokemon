# Component Architecture - Atomic Design

This project follows the **Atomic Design** methodology for organizing components. This creates a clear hierarchy from simple to complex components, making the codebase more maintainable and scalable.

## Folder Structure

```
src/components/
├── atoms/           # Basic building blocks
├── molecules/       # Simple combinations of atoms
├── organisms/       # Complex, reusable components
├── templates/       # Page-level layouts
└── ui/             # shadcn/ui primitives (Atom level)
```

## Component Categories

### 🔹 Atoms (`/atoms`)
**Basic building blocks with no dependencies on other components.**

- `AppLink` - Wrapper around Next.js Link
- `CardBanner` - Small badge/banner element for cards
- `ImageWithFallback` - Image component with error handling
- `PageTitle` - Page title text component
- `Pokeball` - SVG Pokéball icon
- `SubsectionTitle` - Subsection title text component
- `TypeIcon` - Icon for Pokemon type badges

**When to create an atom:**
- Component has minimal to no dependencies
- Performs a single, simple function
- Can be reused across many contexts
- Examples: buttons, icons, labels, inputs

### 🔸 Molecules (`/molecules`)
**Simple combinations of atoms that form functional units.**

- `SlimPokemonCard` - Compact Pokemon card display
- `TypeBadge` - Pokemon type badge (uses `TypeIcon`)

**When to create a molecule:**
- Combines 2-3 atoms
- Has a specific, focused purpose
- Still highly reusable
- Examples: search bars, card headers, form fields

### 🔶 Organisms (`/organisms`)
**Complex, reusable components with specific functionality.**

- `CardCarousel` - Dialog with carousel functionality for TCG cards
- `DetailSection` - Content section layout with title
- `PokeCard` - Full Pokemon card (uses `ImageWithFallback`, `TypeBadge`, `CardBanner`, `AppLink`)
- `PokeListPagination` - Pagination navigation component

**When to create an organism:**
- Combines multiple molecules and/or atoms
- Has complex internal logic
- Represents a distinct UI section
- Still reusable across different contexts
- Examples: navigation menus, complex cards, data tables

### 📄 Templates (`/templates`)
**Page-level layouts that compose organisms.**

- `Header` - Main navigation header with search
- `PokemonListPage` - Pokemon list layout template

**When to create a template:**
- Defines page layout structure
- Composes multiple organisms
- Provides consistent layouts across pages
- Examples: page layouts, section layouts, grid systems

### 🎨 UI Components (`/ui`)
**shadcn/ui primitive components (treated as atoms).**

All shadcn/ui components like Button, Dialog, Card, Carousel, etc.

## Import Patterns

### ✅ Recommended: Use Barrel Exports

```typescript
// Import from category index
import { AppLink, Pokeball, TypeIcon } from '@/components/atoms';
import { TypeBadge, SlimPokemonCard } from '@/components/molecules';
import { PokeCard, DetailSection } from '@/components/organisms';
import { Header, PokemonListPage } from '@/components/templates';

// Or import everything from main index
import { AppLink, TypeBadge, PokeCard, Header } from '@/components';
```

### ✅ Also Valid: Direct Imports

```typescript
// Import from specific file
import { PokeCard } from '@/components/organisms/PokeCard';
import { TypeBadge } from '@/components/molecules/TypeBadge';
```

## Dependency Rules

Components should only import from their own level or below:

```
Templates  →  Can import: Organisms, Molecules, Atoms, UI
    ↓
Organisms  →  Can import: Molecules, Atoms, UI
    ↓
Molecules  →  Can import: Atoms, UI
    ↓
Atoms      →  Can import: UI only (no other components)
    ↓
UI         →  Pure primitives (no imports from other component categories)
```

## Adding New Components

### 1. Determine the Level

Ask yourself:
1. Does it have dependencies on other components?
   - **No** → Atom
   - **Yes** → Continue...
2. Does it combine 2-3 simple components?
   - **Yes** → Molecule
   - **No** → Continue...
3. Is it a complex, reusable section with multiple parts?
   - **Yes** → Organism
   - **No** → Continue...
4. Is it a full page layout?
   - **Yes** → Template

### 2. Create the Component

Place it in the appropriate folder:
```
src/components/{level}/{ComponentName}.tsx
```

### 3. Export from Index

Add to the category index file:
```typescript
// src/components/{level}/index.ts
export { YourNewComponent } from './YourNewComponent';
```

### 4. Create Storybook Stories (Optional but Recommended)

```typescript
// src/stories/YourNewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { YourNewComponent } from '@/components/{level}/YourNewComponent';

const meta = {
  title: 'Components/{Level}/YourNewComponent',
  component: YourNewComponent,
  // ... story configuration
} satisfies Meta<typeof YourNewComponent>;

export default meta;
```

## Benefits of This Structure

✅ **Clear Hierarchy** - Easy to understand component relationships
✅ **Improved Reusability** - Components are organized by complexity
✅ **Better Testing** - Test atoms first, then build up
✅ **Easier Onboarding** - New developers understand the structure quickly
✅ **Scalability** - Easy to add new components without confusion
✅ **Design System Alignment** - Matches design thinking patterns

## Migration Notes

All component imports have been updated to use the new atomic design structure. If you encounter any import errors:

1. Check the component category (atoms/molecules/organisms/templates)
2. Update the import path accordingly
3. Use barrel exports from category index files for cleaner imports

## References

- [Atomic Design Methodology by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/)
