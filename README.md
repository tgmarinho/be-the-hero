<h1 align="center">
    <img alt="BeTheHero" title="#BeTheHero" src=".github/logo.svg" width="250px" />
</h1>

<h1 align="center">Be The Hero</h1>

<p align="center">
  A full-stack app that connects NGOs with people willing to help, built during Rocketseat's Semana OmniStack 11.0.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black">
  <img alt="React Native" src="https://img.shields.io/badge/React%20Native-61DAFB?logo=react&logoColor=black">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white">
  <img alt="SQLite" src="https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white">
</p>

## What it does

NGOs register the cases they need help with. Each case has a title, a description, and the amount of money needed. People who want to help (the heroes) browse the cases and contact the NGO by email or WhatsApp to support one.

The project has three parts:

- A REST API for NGOs, cases, and sessions.
- A web app where NGOs log in, register cases, and manage them.
- A mobile app where heroes see the cases and reach out to help.

## Download

The mobile app is published on Google Play.

- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.bethesuperhero)

## Stack

- **Backend:** Node.js, Express, Knex, SQLite
- **Frontend:** React
- **Mobile:** React Native, Expo
- **HTTP client:** Axios

## Project structure

```
be-the-hero/
├── backend/    Node.js REST API (Express, Knex, SQLite)
├── frontend/   Web app (React)
└── mobile/     Mobile app (React Native, Expo)
```

## Run locally

You need Node.js and Yarn installed. Run each part in its own terminal.

### Backend

```bash
cd backend
yarn install
yarn knex migrate:latest
yarn start
```

The API runs on `http://localhost:3333`.

### Frontend

```bash
cd frontend
yarn install
yarn start
```

The web app runs on `http://localhost:3000`.

### Mobile

```bash
cd mobile
yarn install
yarn start
```

This opens Expo. Scan the QR code with the Expo app on your phone, or run it on an emulator.

## License

This project is under the MIT license. See [LICENSE](LICENSE.md) for details.

---

Made by Thiago Marinho. [Get in touch](https://www.linkedin.com/in/tgmarinho/).
