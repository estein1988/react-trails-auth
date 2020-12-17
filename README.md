# Happy Trails USA Demo

This app is tied to a demo series I have been doing: How to do X in Y. The series is a demo of building a full-CRUD web application through Django and React. The project will include user authentication through a JWT package, a many:many relationship, and a PostgreSQL database.

## Built With
Frontend: React 17.0.1<br>
Backend: Python 3.7.9, Django v3.1.2, Django Rest Framework v3.12.1, Django Rest Framework Simple JWT 4.4.0, PostgreSQL v13.0

### Backend Repository
https://github.com/estein1988/django_trails_auth

### Demo Video
[Django Many:Many with Auth in 60 Mintes](https://www.youtube.com/watch?v=zi1XE8b-ugM)
[React User Sign-up](https://www.youtube.com/watch?v=HsCGsoW6JjQ)

## App Features

### Registration
New users can register and gain access through a local storage JWT access token. 

## Challenges
- A code demonstration is very difficult. It's hard talking out evertything you are doing and why. 

- Django password encryption with protected end-points.

## Future Implementation


## Collaboration

1. Fork and/or clone this repo & the backend repo: [Backend Repo](https://github.com/estein1988/django_trails_auth)
2. Create PostgreSQL database: `createdb django_trails_dev`
3. Migrate database tables in backend: `python3 manage.py migrate` and `python3 manage.py loaddata home`
4. Run backend server: `python3 manage.py runserver`
5. Install dependencies on frontend: `npm install`
6. Run frontend server: `npm start`
7. Checkout new branch
   

If you'd like to collaborate on this project, please email me: estein1988@gmail.com or at https://www.linkedin.com/in/steinelliott/ 
