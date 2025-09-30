# OLX Clone
![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react) 
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript) 

A full-featured OLX clone built with **React.js**, **Firebase Authentication**, and **Firestore Database**, allowing users to browse, post, and manage classified ads with secure authentication and dynamic content.

## ✨ Key Features

- **Login & Signup**: Implemented Firebase Authentication (email/password + AuthContext) for secure user access.  
- **Home Page**: Dynamic product listing with category-based filtering.  
- **Product Details**: Dedicated product page displaying complete information.  
- **Post Ad (Protected Route)**: Secure form for users to add new product ads.  
- **My Ads**: User-specific ads management with edit & delete options.  
- **State Management**: Leveraged React Context API (`useContext`) for global state handling (auth & ads).  

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Context API, CSS  
- **Backend & Database**: Firebase Firestore  
- **Authentication**: Firebase Auth  

## 📁 Installation & Setup

1. Clone the repository:  
```bash
git clone https://github.com/JithuSudharshan/Olx_clone.git
cd Olx_clone
npm install
npm start
Olx_clone/
│
├─ src/
│  ├─ components/      # Reusable components (Navbar, Card, etc.)
│  ├─ pages/           # Page components (Home, ProductDetails, PostAd, MyAds)
│  ├─ context/         # Auth & Ads Context
│  ├─ firebase.js      # Firebase config
│  └─ App.js
│
├─ public/
├─ package.json
└─ README.md

🔗 Repository

GitHub - JithuSudharshan/Olx_clone

