# 🛠️ Discord Bot Dashboard

A simple, customizable **Discord Bot Dashboard** built with Node.js and Express, designed to manage your bot’s servers, commands, and features from a web interface.

Created by [2GreekDevs](https://github.com/2GreekDevs) — for developers who want quick control over their bots without diving into raw code every time.

---

## 🚀 Features

- 🔐 Secure login via Discord OAuth2
- 📊 Dashboard overview for servers the bot is in
- ⚙️ Per-server settings panel
- 📤 Command toggling (enable/disable features)
- 🌐 Fully customizable with your bot’s config

---

## 📦 Tech Stack

- Node.js
- React
- TailwindCSS
- OAuth2 authentication

---

## 🖥️ Demo Preview

> [Coming Soon – Optional live demo or screenshots]

---

## 🧰 Requirements

- Node.js v16+
- A Discord bot already created
- A Discord Developer Portal application (for OAuth2)

---

## 🔧 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/2GreekDevs/Discord-Bot-Dashboard.git
cd Discord-Bot-Dashboard
```

 2. Install dependencies

```npm install```

3. Configure the environment

Create a .env file or use config.js to set up:

```bash
CLIENT_ID=your_discord_app_id
CLIENT_SECRET=your_discord_app_secret
BOT_TOKEN=your_discord_bot_token
REDIRECT_URI=http://localhost:3000/callback
SESSION_SECRET=some_secure_string
PORT=3000
```
4. Start the server

```bash
node app.js

    Visit http://localhost:3000 in your browser to test the dashboard.
```

🔒 Security Notes

    Always keep your CLIENT_SECRET and BOT_TOKEN private.

    Use SESSION_SECRET for encrypted sessions.

    Set proper permissions in your Discord application (OAuth scopes).

📌 To Do / Improvements

    🔧 Add logging per server

    🎨 Theme customization support

    📡 WebSocket live status updates

    🔐 Admin panel with access control

---

🤝 About Us

2GreekDevs is a Greek tech duo building creative digital tools, websites, Discord bots, and more.
Follow us for updates:
[📸 Instagram](https://www.instagram.com/2greekdevs/)
[🌐 Website](2greekdevs.com)
[💬 Discord Server](https://discord.gg/dHCvUaFAAH)

