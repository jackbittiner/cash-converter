# Cash Converters

Have you ever wondered how much Vietnamese Dong you can get for a Great British Pound? You can find out using this nifty app. It turns out, as you'll find out later, the pound is doing terribly compared to many currencies but you can still get thousands of Dong!

## How to Run

```
// clone the repository
git clone git@github.com:jackbittiner/cash-converter.git
// enter the repository
cd cash-converter
// install the dependencies
yarn install
// start the app
yarn start
```

This will run both the GraphQL Server and the Client. You can see the playground at `http://localhost:4000/` and the client at `http://localhost:3000/`

## How to Run the tests

```
// Run graphql tests
$ yarn run test-graphql

// Run client tests
$ yarn run test-client
// (I sincerely apologise for the lack of client tests...)

// Run integration tests (you need to make sure the server and client are running for this)
$ yarn run cypress open
// Then run the desired test in the window that pops up
```

## Technologies Used

- Node
- GraphQL
- Apollo server/client
- React
- A little bit of jest
- A little bit of Cypress

## My Process

So as I know you are graphql-ers at Love Home Swap, I decided to create a graphql layer between the API you supplied and my React App. There were two main reasons for this architectural decision: 1. Why not? 2. I like graphql.

I then moved on to building the client. I decided to organise my project as a monorepo with yarn workspaces. Due to only having some time here and there my process for this was a little sloppy. It wasn't TDD'd (sorry about that) and a couple tests were retrofitted in at the end. I also decided to add a cypress test for the sole reason that I have never used cypress before. It's pretty cool.

## The Good

- Fully tested graphql server (the tests are super tidy as well)
- Mostly functional.

## The Bad

- I didn't TDD the client (my bad)

## Known Issues that I would fix if I had more time

- The values don't update when selecting a new currency. (I have an idea of how to solve this)
- I'm fairly certain you can still add letters to the input field and it'll just break everything (I need to add some validation)
- Maybe some awesome design (I need a freelance designer)

## Thank you

Thanks a lot for taking the time to review this tech test, and making it to the bottom of this quite rambly readme. I hope to hear from you soon.
