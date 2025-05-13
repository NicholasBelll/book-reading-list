# Personal Dev Notes: Book Reading List

## Project Purpose
Practice project for learning Next.js (App Router) and Redux Toolkit. Main goal: manage a reading list (add, update, mark as read, notes, rating).

## Assignment Requirements & Features (2025)

### Redux Global State
- **Books**: Managed in `features/books/booksSlice.js` (add, remove, update, toggle read, notes, rating).
- **Notifications**: Managed in `features/notifications/notificationsSlice.js` (show/dismiss messages for user actions).

### Components Using Redux
- **BookList, BookItem**: Read from and dispatch actions to the books slice.
- **NotificationBanner**: Reads notifications and dispatches removeNotification.

### Local State
- **BookForm**: Uses `useState` for form input handling before dispatching Redux actions.

### Provider Setup
- App is wrapped in `<Provider>` with the Redux store in `src/app/Provider.js` and used in `layout.js`.

### Routing
- **/reading-list**: Main reading list page.
- **/book/[id]**: Dynamic route for individual book details.

## Folder/File Explanations

### Root
- **eslint.config.mjs**: ESLint config for linting JS/React code.
- **jsconfig.json**: JS project config, helps VSCode/Next.js with path aliases.
- **next.config.mjs**: Next.js config (custom settings, if needed).
- **package.json**: Project dependencies and scripts.
- **postcss.config.mjs**: PostCSS config for CSS processing (used by Next.js).
- **README.md**: (This file) Personal notes on project structure and reasoning.

### public/
- **SVGs**: Used for UI icons/logos.

### src/app/
- **favicon.ico, globals.css**: App-wide assets/styles.
- **layout.js**: App shell/layout, wraps all pages.
- **page.js**: Home page (could be a landing or redirect).
- **Provider.js**: Wraps app in Redux Provider (so all pages/components can access store).
- **store.js**: Configures Redux store, imports booksSlice.

#### app/reading-list/page.js
- Main reading list UI. Lists books, allows add/remove/toggle.

#### app/book/[id]/page.js
- Dynamic route for individual book details (notes, rating, etc).

### src/features/books/
- **booksSlice.js**: Redux slice for books state. Handles add, remove, toggle, update details, rating. Central logic for book data.
- **BookForm.js**: Form UI for adding a new book.
- **BookItem.js**: Renders a single book in the list, with actions (toggle, remove, etc).
- **BookList.js**: Renders the list of all books, maps over BookItem.

### src/features/notifications/
- **notificationsSlice.js**: Redux slice for notifications state.
- **NotificationBanner.js**: Shows notifications and allows dismissing them.

## Design/Reasoning
- **Redux Toolkit**: Used for simple, predictable state management. booksSlice keeps all book logic in one place.
- **App Router (Next.js)**: Each page is a folder. Dynamic routing for book details.
- **Component Structure**: Split into small, focused components (form, item, list) for clarity and reusability.
- **Notes Count**: Track how many times notes/details are updated (for practice with derived state).
- **nanoid**: Used for unique book IDs.

## To Do / Ideas
- Add persistent storage (localStorage or backend)
- Add filtering/sorting
- Add user authentication

---
This file is just for me. Not meant for public consumption.
