#### Running the project:

### First step: Install dependencies:

Run `npm install` on the root folder of this repo.

### Create the FrontEnd build

For starters we need to create a build of the client app, run `npm run build` on the root directory of this repo.

### Run the server

You will need to create a file with the name ".env" at the root folder of this repo.
It must include the following content:

```
clientId=<yourPeYaClientID>
clientSecret=<yourPeyaClientSecret>
```

You can also add the port in which the project will run, if PORT is not provided it will attempt to run on port 3030

```
PORT=<port>
```

After that you are ready to start the project by running:
`npm start`

#### Features I'd like to implement:

- When user hovers a restaurant from the list highlight the restaurant's marker on the map
  give it a try with next js (?)

#### Shame.me, things I'd like to fix but ⏰.

## Server Side Cache

As this is intended to be implemented as a distributed system, we should implement another way to cach responses from PeYAPI and get the Administration data. We can create a cache server to centralize all our nodes and cach all responses from the API, also we can keep real time data for the Administration endpoint without burning our database.

## Responsive design

Make it responsive, it's important to keep an eye on mobile phones allways we are talking about websites.

## a11y

Accessibility: It's important to create apps that can be used by most users we can. As software developers we should allways think on the different ways an user can interact with our aplication.

#### My homework:

I do really need to make more emphasis on how to write unit test, for both backend and frontend.

Explore some in memory database options like redis.

Explore a little more on restfull API

#### Tech Stack:

### Backend:

- express : Allows us to create a simple server to interact with client's reqs.
- body-parser : Helps us getting the data from the body of the incoming requests.
- mustache-express : View engine that allows us to render html and send it back to the client (In this repo i just write the client_access_token directly on the html to avoid a second call asking for it in order to do the login).
- axios : Gives us a simple way to retrieve data from PeYAPI and it works in both backend and frontend.
- node-cache : A simple cache module that allows us to store data in memory with an expiration date.

### FrontEnd:

- @react-google-maps/api : A simple to use Maps API provided by Google.
- React : JS library that helps us to develop reusable UI components.
- react-router-dom : Client side router that helps us to manage public and private.

#### Questions:

How to indicate the way the response from search restaurants is sorted?
