# Swifty - 42 School Companion App

React Native app to search and view 42 School student profiles using the 42 API.

## Quick Start

create .env and add these lines
UID="u-s4t2ud-491a128c812e24b247ccd85a0bc2488669d0ef0936c7a809b89e89826419cb29"
SECRET="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"

```bash
git clone https://github.com/olino3101/swifty-Companion.git
cd swifty-Companion/Swifty
make setup    # Creates virtual environment and installs dependencies
make start    # Launches the app
```

## Usage

1. Enter a 42 login (e.g., `onault`)
2. View student profile, projects, skills, and achievements

## Makefile Commands

- `make setup` - Install everything
- `make start` - Start development server  
- `make web` - Run in browser
- `make clean` - Clean and reinstall
- `make help` - Show all commands

## Manual Setup

```bash
npm install
npm start
```

## Configuration

Edit `src/utils/GetToken.js` with your 42 API credentials.

## Tech Stack

- React Native + Expo
- 42 School API (OAuth2)
- Axios for HTTP requests