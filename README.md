# Operational notes
- Change pg-promise version to make database connection functional
- Add SSL support for the Express.js app
- Copy the SSL files cert.pem and privkey.pem to this directory
- Start PostgreSQL container [docker-cmd.sh](docker-cmd.sh)
- Perform database migration [migratedb.sh](migratedb.sh)
- Start the game by `pm2 start app.js` to run the game at port 3443
- Use apache2 to redirect to port 443
- Deployed the game at [https://hearts.yijietang.dev](https://hearts.yijietang.dev)

# Game feature notes
- Fix the broken hearts logic
- Add the "no-score-at-first-round" rule
- Show ace to the right of king to reflect card order
- Show hearts to the right of spades to separate from diamond
- Play sound for queen of spades and hearts broken
- Highlight the cards passed from other players
- Indicate the card pass direction and round number

------------------------------------

# README file from the original authors
# Hearts Game
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

Rohan Patel, Jake Carter, Richard Robinson, Guanming Pan

## Introduction

This is a real-time, multiplayer, online application to play the popular card game of Hearts. The game supports 2 and 4 player game rooms.

## Features

- Registration (with encrypted passwords)
- Login / Logout (with sessions)
- Lobby page: contains a lobby chat, list of current games, options to create a game, join an already made game that is not full, observe a game, and rejoin a game.
- The application supports an arbitrary (infinite) number of concurrent games, and a given player can participate in multiple games (in different tabs).
- Game rooms have their own dedicated game chats.
- Game rooms also allow users to join in as observers to just watch the ongoing game.
- Game rooms also contain a nudge button that ends the game on a 30 second timer if no action is taken by an opposing player.
- Game state is persisted in the database. If a user closes a tab, and reconnects to the game, the game will be reloaded for that user.
- Game state is updated in real time in response to user events and interaction with the game using Socket.IO
- All the logic of the standard hearts game has been implemented and tested.

## How to compile and run

### Prerequisites

- Node.js installed
- PostgreSQL installed
- In Postgres, create a database `DATABASE_NAME`

### Clone repo

```
$ git clone https://github.com/rohan8594/Hearts-Game.git
$ cd Hearts-Game
```

### Create a .env file

```
$ touch .env
$ echo DATABASE_URL=postgres://`whoami`@localhost:5432/DATABASE_NAME >> .env
```

### Command line instructions

```
$ npm install
$ npm run db:migrate
$ npm run db:seed:all
$ npm run start:dev
```

The app will then be running locally, and can be accessed at:

`localhost:3000`

## Heroku Link

[Hearts Game](https://hearts-game.herokuapp.com/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://rohanpatel.xyz"><img src="https://avatars1.githubusercontent.com/u/23509745?v=4" width="100px;" alt="Rohan Patel"/><br /><sub><b>Rohan Patel</b></sub></a><br /><a href="https://github.com/rohan8594/Hearts-Game/commits?author=rohan8594" title="Code">💻</a> <a href="#maintenance-rohan8594" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/Rrobins1"><img src="https://avatars0.githubusercontent.com/u/21211501?v=4" width="100px;" alt="Richard Robinson"/><br /><sub><b>Richard Robinson</b></sub></a><br /><a href="https://github.com/rohan8594/Hearts-Game/commits?author=Rrobins1" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JakeCarter2012"><img src="https://avatars3.githubusercontent.com/u/34175792?v=4" width="100px;" alt="JakeCarter2012"/><br /><sub><b>JakeCarter2012</b></sub></a><br /><a href="https://github.com/rohan8594/Hearts-Game/commits?author=JakeCarter2012" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!