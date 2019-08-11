## React Native challenge

## Run the application

    - Install dependencies with `yarn` or `npm i`
    - For iOS run: ` react-native run-ios`
    - For Android run: ` react-native run-android`

## Main Libraries used

    - Axios 
    - Native base
    - React navigation
    - Redux
    - Redux Thunk

## Making it more performant

This is how this app could be more performant in case of a bog amount of data

    - Implement pagination. Maybe using an infinite scroll pattern
    - Using FlatList which improves memory usage and efficiency
    - Using a  debounce effect when the user inputs a search term. It waits a few hundred milliseconds to see if any more calls come through.
    - Using some sort of cache