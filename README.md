# Streamline-Menus-Documentation
Providing documentation for work I did for Streamline Menus

## Design Concepts

These sketches were used in the intial process meeting. I joined the project after it had been started, but before there was any customer-facing systems in place, so I made these sketches during the meeting and used it to illustrate graphic design ideas, navigation ideas, color-schemes, and what kind of user-interaction we could expect. The project was in the early phases of development, so design was a large part of it.

![some graphic design elements](https://github.com/devinlizardi/Streamline-Menus-Documentation/blob/main/assets/Screenshot%202022-08-25%20133638.png)

## Technical Details

The side of the project I worked on was built in React, with a Node runtime using Express, grabbing data from an atlast MongoDB.

Page navigation used `BroswerRouter` from [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) for performance, and so we could raise state objects to a high-enough level. The real challenge came further down, where we needed to create a tagging system for each item of food on the menu so that we could filter by various dietary preferences.

Because there was a finite list of dietary preferences we offered the user to filter by, we made 4 state booleans that were controlled by onClick handlers. These event handlers also changed the look of the button, so it would reflect the on vs off status.

![Image of filter buttons]()

Finally, all we had to do here was filter the rendered content on the page based on which state was active, and it was working quickly.
