This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

And it was deployed to firebase hosting service. Please see [here](https://todo-list-ee465.web.app).

## Main Technique

- node 14.13
- react 16.13
- redux
- react-router-redux
- redux-saga
- sass
- css module


## Specification

[Reference](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201)

#### Home Page (/)

This is out of scope, just for beauty.

#### List Mode (/notes)

When a user enter to the note list but doesn't select any note, this page will show.

#### View Mode (/notes/:note_id)

Follow the [Reference](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201).

In view mode the note content will be shown in markdown format.

#### Edit Mode (/notes/:note_id/edit)

Follow the [Reference](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201).

In edit mode the note content will be shown in raw data format (pure text).

#### Data

According to the [Reference](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201), 3 mock functions are built:

1. [Mock API call](https://github.com/ianchen9527/todo-list/blob/develop/src/apis/mockApiCall.js)
2. [Mock encrypt](https://github.com/ianchen9527/todo-list/blob/develop/src/utils/encrypt/index.js#L7)
3. [Mock decrypt](https://github.com/ianchen9527/todo-list/blob/develop/src/utils/encrypt/index.js#L12)

To simulate the async delay, all of them have a 500ms delay time.

--

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
