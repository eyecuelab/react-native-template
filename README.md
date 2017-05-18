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

#### lib/createReducer.js
* we create our reducers differently than most
* commonly folks will have a series of switch statements, can get unclean & very literary

## Style

common styles are kept in their own folder, I think these are cool to try to use a lot. and to use functions in there to make common style patterns dynamically amenable.

## Error handling

Good to standardize/plan from the outset. error actions make this much simpler

## Conventions

these would be cool to hash out, there are some good style guides online ([like this one](https://github.com/airbnb/javascript)) that we could consider borrowing from

## Could Add

* reudx-persist: seems to have a simply and useful API for async saving of state. may have collisions w/ immutable.js state objects
* selectors folder - whether we need this would be more apparent upon getting a better sense of what our state trees will look like. reselector is a good-seeming lib
* testing! our architecture will be well setup for it, depends on whether we can afford the time/energy to setup

## Discussion pts

* does all of our state need to be composed of immutable objects?
* should `lib/styles/` folder be in lib?
