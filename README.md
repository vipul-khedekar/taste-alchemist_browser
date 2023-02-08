# 🍕 Taste Alchemist - Comprehensive recipe recommender and browser

<div align="center">
    <img width="90%" height="90%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-34-18%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=adf57fb3-e847-4821-9e20-c6a674bd06f3" alt="home-page">
</div>

**A web app to search and browse recipes by categories. Presents recipe list in a scrollable consolidated manner. The ingredients and steps shown are very concise. Tasteful design, keeping simplicity and user experience in mind.**

**Tech Stack: ReactJS, Styled Components, React Router, Javascript, SwiperJS, CSS, HTML, and React Icons.**

## 👉 Major Features

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
  - Switch smoothly between 16:9 desktop and 3:4 tablet screen sizes.

## 👉 Quality of Life and Design Features

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

## 👉 Colors Used

_(Source: Imagination. I just named them whatever I wanted, because why not.)_ 🤷

| Colors           | Hex Code |
| ---------------- | -------- |
| Light Green      | #b1e6cc  |
| Dark Green       | #73d673  |
| Semi Dark Purple | #00b48a  |
| Dark Purple      | #2e1831  |
| White            | #ffffff  |
| Silver           | #c9c9c9  |

## 👉 Credits for Assets

_Thank you very much_ 🙂

| Assets  | Name        | Link                                      |
| ------- | ----------- | ----------------------------------------- |
| Favicon | Icons8      | https://icons8.com/                       |
| Logo    | Icons8      | https://icons8.com/                       |
| Fonts   | Google      | https://fonts.google.com/                 |
| Loaders | Sam Herbert | https://github.com/SamHerbert/SVG-Loaders |
| API     | Spoonacular | https://spoonacular.com/food-api          |

## 👉 More Screenshots

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-36-42%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=6888452c-f1b1-4408-9d82-f4b0309892e4" alt="search-bar">
</div>
<p align="center">(Fig.1 - Search Bar)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-34-57%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=466ff54b-8a65-40bb-ae31-8ae2d05eb964" alt="filter-categories">
</div>
<p align="center">(Fig.2 - Category Filters)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-35-49%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=d65221d3-9174-4749-8712-b372e312d37c" alt="slider">
</div>
<p align="center">(Fig.3 - Homepage Slider)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-39-57%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=59942c31-9d74-4aad-9cc2-5189f11dda53" alt="details">
</div>
<p align="center">(Fig.4 - Recipe Details)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-40-08%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=66c3f968-783c-4d03-9597-9ff857913f8f" alt="tabs">
</div>
<p align="center">(Fig.5 - Tabbed Details)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-37-20%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=f1fb5644-4b18-4a6a-adea-633c9038e4aa" alt="overflow">
</div>
<p align="center">(Fig.6 - Scrollable Grid, if items overflows)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Ftaste-alchemist%2FScreenshot%202022-12-19%20at%2021-38-08%20Taste%20Alchemist%20-%20A%20recipe%20browser%20tool%20with%20cooking%20instructions%20%26%20ingredients%20list.webp?alt=media&token=ccd676f5-abea-4031-aa54-47e344a59065" alt="responsive-tablet">
</div>
<p align="center">(Fig.7 - Tablet View)</p>
