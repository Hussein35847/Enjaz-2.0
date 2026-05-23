# Enjaz

Enjaz is a keyboard-layout conversion toolkit that helps fix text typed with the wrong layout between **Arabic** and **English**.

<p align="center">
  <img src="assets/icon.png" alt="Enjaz Extension Icon" width="140"/>
</p>

This repository currently contains ready-to-use distributables for:

- Desktop app (Windows, Linux, macOS)
- Browser extension

## 📥 Download

### 💻 Desktop App

- Windows  
  [Download Enjaz-Windows.zip](Enjaz_Desktop/Windows/Enjaz-Windows.zip)

- Linux  
  [Download Enjaz-Linux.zip](Enjaz_Desktop/Linux/Enjaz-Linux.zip)

- macOS  
  [Download Enjaz-macOS.zip](Enjaz_Desktop/macOS/Enjaz-macOS.zip)

---

### 🧩 Browser Extension

- 🌐 Extension  
  [Download Enjaz-Extension.zip](Enjaz_Extension/Enjaz-Extension.zip)

## Repository Contents

```text
Enjaz_Desktop/
  ├── Linux/
  │     └── Enjaz-Linux.zip
  ├── Windows/
  │     └── Enjaz-Windows.zip
  └── macOS/
        └── Enjaz-macOS.zip

Enjaz_Extension/
  └── Enjaz-Extension.zip

assests/
  └── icon.png
```

## Features

- Arabic ↔ English keyboard-layout text conversion
- Real-time conversion in the extension popup
- Right-click conversion from page text
- Option to convert and replace selected text in editable fields
- Theme and language options in extension UI

## Desktop App

### Windows

1. Open `Enjaz_Desktop/Windows/Enjaz-Windows.zip`
2. Run `Enjaz-Setup.exe`
3. If SmartScreen appears, choose **More info** → **Run anyway**
4. Complete the installer

After installation:

- Desktop shortcut and Start Menu entry are created
- App can launch on startup (can be disabled in app settings)
- Default hotkey: `Ctrl + Shift + Space`

Uninstall:

- Start Menu → Enjaz → Uninstall Enjaz  
  or
- Windows Settings → Apps

### Linux

1. Open `Enjaz_Desktop/Linux/Enjaz-Linux.zip`
2. Extract the archive
3. Run the `Enjaz` executable inside `Enjaz-linux-x64/`

If execution is blocked, enable execute permission first:

```bash
chmod +x Enjaz
```

### macOS

1. Open `Enjaz_Desktop/macOS/Enjaz-macOS.zip`
2. Extract the archive
3. Move `Enjaz.app` to `Applications` (recommended)
4. Open the app from Finder/Launchpad

If macOS blocks the first launch, allow it from:

- **System Settings** → **Privacy & Security** → open anyway

## Browser Extension

File: `Enjaz_Extension/Enjaz-Extension.zip`

### Install (Chrome / Chromium-based browsers)

1. Extract `Enjaz-Extension.zip`
2. Open your browser extensions page (`chrome://extensions`)
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the extracted `Enjaz-Extension` folder

### Usage

- Select text on any page, right-click, then use:
  - **Enjaz: Convert selection**
  - **Enjaz: Convert & replace selection**
- Or click the extension icon and use the popup for real-time conversion

## Troubleshooting

- Refresh the tab after installing/updating the extension
- Extension scripting does not run on restricted pages (such as browser internal pages)
- For Linux/macOS launch issues, verify file permissions and OS security prompts

## Notes

- This repository currently stores packaged distributables.
- Source code for desktop and extension internals is packaged inside artifacts.

## Support

If you find an issue or have feedback, open a GitHub issue in this repository.

