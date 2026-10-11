# Sreya's Birthday Surprise Website 🎀

A mobile-friendly birthday microsite built with plain HTML, CSS and JavaScript. No framework, build tools, or paid services required.

## Preview locally
1. Unzip the folder.
2. Open `index.html` in a browser.
3. For best testing, use VS Code with the Live Server extension and choose **Open with Live Server**.

## Add Sreya's photos
Put three image files in the `photos` folder and name them exactly:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`

Use JPG/JPEG images. If your files are PNG or WebP, either convert them to JPG or update the corresponding filenames in `index.html`. Crop photos before adding them so the important part is near the centre. Ask Sreya or use photos you have permission to share, especially before publishing a public link.

## Change the secret code
Open `script.js` and edit:
```js
const CONFIG = {
  secretCode: "Sreya18",
  birthdayName: "Sreya"
};
```
The code is case-insensitive. This is a playful surprise, not actual security: anyone who can inspect the website's JavaScript can discover the code. Don't use a real password or put private information in the site.

## Enable birthday music (optional)
Add a royalty-free or otherwise licensed MP3 named `music.mp3` beside `index.html`. The Music button starts it after a tap. Do not include commercial songs unless you have permission to use them.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com/.
2. Create a **public** repository, for example `sreya-birthday`.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the complete `photos` folder (plus `music.mp3` if used). Keep the folder structure intact.
4. Open the repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then save.
7. Wait for deployment. GitHub will show the website URL in Settings → Pages, usually `https://YOUR-USERNAME.github.io/sreya-birthday/`.
8. Open the URL on your phone and test every section before sending it.

Alternative: use https://app.netlify.com/drop/ and drag the unzipped website folder into the drop area. Follow the prompts to publish and get a shareable URL.

## Before sharing
- Test the code `Sreya18`.
- Replace all three photo placeholders.
- Test the gift, quiz, letter, and final wish buttons.
- Remember that a public website and its photos can be viewed by anyone who gets the link. Don't upload anything she would not want shared.
