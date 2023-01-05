# Tauri + React + Typescript + Protocol Buffers

This template should help get you started developing with Tauri, React and Typescript in Vite, communicating and synchronizing code using Protocol Buffers.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- open vscode extension tab, search `@recommended` and install all recommended extensions

##  Prerequisites
1. install rust toolchain by [rustup](https://rustup.rs/)
2. install [nodejs](https://nodejs.org/en/)  but suggest using **nvm**
   > Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
3. install yarn

## Quick Start

```bash
yarn
# after cargo fetch & check done
yarn tauri dev
```

## Features
- [x] Vite
- [x] React
- [x] Typescript
- [x] Web Debugging
- [x] Rust Debugging
- [ ] Communicate and Synchronize Code between Web and Rust using `Protocol Buffers`
  - [x] Rust with [quick-protobuf](https://github.com/tafia/quick-protobuf)
  - [x] Typescript with [protobufjs](https://github.com/protobufjs/protobuf.js)
  - [ ] Single Communicate Channel
  - [ ] Easy Build
- [ ] Code Style
  - [ ] Eslint & Prettier for Web
  - [ ] Clippy for Rust
- [ ] Generic Installer
- [ ] Generic Github Build Workflow