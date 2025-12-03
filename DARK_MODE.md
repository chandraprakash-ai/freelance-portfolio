# Dark Mode Implementation

## Features Added
- **Theme Toggle Button**: Sun/Moon icon button in header (both desktop and mobile)
- **Smooth Transitions**: 300ms color transitions between themes
- **System Preference Support**: Respects user's OS dark mode preference
- **Persistent Theme**: Theme choice saved in localStorage

## Components Updated
1. **Header**: Dark mode toggle + all text/background colors
2. **Hero**: Background gradients, text, buttons, and badge
3. **Services**: Section background, cards, text, and add-ons

## Color Scheme
- **Light Mode**: Beige backgrounds, charcoal text
- **Dark Mode**: Gray-900 backgrounds, white/gray-100 text
- **Accent**: Green color consistent across both themes

## Technical Details
- Uses `next-themes` for theme management
- Tailwind's `dark:` variant for styling
- `suppressHydrationWarning` to prevent flash
- Client-side only rendering for toggle button
