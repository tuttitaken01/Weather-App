# React Project (data fetching)

In this project I used data from a third party API to create a React-based interface to present data in an interactive and engaging way.
The concept I chose was a weather interface where the user can find out the current weather of a location.

To run this locally, clone the repo and install all dependencies ```npm install```. Once set you can start the app by running ```npm start```.

# Overview of the Project

## Tech Stack:
- React
- JavaScript
- CSS and MUI
- API

## Summary

1. Start a new react app
```
npx create-react-app .
```
2. API selection
- [Open Weather Map](https://openweathermap.org/api) - Current and forecast weather across the globe
- [Unsplash](https://unsplash.com/documentation) - Largest open collection of high quality photos

If you're interested in other APIs, feel free to checkout this [repo](https://github.com/public-apis/public-apis)

3. Planning
- [ ] Draw out interface
- [ ] Choose which pieces of the interface can be separated into components
- [ ] Draw out a tree structure for components
- [ ] Design state to keep it to a minimum and not be repetitive
- [ ] Decide which pieces of state each component will need and get a rough idea of where this state will sit on the tree structure
- [ ] Ensure state is high enough it can be shared by necessary components, but as low as possible to avoid passing it unnecessarily.

4. Data visualisation
In order to build more complicated UI's we can take advantage of pre-built 3rd party components and visualisation libraries. In this project I mainly used [MUI](https://mui.com/core/) and experimented with [React Bootstrap](https://react-bootstrap.github.io/).


## Drawbacks
The Open Weather Map API does not offer free long-term forecast anymore, and as this project was due to be completed in 2 working days, I only managed to implement current forecast. Future improvements could include a weekly forecast, maybe a precipitation map as well.
