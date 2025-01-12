# WanderLust - Full-Stack Web Application

WanderLust is a full-stack web application built with Express, MongoDB, and EJS, where users can create, view, search(on the basis of location provided while creating a listing of a place), and review listings of places. The app includes user authentication and authorization, allowing users to sign up, log in, and manage their listings and reviews.

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Create Listings**: Users can create new listings with a title, description, price, image, location and country.
- **Search Listings**: Listings can be searched by location.
- **Manage Listings**: Users can edit or delete their own listings.
- **Add Reviews**: Users can add reviews to listings with ratings and comments.
- **Map Integration**: Listings have geolocation with Mapbox integration to display locations on a map.
- **Role-Based Authorization**: Only the listing owner can edit or delete a listing, and only the review author can delete their own review.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Authentication**: Passport.js (local strategy)
- **File Storage**: Cloudinary (for storing images)
- **Geolocation**: Mapbox (for geocoding and map rendering)
- **Frontend**: EJS, Bootstrap 5, Font Awesome
- **Styling**: Custom CSS and Mapbox styling
- **Validation**: Joi for schema validation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (local or cloud database)
- [Cloudinary](https://cloudinary.com/) account for image storage (optional but recommended)
- [Mapbox](https://www.mapbox.com/) account for geolocation (optional but recommended)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/wanderlust.git
    cd wanderlust
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following environment variables:
    ```
    MAP_TOKEN=your_mapbox_token
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    SESSION_SECRET=your_session_secret
    ```

4. Set up your MongoDB database either locally or with a cloud service (e.g., MongoDB Atlas).

5. Run the application:
    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:3000`.

### Database Models

- **User**: Stores user information, including email, username, and password.
- **Listing**: Stores information about a listing, such as title, description, price, image, location, and geolocation data.
- **Review**: Stores reviews for listings, including rating, comment, and author reference.

### API Routes

#### Listings

- **GET** `/listings`: Get a list of all listings.
- **GET** `/listings/new`: Render the form to create a new listing.
- **POST** `/listings`: Create a new listing (requires login).
- **GET** `/listings/:id`: View a specific listing with reviews.
- **GET** `/listings/:id/edit`: Render the form to edit an existing listing (requires owner authorization).
- **PUT** `/listings/:id`: Update an existing listing (requires owner authorization).
- **DELETE** `/listings/:id`: Delete a listing (requires owner authorization).

#### Reviews

- **POST** `/listings/:id/reviews`: Add a review to a listing (requires login).
- **DELETE** `/listings/:id/reviews/:reviewId`: Delete a review (requires author authorization).

#### Authentication

- **GET** `/signup`: Render the signup form.
- **POST** `/signup`: Sign up a new user.
- **GET** `/login`: Render the login form.
- **POST** `/login`: Log in an existing user.
- **GET** `/logout`: Log out the current user.

### Middleware

- **isLoggedIn**: Protects routes that require user authentication.
- **isOwner**: Ensures only the listing owner can edit or delete their listing.
- **isReviewAuthor**: Ensures only the review author can delete their review.
- **saveRedirectUrl**: Saves the original URL before login for redirection after login.

## Frontend

- **Bootstrap** is used for styling and responsiveness.
- Custom EJS templates are used to render dynamic pages.
- The app uses **Font Awesome** for icons and **Mapbox** for displaying maps and geolocation data.

## File Uploads

Images are uploaded to **Cloudinary** using the Cloudinary API. The app supports both image uploads for listings and profile picture uploads (if applicable).

## Validation

The app uses **Joi** for schema validation on the backend to ensure that listing data and reviews are properly structured and meet the necessary requirements.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)


Feel free to make any modifications to this README based on your specific project needs.
