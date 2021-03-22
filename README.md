## React workshop

This workshop consists of two parts.

### Get started

Go into either the directory `part1` or `part2` and run the following"

```
yarn && yarn start
```

### Exercises

#### Part 1

1. Refactor the `header` and `footer` sections to components, including the styling.

2. Break down the `header` component into smaller components, if possible.

3. Refactor the `characters` section to a component, including the styling. Where do you get the state from?

4. Break down the `characters` component into smaller components, including the styling, and pass the dependencies via props.

BONUS: Are there any other refactorings you can do?

#### Part 2

5. Add the package `react-router-dom` to the project, and set up the routing so that there’s something rendering at the “homepage”

6. Create a route for the characters (like `/characters`) and display the “characters” component here

7. Add a link to this route to the “header” component

8. Also, create a route to show a specific character. Hint: have a look at the <Link /> component https://reactrouter.com/web/api/Link. Can you use the “characters” component to display the character?
Navigate to a non-existing route (in example `/about`), can you create a solution to display a 404 page here?

9. In the previous exercise you used the <Link /> component to pass the data to the `characters/:id` route. Replace this functionality with an actual API call to https://rickandmortyapi.com/documentation/#get-a-single-character

10. The “filter” component now changes the state to filter the results of the API call, but the API also allows filtering (https://rickandmortyapi.com/documentation/#filter-characters). Replace this logic with the API call

11. Update the url with the filter parameters. Route change should also change the displayed characters

12. Add pagination and update the url on page changes
