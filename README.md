# Cash Converters

This is a simple application to convert one currency into another.

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
yarn run test-graphql
// Run client tests
yarn run test-client
// I sincerely apologise for the lack of client tests...
```

## Technologies Used

- Node
- GraphQL
- Apollo server/client
- React
- A little bit of jest

## My Process

So as I know you are graphql-ers at Love Home Swap, I decided to create a graphql layer between the API you supplied and my React App. The only justification for this architectural decision was just that. So I began there and developed my Apollo server in a test driven way.

I then wired it up to my client which I built in a bit of a hurry.

I decided to use yarn workspaces to manage my two apps, so I didn't have to send you two repositories (because that would just be crazy)

## The Good

- Fully tested graphql server (the tests are super tidy as well)

## The Bad

- I didn't TDD the client (my bad)

## Known Issues that I would fix if I had more time

- The values don't update when selecting a new currency.
- Maybe some awesome design
