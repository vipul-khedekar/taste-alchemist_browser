# Taste Alchemist - A Recipe Browser

![Taste Alchemist Landing Page](https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-34-18%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=adf57fb3-e847-4821-9e20-c6a674bd06f3)
A web app to search and browse recipes by categories. Presents recipe list in a scrollable consolidated manner. The ingredients and steps shown are very concise. Tasteful design, keeping simplicity and user experience in mind.

## Major Features

The core functionalities of the app:

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
