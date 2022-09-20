# HENI FE Test

## Getting started

### Dependencies

Main technologies : React, Material UI, Apollo, Jest, React Testing Library

- Clone the project
- Run `yarn install` at its root

### Running the project

- Run `yarn dev` to run the project locally

### Running unit tests

- Run `yarn test`

## Instructions

The purpose of this test is to show a list of ships using SpaceX GraphQL API : https://api.spacex.land/graphql/ Every feature/components implemented in this test should be unit tested. There is an example of how the unit tests should be written at HENI in `components/Card/index.spec.tsx`. UX, code quality, accessibility will be taken in account when reviewing the test.

- Complete the HomePage component by showing the ships returned when using the query implemented in `api/ship/queries/getShips.ts`. The results should be loaded using an infinite scroll.
- Create a simple details page showing the details about a boat. This page should be accessible by clicking a Learn More button in the ships cards shown on the home page.
- Set up basic Open Graph tags for both the home page and the details page.
- BONUS : There is a hook in `hooks/useLocalStorage/index.ts` which should not be useful for the previous questions. Please write unit tests for this hook.

....

### About your own implementation ?
Tasks done for the test completion:
 * Completed the homepage component with infinite scroll

     I have added the offset field to the gql query so I can fetch more data as the user scrolls through the page. Implemented infinite scroll using InfiniteScroll component. In order to make it work, I had to add a typePolicy for ApolloClient to merge the results.
     
     While working on this part, I noticed that there is not enough data coming in from the ships query so I switched to the launch history query that also has info about the ships used in that launch. With a sample data formatting function I now have hundreds of ships to show off. 

     The downside of this is that we have duplicates. Since this is a test to check the implementation rather than the content, I considered it a good trade-off.
    

 * Created a simple details page for every boat
    
    For this implementation I've added a new gql query which accepts the boat ID as a parameter that is taken from the URL and then fetches the data to populate the page. 
    
    In order to render the page, I added a catch-all dynamic page called [..slug] which will match any URL of type `details/ID`
    
 * Added unit tests and also completed the Bonus point by writing unit tests for the custom hook 

     In order to test the custom hook I created a simple component that uses the locaLStorage hook. Then, I've added tests as usual that check the page's state given the values from the localstorage. 

 
....
