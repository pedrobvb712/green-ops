Predefined Locations Map

This is a small static web app that uses the Google Maps JavaScript API to display a set of pre-defined locations.

Files
- `index.html` — main page; replace `YOUR_API_KEY` with your Google Maps API key in the script tag.
- `app.js` — initializes the map and creates markers from `locations.json`.
- `styles.css` — basic layout and styles.
- `locations.json` — sample list of predefined locations.

How to get a Google Maps API key
1. Visit https://console.cloud.google.com/ and create/select a project.
2. Enable the Maps JavaScript API for your project.
3. Create an API key and restrict it (HTTP referrers) for security.
4. Replace `YOUR_API_KEY` in `index.html` with your key.

Run locally
You can serve the files with a simple static server. From the project root run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Notes and next steps
- The map will only load when a valid API key is provided.
- Enhancements: add marker clustering, search/filtering, categories, or a small backend to manage locations.
