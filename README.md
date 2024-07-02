# CraftGlow

[CraftGlow](https://craftglow-42054.web.app/) is your go-to destination for Paper Crafts and Glass Art. Our website offers a wide range of crafts, from card making to glass painting, providing a space for artists and enthusiasts to explore and share their creativity.

## Features

- **User Authentication**: Log in or register using Google, GitHub, or email/password for easy and secure access.

- **Craft Item Pages**: Browse all craft items added to our database, with detailed pages for each item available exclusively to logged-in users.

- **CRUD Functionality**: Logged-in users can add, update, and delete their own items in our database, with React Sweet or Toast alerts for each CRUD operation.

- **Custom CSS and Animations**: Our website uses custom CSS and animated cards to provide an engaging and visually appealing user experience.

- **Night and Day Mode Toggle**: Customize your browsing experience with our night and day mode toggle feature.

- **Category and Subcategory Sections**: Explore our six main categories, each with corresponding subcategories and data for a comprehensive crafting experience.

- **Resourceful Home Page**: Find inspiration and resources for your next project in our thoughtfully designed home page sections.

- **React and Lottie Packages**: Our website utilizes modern technologies such as React and Lottie packages to provide an interactive and enjoyable user experience.

Explore the world of crafts and art with CraftGlow today! Let your creativity shine.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShopnilIsCoding/CraftGlow-Client.git
   cd craftGlow
2. Install dependencies:
   ```bash
   npm install
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy your Firebase configuration details and create a `.env` file in the root directory with the following content:
     ```plaintext
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```
4. Run the development server:
   ```bash
   npm run dev
5. Build for production:
   ```bash
   npm run build
