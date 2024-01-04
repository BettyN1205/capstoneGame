# The Riddle Gate

## Overview

The Abyss Gate is a web escape game designed for mystery and puzzle enthusiasts.

### Problem

The game features a compelling plot and puzzles inspired by well-known detective mystery novels. It engages players in the process of finding clues and solving puzzles, providing an immersive experience in the world of detective novels. The game includes levels that require collaboration between two players, promoting teamwork skills.

### User Profile

Everyone who is interested in mystery and detective novels.

### Features

1. Storytelling page with animation but text-style as the game.
2. Users can start the game directly without logging in, using Local Storage to record game progress.
3. If a player exits without completing a level, they start the level from scratch the next time they open the page.
4. Clues are provided in the form of sound.
5. Players need to move elements on the page to decrypt them (e.g., moving the key to the lock to open the door).
6. Players can choose to turn off background music.

## Implementation

### Tech Stack

- **Front-end Development:**
  - React
  - HTML/CSS/JavaScript

- **Game Logic and Decryption Algorithms:**
  - JavaScript

- **Animation Effects:**
  - CSS animations or animation libraries (e.g., Animate.css)

- **State Management:**
  - Redux, axios, etc.

- **Version Control:**
  - Git/GitHub

- **Backend Services (Optional):**
  - Node.js, Express

- **Optional:**
  - Text Decryption Algorithm Library

### APIs

- The Movie Database (TMDb) API
- Open Library API

### Sitemap

- Open page
- Game menu
- Levels
  - Level 1
  - Level 2

### Mockups

![Mockup 1](./1.png)
![Mockup 2](./2.png)
![Mockup 3](./3.png)
![Mockup 4](./4.png)

### Endpoints

- GET /movies/:id
- GET /books/:id

### Auth

Just a token.

## Roadmap

### Sprint 1 

- Set up the project structure using React.
- Create the initial pages: open page and game menu.
- Design the basic layout and styling for the game interface.

### Sprint 2 

- Implement the storytelling page with animation effects and text-style game elements.
- Develop the levels for the game, including puzzles inspired by detective mystery novels.
- Integrate sound clues into the game for a more immersive experience.

### Sprint 3 

- Implement the local storage functionality to record and retrieve user game progress.
- Add the feature that requires two players to collaborate on solving puzzles and completing missions.
- Fine-tune the game's overall user experience and fix any bugs.

## Nice-to-haves

1. **Enhanced Sound Features:**
   - Integrate additional sound effects and background music options for players to choose from.
     
2. **Game Settings:**
   - Provide options for players to customize game settings, such as difficulty levels and animation speed.

3. **Responsive Design:**
   - Ensure the game is fully responsive on different devices for a seamless experience.

4. **Advanced Animation Effects:**
   - Explore and implement more advanced animation effects to enhance the visual appeal of the game.

5. **Additional Levels and Stories:**
   - Develop additional levels and expand the storyline to provide players with more content.

6. **Social Sharing:**
   - Allow users to share their progress or achievements on social media platforms.

