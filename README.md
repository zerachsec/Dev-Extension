# Leads Tracker – Chrome Extension

A simple and lightweight Chrome extension to save, manage, and revisit important links (leads).  
You can manually add URLs or save the currently active tab with a single click. All data is persisted using `localStorage`.

---

## 🚀 Features

- ✅ Save links manually via input
- 🌐 Save the current active browser tab
- 💾 Persistent storage using `localStorage`
- 🔗 Clickable links that open in a new tab
- 🗑️ Double-click to delete all saved leads
- ⚡ Fast and minimal UI

---

## 🧠 How It Works

- Leads are stored in an array called `myLeads`
- Data persists across browser sessions using `localStorage`
- Chrome’s `tabs` API is used to capture the active tab URL
- DOM manipulation is used to render links dynamically

---

## 🛠️ Tech Stack

- JavaScript (Vanilla JS)
- Chrome Extensions API
- HTML & CSS
- localStorage

---

## 📂 Project Structure

```
├── index.html
├── index.js
├── style.css
├── manifest.json
└── README.md
```

---

## 🧩 Key JavaScript Logic

- Save input value as a lead
- Fetch current tab URL using:
  ```js
  chrome.tabs.query({ active: true, currentWindow: true })
  ```
- Store and retrieve data from `localStorage`
- Render leads dynamically inside a `<ul>`

---

## 🧪 How to Install Locally

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable Developer mode (top right)
4. Click Load unpacked
5. Select the project folder
6. Start saving leads 🚀

---

## 🖱️ Usage

- Add Lead: Enter a URL and click the input button
- Save Current Tab: Click the “Save Tab” button
- Delete All Leads: Double-click the delete button

---

## 📌 Permissions Used

```json
"permissions": ["tabs"]
```

Used only to fetch the active tab URL.

---

## 🧠 Learning Outcome

This project helps you understand:
- Chrome Extension fundamentals
- DOM manipulation
- localStorage persistence
- Event listeners
- Chrome Tabs API

---

## 📜 License

MIT License – free to use, modify, and distribute.

---

## 🙌 Acknowledgements

Built as a hands-on learning project to understand JavaScript and Chrome Extensions better.

Happy hacking 🚀

---

## 👤 Author

**Zer4ch**

[![X](https://img.shields.io/badge/X-zerach-black?logo=x)](https://x.com/zer4ch)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Zerach-blue?logo=linkedin)](https://www.linkedin.com/in/vishaals1411)