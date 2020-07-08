# VF Crypto

## Implementation Details

I've written a few different sections explaining my decisions and what I might change in the provided project.
- [General](#general)
- [Frontend](#frontend)
- [Backend](#backend)
- [Testing](#testing)
- [What Next](#what-next)

## Starting The App

To run locally you should add the following environment variables
to a .env file:

```
# Or use the pro-api
COINMARKETCAP_API=https://sandbox-api.coinmarketcap.com/v1
COINMARKETCAP_API_KEY=<your-key-here>
# Not really required but does make it easier
# to change the api in the future.
REACT_APP_CORE_API=api
REACT_APP_API_VERSION=v1
```

To run locally you need to, install and start both the server:

`npm i`

`npm run dev:server`

and the client:

`npm run dev:client`

Or you can build the app and run the server:

```
npm run build
# then
npm run start
```

Otherwise you can view the live app here: https://safe-everglades-96608.herokuapp.com/

It may have a slow start up time as the heroku basic plan will need to start the server for the first request, subsequent requests are quicker until the server goes into idle mode again.

### General

I used the create-react-app (CRA) package to scaffold the frontend of the application. For a project with
this specification I would most likely have elected to use NextJs to create the app to give me
great server side rendering support out of the box. I chose to use CRA however, because I thought using redux
as a global state store, as was hinted at in the specification, would be more straight forward and is what
I'm more accustomed too.

For scalability and ease I've also added my own express backend to serve the application and also act
as a caching layer for the cryptocurrency data. By adding caching to the server I'm able to decouple the 
number of calls that would be made to the CoinMarketCap API from the number of users the site has. Providing
I have cached data that is less than one minute old. I serve the cached data instead of hitting the api again.
See [API Calculations](#api-calculations) below.

To meet the requirements of the project I elected to use the [CoinMarketCap API](https://coinmarketcap.com/api/)
instead of cryptocompare as I believed it was easier to use and still has all the relevant fields for the design available.

### Frontend

On the frontend I have chosen to use redux and react-router as they was advised in the project specification. I have used redux-thunk to handle async actions as it is what I'm more accustomed to and would allow me to get something done more quickly. I primarily used Styled Components for styles as I haven't used it before but I felt like it would be quick to pick up and fun to use (it was and it was!).

I used reselect to create selectors which I used to pull data from the store into the app. I preferred to chain selectors to shape data as required, rather than changing data within the components where I'm more concerned with how it looks and behaves. It also makes components easier to write and reason about. The selectors aren't perfect and could be better fine tuned to control rerendering of sections of the app, to make the site
more performant.

I used a couple third party packages for both the loading skeletons, the dropdown and the icons. I used these to save time. Frustratingly the react-dropdown is using deprecated lifecycle methods so I would most likely make removing this dependency a priority, should I do more work on the app.

### Backend

This is just a super simple express application to serve the public folder on request, and also act as an API layer with
very basic caching. It also allows me to keep the applications CoinMarketCap API keys private.

### Testing

The application certainly doesn't have nearly enough tests. I have written a few to show that I'm perfectly able to. But have chosen to submit the project as is.

Ideally I would also add some e2e tests as well with a tool such as Cypress which is what I currently use professionally at work.

### What Next

*What would I like to do differently?*

As mentioned I would like to use Next to make an easy Server side rendered app. Failing that, I would take the time to transition this app to being isomorphic by instantiating the store on the server and rehydrating the app on the client.

I would also take more time with each component of the app, from an atomic up to a page perspective, to make the application responsive and suitable for mobile devices. Pre-Covid, your typical user is most likely to interact with a site on their mobile phone. As responsive designs weren't provided I felt it wasn't in the scope of the project, however, in the real world I would either push back or discuss quick responsive options with the designer / UX team.

I would also like to take more time to create an appropriate design system. Currently, designs, colors and style choices are duplicated across the app, ideally these would be defined in a standard place and reused / extended through the application. I have done a little of this as my confidence with Styled Components grew. However there's much more to be improved upon.

### API Calculations

With Caching:
60 minutes * 24 hours = 1440 calls per day per currency
5 currencies supported = 7200 calls per day.
31 days in month = 223,200 calls per month total.

Without... grows exponentially per user.

# The Content below was generated by create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
