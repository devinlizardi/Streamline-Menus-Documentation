# Streamline-Menus-Documentation
Providing documentation for work I did for Streamline Menus

## Design Concepts

These sketches were used in the intial process meeting. I joined the project after it had been started, but before there was any customer-facing systems in place, so I made these sketches during the meeting and used it to illustrate graphic design ideas, navigation ideas, color-schemes, and what kind of user-interaction we could expect. The project was in the early phases of development, so design was a large part of it.

**Note:** at this time we knew we wanted to track every time a user would swipe on an item, thus compiling data for the restaurant to review, but wanted to focus our efforts on completing the initial application before adding this kind of functionality.

![some graphic design elements](https://github.com/devinlizardi/Streamline-Menus-Documentation/blob/main/assets/Screenshot%202022-08-25%20133638.png)

## Technical Details

### Front end
The side of the project I worked on was built in React, with a Node runtime using Express, grabbing data from an Atlas MongoDB.

Page navigation used `BroswerRouter` from [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) for performance, and so we could raise state objects to a high-enough level. The real challenge came further down, where we needed to create a tagging system for each item of food on the menu so that we could filter by various dietary preferences.

Because there was a finite list of dietary preferences we offered the user to filter by, we made 4 state booleans that were controlled by onClick handlers. These event handlers also changed the look of the button, so it would reflect the on vs off status.

![Image of filter buttons](https://github.com/devinlizardi/Streamline-Menus-Documentation/blob/main/assets/Screenshot%202022-08-26%20111620.png)

Finally, all we had to do was create a state object `selectedDiet` that held which diet the user had selected (default being 'all'), and compare against the `diet` field of each menu item. I implemented a variation of the following JSX:
```
// apply filter to array of elements
const menuFiltered = menuItems.filter(item => item.diet === selectedDiet)

// ...and eventually
<ul>
  {menuFiltered.map(item => <li key={item._id}> { item.name } </li>)}
<ul/>
```

To solve the functionality of a each item being swipeable from a list, we used the [react-swipeable-list](https://www.npmjs.com/package/react-swipeable-list) npm package, which integrated well with some CSS configuration, and we were good to go.

### Back end
The Node runtime for this side of the application was minimal, I used Mongoose to grab data from the database, then processed it as JSON and fetched that in the front end. Initially we had the data hosted on a Heroku API, but seeing that wasn't scalable eventually switched the Mongo.

The main challenge of the back end was deciding when to load the menu data, as well as respond with the user interaction. To solve this problem I used local storage to hold a counter and see how fast storing that information would be, and when I was satisfied it didn't inhibit the usability of the application started to build-out the data to be more useful.

## Reflection and Review
Because my job wasn't to design the usability of the system I didn't question the parameters of the work I was provided and focused my efforts on delivering high-performing, reusable, and readable code. Having consistency across style and general problem-solving strategies has proved to be an asset of mine, it makes my code predictable and easy to work with.

That being said, this project was a turning-point in how I saw freelance development work. I realized that as a freelancer and tutor I would never have complete ownership of my work, nor would I be able to work with a consistent team and build something to the best of our abilities, rather than my abilities alone.
