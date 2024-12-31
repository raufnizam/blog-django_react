

# Blog Platform with Django & React

A full-stack blogging platform built with **React (Vite)** on the frontend and **Django REST Framework** on the backend. This project features a secure authentication system and dynamic blog management capabilities.

## Features

### Frontend (React)
- **Dynamic Blog Listing**: Displays blog titles, snippets, and a "View Post" button.
- **User Authentication**: Login and registration system for secure access.
- **Interactive UI**: Built with React and Vite for a fast and modern user experience.
- **API Integration**: Fetches data from the backend through RESTful APIs.

### Backend (Django REST Framework)
- **Authentication System**: Includes user login, registration, and token-based authentication.
- **Blog API Endpoints**: Provides CRUD operations for blog posts.
- **Structured Data**: Returns clean and well-structured JSON responses.
- **Scalable Architecture**: Modular and ready for further expansion.

## Installation and Setup

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/raufnizam/blog-django_react.git
   cd blog-django_react/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Access the Application
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:8000/api/posts](http://localhost:8000/api/posts)

## API Endpoints
- **Authentication:**
  - `POST /api/auth/register/`: Register a new user.
  - `POST /api/auth/login/`: Login and obtain an authentication token.
  - `POST /api/auth/logout/`: Logout and invalidate the token.
- **Blog Management:**
  - `GET /api/posts/`: Retrieve a list of blog posts.
  - `POST /api/posts/`: Create a new blog post.
  - `PUT /api/posts/<id>/`: Update an existing post.
  - `DELETE /api/posts/<id>/`: Delete a blog post.

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS (optional if styling applied)
- **Backend**: Django, Django REST Framework
- **Authentication**: Django REST Framework Token Authentication
- **Database**: SQLite (default, can be switched to PostgreSQL or others)

## Future Improvements
- Implement pagination and search functionality for blog posts.
- Enhance the UI with additional styling and animations.

## Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

