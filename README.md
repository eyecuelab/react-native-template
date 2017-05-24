# React-Native Template

## Features

#### Standard
* redux
* Immutable.js
* redux-saga
* react-navigation

#### babel-plugin-resolver
 * this is config'd in our .babelrc, allows us to use absolute paths.
 * absolute paths have implied starting path of `src/`
 * can sometimes throw 'unable to resolve module errors'. try restarting RN packager, maybe running `npm start --reset-cache`

## Renaming
This project can be renamed using [react-native-rename](https://github.com/junedomingo/react-native-rename).

## Conventions

* linting - follows [airBnb's style guide](https://github.com/airbnb/javascript)
* api calls (use `src/lib/Api`)
* styles - split up static and dynamic, adapt local and global

## Could Add

* redux-persist: seems to have a simply and useful API for async saving of state. may have collisions w/ immutable.js state objects

## Discussion pts
