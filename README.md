# Getting Started with Cryptocurrency Tracker Web Application
Live Solution: https://crypto-tracker-89c44.web.app/


This web app was built using React and deployed using firebase hosting. Websockets from Binance and Coinbase were used to stream the data of Bitcoin and Ethereum

Binance:
https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams

Coinbase:
https://docs.cloud.coinbase.com/exchange/docs/overview

After cloning the repository run the following command to download all the node dependencies
#### `npm install`

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Questionnaire:

### Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
I didnt take short cuts because I believe this is the best implementation I could have come up with for this problem. I figured using a traditional API to get information would get costly if there are a lot of API calls being made. So I researched that using a websocket would be better for scalabilty purposes and supports things that rely on real time changes. 

### Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
I created multiple components in react. Each Crypto had its own component and each reccomendation for each crypto had its own component. Although I could have done it in one component I felt that using multiple components made the code cleaner and css styling easier. 

### If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
I believe I did use the optimal choice of using websockets because a websocket can support high traffic. 

### What are some other enhancements you would have made, if you had more time to do this implementation?
If I had more time, I could have built a search feature where the user can search for any cryptocurrencies. I would have to have a general component taking care of cryptocurrency buy and sell prices and the corresponding recommendation.
