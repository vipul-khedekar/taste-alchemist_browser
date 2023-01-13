# Taste Alchemist - A Recipe Browser

![Taste Alchemist Landing Page](https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-34-18%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=adf57fb3-e847-4821-9e20-c6a674bd06f3)
A web app to search and browse recipes by categories. Presents recipe list in a scrollable consolidated manner. The ingredients and steps shown are very concise. Tasteful design, keeping simplicity and user experience in mind.

## Major Features

_The core functionalities of the app:_

- **On the landing page, the user is greeted with a 'Today's Specials' and a 'Trending' recipe list.**
- **Wrote reusable components.**
  - For display grid and recipe cards.
  - Saved the development time by removing the need to write the same code for each item.
- **Fetched data is stored in local storage.**
  - Of 'Today's Special' and 'Trending' lists.
  - Because they bring back the same response data.
  - To reduce the load time of future visits.
  - Saves the wastage of shooting GET requests every time.
- **Ability to search for recipes using keywords.**
- **Ability to filter by four popular categories.**
  - Chinese, Italian, Indian and American.
- **Clicking on a recipe opens its details page.**
  - References it from API end-point by its ID passed through URL params.
  - Details page includes ingredients, instructions, and relevant dietary tags of the finished product.
- **Flexible scrollable area if the list overflows.**
- **Responsive design.**
  - Switching smoothly between 16:9 desktop and 3:4 tablet screen sizes.

## Quality of Life and Minor Design Features

_Little details that cumulatively add to a great user experience:_

- **Tasteful duo color combination of green and purple.**
- **Filter buttons are made using a linear gradient of two tones of purple to give a glassy look.**
- **Easier navigation.**
  - Filter button will show a white border representing the user's selected category.
- **Inputted keywords auto-blanks upon search completion.**
- **Animated loader.**
  - Appears when the app is in the process of data fetching.
  - Disappears as soon as data is ready to be displayed to the user.
- **Auto-scrolling slider.**
  - For 'Today's specials' and 'Trending' lists.
  - Slides at every small interval.
  - Loops back to the first one after reaching the end.
  - The user can interrupt the auto-sliding and can drag it instead.
- **Recipe Details page.**
  - Name, image, tags, and summary on the left column.
  - Ingredients and Instructions on the right column.
  - Easy to switch tabs for alternating between Ingredients and Instructions.
- **Clicking on the logo navigates the user back to the home page.**
- **Custom thin scrollbar design matching the theme.**
- **Hovering over the recipe card will glow it.**
- **Custom favicon.**
- **Proper title of the web app.**
