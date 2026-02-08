# React Todo List App

A modern, responsive todo app built with React and Material UI. Create tasks, edit details, mark them complete, and keep everything saved in `localStorage` with a light/dark theme toggle.

<p align="center">
  <a href="https://www.linkedin.com/in/bilalabdulhadii/"><img src="https://img.shields.io/badge/Chat-Let's%20chat-darkseagreen?labelColor=gray&style=flat" alt="Chat" /></a>
  <a href="https://www.buymeacoffee.com/bilalabdulhadii"><img src="https://img.shields.io/badge/Donate%20$-Buy%20me%20a%20coffee-darkkhaki?labelColor=gray&style=flat" alt="Donate" /></a>
  <a href="https://github.com/bilalabdulhadii"><img src="https://img.shields.io/badge/Coding-Work%20Together-cornflowerblue?labelColor=gray&style=flat" alt="Coding" /></a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#notes">Notes</a> •
  <a href="#support">Support</a>
</p>

---

## Features

- Add tasks with a title (description can be added/edited)
- Update task title and description via a modern dialog
- Delete tasks with confirmation
- Mark tasks complete or active
- Filter by All, Active, or Completed
- Light and dark theme toggle
- Toast notifications for actions
- Persistent storage via `localStorage`
- Responsive layout with MUI components

---

## Tech Stack

- React 19
- Material UI (MUI) + Emotion
- Context API + `useReducer`
- `uuid` for task IDs
- `localStorage` persistence
- Create React App (`react-scripts`)

---

## Project Structure

```
src/
  components/        UI building blocks (Navbar, TodoCard, dialogs, etc.)
  contexts/          Toast + Todos context providers
  reducers/          Todos reducer (add/update/delete/complete)
  theme.js           Light/Dark MUI theme
  App.js             App shell and providers
public/
  manifest.json      PWA metadata
  logo*.png/svg      App icons
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Run tests
npm test

# Build for production
npm run build
```

---

## Notes

- Todos are stored in `localStorage` under the `todos` key.
- Theme preference is stored in `localStorage` under the `theme` key.
- The app seeds a default welcome task on first load.

---

## Support

<p><a href="https://www.buymeacoffee.com/bilalabdulhadii"><img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="Buy me a coffee" /></a></p><br><br>

---

WebSite [@bilalabdulhadi.com](https://bilalabdulhadi.com/) · GitHub [@bilalabdulhadii](https://github.com/bilalabdulhadii) · Linkedin [@bilalabdulhadii](https://www.linkedin.com/in/bilalabdulhadii/)
