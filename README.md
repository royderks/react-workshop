## React workshop

This workshop consists of two parts.

### Get started

Go into either the directory `part1` or `part2` and run the following"

```
npm i && npm start
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

6. Create a route for the characters (like `/characters`) and display the “characters” component here. Add a link to this route to the “header” component

7. Also, create a route to show a specific character and add a link to this page from the `Card` component. Hint: have a look at this API call to https://rickandmortyapi.com/documentation/#get-a-single-character. Can you use the “characters” component to display the character?

8. Navigate to a non-existing route (in example `/about`), can you create a solution to display a 404 page here?

9. The “filter” component now changes the state to filter the results of the API call, but the API also allows filtering (https://rickandmortyapi.com/documentation/#filter-characters). Replace this logic with the API call and update the url with the filter parameters. Route change should also change the displayed characters.

BONUS: Add pagination and update the url on page changes
