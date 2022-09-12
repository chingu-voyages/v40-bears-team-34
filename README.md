## APCH
# Project Description
Apch is an application that helps users search for an apartment based on a few search criteria: number of bedrooms, rent, and amenities in desired cities.
# Product Idea
The current trend indicates that most people are interested in moving to different cities or states for new opportunities and experience. So, the idea was to create an app where users could choose cities in different states along with search criteria to find cities with their livability score along with a list of apartments matching the search criteria. To find the livability score, we planned to use apartment reviews and use ML/NLP models to calculate scores. Each filtered apartment will also feature a chart with positive, negative, and neutral values for a certain keyword from the review. The keywords are "quiet", "clean", "management", "neighborhood", "crime", and "bugs." Crime and bugs always have a negative value, and the rest is calculated based on negative words, like, not, in the sentence.
# Product Challenges
We anticipated challenges with the machine learning models as it’s a new area we were exploring. For this exploratory project, we created our own database with a few apartments and reviews. Our team members were researching a few models, but the models didn’t quite work with our review data. Either the weighted score didn’t look correct, or we weren’t sure how to display negative scores in the chart to calculate the livability score. So, in the end, we decided to drop it, considering time and available resources.
# Product Features
The application has four different pages as follows:

    1. The Home page is the main page where users specify the search criteria. 
        ◦ Users are provided with 6 different cities and states as toggle tokens. A minimum of 2 is required.
        ◦ Users choose the number of bedrooms; the options are 1 or 2, or 3-bedroom apartments.
        ◦ Users enter the desired minimum and maximum rent.
        ◦ Users choose from six different amenities. A minimum of 2 is required.

    2. The Results page
    • The apartments that meet the search criteria are listed. It displays all the available amenities and a bar chart with keywords picked from the reviews.
    • The user can click on the heart button to add it to the wishlist page.

    3. The Wishlist page
    • The user can see all the apartments that they have marked as favorites.

    4. The All Apartments page 
    • It lists all the apartments.

## Live Sites
[**App**](https://v40-bears-team-34.netlify.app/)

[**API**](https://v40-bears-team-34.herokuapp.com/)

[**Github**](https://github.com/chingu-voyages/v40-bears-team-34)

[**API Github**](https://github.com/chingu-voyages/v40-bears-team-34be/)

## Development Team
- [Suba Krishnan](https://github.com/suba-krishnan)
- [John J Barrett](https://github.com/JohnJBarrett22)
- [Jonathan Carpio](https://github.com/jona70x)
- [Oxengineer](https://github.com/0xengineer)
- [Regina Mc Guire](https://github.com/rmcguire6)

## Front End Dependencies

- Axios
- Chart JS
- Husky
- Prettier
- React
- React Chart JS 2
- React Router
- React Icons
- Redux
- Redux toolkit
- Tailwind CSS
- Vite
- Yarn 3.2.2

