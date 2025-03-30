# Incognitix - Anonymous Social Media Platform

## 📌 Project Overview
Incognitix is an anonymous social media platform designed for users to explore and share content without revealing their identity.
A anonymous social media website where users can share their thoughts, confessions, or experiences without revealing their identity. There are no usernames, profiles, or personal details, making it a judgment-free space for open expression.

## 🚀 Features
- **Home** (🏠) - View general posts and updates.
- **Explore** (🔍) - Discover trending posts and anonymous content.
- **Create Post** (✏️) - Anonymously share your thoughts with others.
- **Dark Mode** - Toggle between light and dark themes.
- **Smooth Animations** - Seamless transitions for a great UI experience.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, DaisyUI
- **Icons:** Tabler Icons
- **Routing:** React Router DOM

## 🔗 Navigation Icons
The navigation bar uses the following icons from **@tabler/icons-react**:

| Page          | Icon Used             |
|--------------|----------------------|
| Home        | `IconHome2` 🏠 |
| Explore     | `IconSearch` 🔍 |
| Create Post | `IconEdit` ✏️ |

## 📂 File Structure
```
/src
│── components
│   ├── Navbar.jsx
│── pages
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── CreatePost.jsx
│── App.jsx
│── main.jsx
│── README.md (This File)
```

## 🔄 Setting Up the Project
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Manda-Advik/IncognitiX.git
   cd IncognitiX
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```

## 🛠️ How to Add Navigation Links
To add new pages and links, update the `Navbar.jsx` file:
```jsx
import { IconHome2, IconSearch, IconEdit } from "@tabler/icons-react";

const links = [
  { icon: IconHome2, label: "Home", to: "/" },
  { icon: IconSearch, label: "Explore", to: "/explore" },
  { icon: IconEdit, label: "Create Post", to: "/create-post" },
];
```



