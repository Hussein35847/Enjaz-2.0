# Enjaz (AR ↔ EN Keyboard Fixer)

Enjaz is a lightweight browser extension that instantly converts mistyped Arabic/English keyboard text.

<p align="center">
  <img src="icon.png" alt="Enjaz Extension Icon" width="140"/>
</p>

It supports:
- **In-page conversion** from selected text (right-click menu)
- **Popup real-time converter** with copy buttons
- **Arabic/English UI toggle** in the popup

---

## Features

- Convert text typed with the wrong keyboard layout (Arabic ↔ English)
- Works on most inputs:
  - `<input>`
  - `<textarea>`
  - `contenteditable`
  - common role-based editable fields
- Context menu action: **Enjaz — تحويل النص**
- Real-time conversion box inside extension popup
- Language preference saved using `chrome.storage.sync`

---

## Project Structure

```text
.
├── manifest.json      # Extension configuration (Manifest V3)
├── background.js      # Service worker + context menu + page conversion injection
├── content.js         # Content script placeholder
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic + real-time converter + i18n
└── icon.png           # Extension icon
```

---

## How to Run (Load the Extension Locally)

> No build step is required. This extension runs directly from source files.

### Google Chrome
1. Open `chrome://extensions/`
2. Enable **Developer mode** (top-right)
3. Click **Load unpacked**
4. Select your cloned extension folder (the folder containing `manifest.json`)
   - Example (macOS/Linux): `/home/username/projects/enjaz`
   - Example (Windows): `C:\Users\username\projects\enjaz`
5. Pin **Enjaz** from the extensions toolbar (optional)

### Microsoft Edge
1. Open `edge://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select your cloned extension folder
   - Example (macOS/Linux): `/home/username/projects/enjaz`
   - Example (Windows): `C:\Users\username\projects\enjaz`

### Brave
1. Open `brave://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select your cloned extension folder
   - Example (macOS/Linux): `/home/username/projects/enjaz`
   - Example (Windows): `C:\Users\username\projects\enjaz`

### Opera
1. Open `opera://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select your cloned extension folder
   - Example (macOS/Linux): `/home/username/projects/enjaz`
   - Example (Windows): `C:\Users\username\projects\enjaz`

### Firefox (Temporary Load)
> This project is built with Chrome extension APIs (Manifest V3).  
> Firefox support can vary by version.

1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on...**
3. Choose `manifest.json` from your cloned extension folder:
   - Example (macOS/Linux): `/home/username/projects/enjaz/manifest.json`
   - Example (Windows): `C:\Users\username\projects\enjaz\manifest.json`

---

## How to Use the Extension

### Method 1: Convert text on any page (Right-click)
1. Select text in an input/editor/page
2. Right-click
3. Click **Enjaz — تحويل النص**
4. The selected text is replaced with converted text

### Method 2: Popup real-time converter
1. Click the **Enjaz** extension icon
2. Type text in the first box (**Type here…**)
3. Converted output appears instantly in the second box
4. Use copy buttons to copy input/output quickly

### Language toggle in popup
- Use **EN** or **ع** buttons in the popup header to switch UI language.

---

## Development Notes

- No npm/pip/build tooling is required.
- To apply code changes:
  1. Edit files
  2. Go to your browser’s extensions page
  3. Click **Reload** on the Enjaz extension
  4. Test again on a web page

---

## Permissions Used

From `manifest.json`:
- `activeTab`
- `scripting`
- `storage`
- `contextMenus`
- `tabs`
- Host permission: `<all_urls>`

These are used to:
- inject conversion logic into active pages/frames
- create context menu action
- store popup language preference

---

## Version

Current version: **1.0.0**
