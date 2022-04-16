# Repo for Gigih2.0 - Homework

note: why the homework is started from module 2? because module 1 use sanbox.

<br>

## 1. Homework - Module 2 - Session 1 - Adding React to Web Project, JSX & Element

- Create a page in Reach which contains the following data. The layout will be similar to the previous exercise, **without the form part only**.

  - Images of the album
  - Song title
  - Song Artist
  - A button that says (Select)

- Create all of them in App.js in one component
- Download the data [here](https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js) and put that in your react app

<br>

## 2. Homework - Module 2 - Session 2 - Components and Props

From previous homework, convert the track elements (which contains song title, image, album, etc) into components. Move it outside main component.

<br>

## 3. Homework - Module 2 - Session 3 - List & Looping, Conditional Rendering

Now, we will create a table of tracks

- Download the data [here](https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js). This contains array of tracks.
- Loop the data and create track components for each track listed.

<br>

## 4. Homework - Module 3 - Session 1 - State & Event Handling4

- Have a link that when clicked, it redirects to Spotify Auth API.

  - Read it more [here](https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/) in the **Implicit Grand Flow** section
  - For the scope, use playlist-modify-private
  - Set up the callback URL as localhost:3000 in the Spotify Dashboard
  - The callback will contains the Access Token, which you'll need for next request. Store that in a state

- Create a search song functionalities
  - Have a Search textbox button, when the button is clicked, it calls [Spotify Search API](https://developer.spotify.com/documentation/web-api/reference/#category-search). Later on, show the results on the Tracks Table created before.

<br>

## 5. Homework - Module 3 - Session 2 - Hooks

Add feature to select and deselect songs

- Use the uri as the key indentifier for looping
- Build this feature using Hooks
- When a song is selected, the button label should be "Deselect". When the song isn't selected, the button label should be "Select"
- When user searcher for another song, the selected songs should still be maintained in the list

<br>

## 6. Homework - Module 3 - Session 3 - Forms & Lifting State Up

- Create a "create playlist" form with the following fields

  - Title, minimum 10 characters
  - Description
  - A button to submit

  - When the button is clicked, create a new playlist with those title and description, with songs that were selected previously
  - Use Get Current User's Profile, Create a Playlist, and Add Items to a Playlist API to achieve this. Read more in the API Docs.
  - Playlist should be private and collaborative should be false

<br>

## 7. Homework - Module 4 - Session 1 - Redux

Move the access token state to redux store. The app should still behaves like it is before.
