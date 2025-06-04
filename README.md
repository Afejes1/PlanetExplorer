# Planet Explorer

Planet Explorer is a simple React + TypeScript application that lists planets in our solar system and shows information about them. When selecting Mars it also fetches the latest weather report from a public API.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```

## Build

```
npm run build
```

The app fetches planets from [Solar System OpenData API](https://api.le-systeme-solaire.net/) and Mars weather data from NASA's [MSL Weather Service](https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json). Planet images are loaded from NASA's public domain galleries.
