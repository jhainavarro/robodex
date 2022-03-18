# Robodex

Catalog for your robots!

Hands-on exercise built with React and Styled Components. No UI kits added for an extra challenge :P Great starter project when trying new tech stacks.

---

## Sample Screens

![Robodex-view](https://ibb.co/f1nLnhq)

![Robodex-add](https://ibb.co/VWmTfmD)

![Robodex-view-one](https://ibb.co/wgmYkb6)

![Robodex-edit](https://ibb.co/vsSxjc6)

---

## Setup

**To avoid conflicts, please use `yarn` as your package manager.**

### Install packages

```console
$ yarn
```

### Add environment config file for local development

Create a `.env.local` file then copy and fill up the variables from `.env.sample`

### Windows local development

Please make sure to run `git config --local core.autocrlf false` to prevent `LF will be replaced by CRLF in` errors when doing commits

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn start:build`

Builds the app, and starts a server for serving the built assets in `localhost:5050`.\
The environment variables will depend on your `.env.local` file.\
This is useful for seeing how the app will behave when deployed to our app servers.

---

## To Do

- [ ] API backend
- [ ] Authentication
- [ ] Linting
- [ ] Extract common styled components into shared components
- [ ] Component tests
- [ ] Deployment pipeline
- [ ] ...
