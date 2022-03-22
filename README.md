# Musico-T
A project to union music and people into a simple webpage. Built on [Next.js](https://nextjs.org/) and shared on [Vercel](https://vercel.com), data are provided by [Spotify API](https://developer.spotify.com/).

## Features

 - See the collaborative playlist of the group.
 - Add new songs to the playlist.
 - Follow all the people who is registered.
 - Song of the day.
 - Play a preview of each song.
 - Login with spotify.

## Getting Started
First, clone this [project](https://github.com/franfdezmorales/musicot):
```bash
cd <directory>
git clone https://github.com/franfdezmorales/musicot.git 
```
Install all the dependencies: 
```bash
npm install 
# or
yarn install
```
Fill all the environment variables: 
```bash
# .env
DATABASE_URL
NEXTAUTH_URL
# .env.local
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_PLAYLIST_ID
SPOTIFY_MASTER_ACCOUNT
```
Update the prisma scheme to your db service: 
```bash 
npx prisma db push   
```
Run the development server: 
```bash 
npm run dev
# or 
yarn run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
