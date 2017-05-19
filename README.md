# React-Native Template

## Features

* redux (w/ immutable.js)
* redux-saga
* react-navigation

## Idiosyncrasies

#### babel-plugin-resolver
 * this is config'd in our .babelrc, allows us to use absolute paths.
 * absolute paths have implied starting path of `src/`
 * can sometimes throw 'unable to resolve module errors'. try restarting RN packager, maybe running `npm start --reset-cache`

#### createReducer.js
* we create our reducers differently than most
* commonly folks will have a series of switch statements, can get unclean & very literary

## Renaming
This project was launched with the name 'Mall'. I haven't tried this but [react-native-rename](https://github.com/junedomingo/react-native-rename) could be a simple way to change the name - although you might have to manually attune the mandatory matching names in AppRegistry (index file) and package.json.

## Conventions

These would be cool to hash out, there are some good style guides online ([like this one](https://github.com/airbnb/javascript)) that we could consider borrowing/adapting from. I've tried to set up standard protocol for:

* api calls
* error handling (see `sagas/fetch-title`)
* styles (local/global mix, using global properties as functions to make adaptable)

## Could Add

* reudx-persist: seems to have a simply and useful API for async saving of state. may have collisions w/ immutable.js state objects
* selectors folder - whether we need this would be more apparent upon getting a better sense of what our state trees will look like. [reselect](https://github.com/reactjs/reselect) seems like a useful lib
* testing! our architecture will be well setup for it, depends on whether we can afford the time/energy to setup

## Discussion pts

* does all of our state need to be composed of immutable objects?
* should `lib/styles/` folder be in lib?
* best way of forking android v. ios?
