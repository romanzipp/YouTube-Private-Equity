# YouTube Private Equity - Extension

Shows which YouTube channels are owned by private equity.

## ❤️ Contribute Data

### GitHub Issue (easiest)

This is the easiest way to contribute data for non-technical people.

Simply [open an issue](https://github.com/romanzipp/YouTube-Private-Equity/issues/new?template=add-channel.yml) and fill out the required fields.

### Pull Request

1. If the given owning company is not listed in [`data/companies.csv`](data/companies.csv), add a new row
    - `id`: A unique identifier for the company, mostly the name in lowercase with dashes
    - `title`: Title of the company
    - `url`: Website of the company
    - `added_at`: Current date in YYYY-MM-DD
2. Add a new row to [`data/channels.csv`](data/channels.csv)
    - `youtube_channel_id`: YouTube ID of the channel (see [below](#find-youtube-channel-id) on how to find the ID)
    - `youtube_channel_handle`: Handle of the channel (visible in the URL `https://youtube.com/@handle`) 
    - `title`: Title of the channel as visible in YouTube
    - `company_id`: ID of the company from `companies.csv`
    - `source_url`: A URL to an article or announcement proving the channel is owned by a given company
    - `added_at`: Current date in YYYY-MM-DD
    
### Find YouTube Channel ID

TODO

### Find YouTube Channel Handle

TODO

## 🛠️ Project Setup

```sh
npm install
```

## Disclaimer

TODO

## 🛠️ Commands

### Build

#### Development, HMR

Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads
Currently only works in Chromium based browsers.
```sh
npm run dev
```

#### Development, Watch

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts)
```sh
npm run watch
```

#### Production

Minifies and optimizes extension build
```sh
npm run build
```

### Load extension in browser

Loads the contents of the dist directory into the specified browser
```sh
npm run serve:chrome
```

```sh
npm run serve:firefox
```

## References

- [YouTube: Micro "Your Favorite YouTube Channel is (Probably) Owned By Private Equity"](https://youtu.be/hJ-rRXWhElI)
- [Reddit: r/videos "Your Favorite YouTube Channel is (Probably) Owned By Private Equity"](https://www.reddit.com/r/videos/comments/1m85mob/your_favorite_youtube_channel_is_probably_owned/) 
