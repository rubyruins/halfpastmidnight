# Half Past Midnight. 🌙

## Commands

- `npm install`: install node modules.
- `npm start`: run the project.
- `npm run deploy`: deploy to Github pages.

## Tech Debt

- 5 Sonar issues in `isotopegrid.jsx`
- Spinning loader in mailing list component is slightly off in vertical alignment
- Susbcribe form has autocomplete off, find a way to autocomplete with no autofill (light blue) background

## Notes

- Send In Blue (sib) styles are imported in `head.js` to apply to mailing list component
- A backup of these is in the `sib-styles.css` folder in case the external styles change
- Search indexing will not work for newly added articles unless `npm run build` is used once
- All images having fixed width