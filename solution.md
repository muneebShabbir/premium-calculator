**Solution:**
- I choose Vue.js to build this demo app, tailwindcss for styling and Vuex for state management
- I created this as a Single page application.
- App consists of two routes one contains multi step form on one contains error page
- Form page holds responsibility to present form step and handles error if error occures in any step
- Each step in multip-step form is individual Vue component. Each has its own responsibility to present and store data respectively and notify parent form page if any error occures
- Components share data with each other using vuex store. I choose this to avoid to and fro prop passing between components
- While user is on step three, I made form two to be available in DOM to avoid refilling form on every visit of step two. so user can simply go back to step two with any extra data accessing and calculation
- Stores gets cleared when user hits start button on page one
- Form page moves to Error page route if it is being notified by form step about any business error
- Error page Moves to Form page route if user clicks ok button on error page


**Demo:**

https://user-images.githubusercontent.com/47774476/166635516-d77f1f36-a91d-4d37-b8b7-efe950f0933b.mp4

**PS:** Country dropdown is not visible in video
