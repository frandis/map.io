# About map.io
map.io is a simple journal app for maintaining short journals about one's projects, products, and future product ideas all in one place. It is designed for aspiring and seasoned software engineers who are looking for a centralized place to keep notes about their work & ideas.

# Screenshots
## Landing Page
![landing.png](https://i.postimg.cc/nLPdYCd7/landing.png)

## About Page
![about.png](https://i.postimg.cc/Dyhtzp8X/about.png)

## Login Page
![login.png](https://i.postimg.cc/5NBRd90d/login.png)

## Signup Page
![signup.png](https://i.postimg.cc/t49mX0Z1/signup.png)

## Dashboard
![dashboard.png](https://i.postimg.cc/JzKY0TZp/dashboard.png)

## Add Project
![addproject.png](https://i.postimg.cc/fTS87xpv/addproject.png)

## Update Project
![update-project.png](https://i.postimg.cc/hPW55QK1/update-project.png)

## View Tech Stach Chart
![report.gif](https://i.postimg.cc/dV0mHJZ9/report.gif)

# Built with
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Materialize CSS](https://materializecss.com/)

# Getting Started
1. Clone this repo
```
  git clone https://github.com/frandis/map.io.git
```
2. From the project root directory, run `npm install` to install dependencies
3. Create `index.js` in `server/config` and add teh following
``` javascript
const MONGO_URI = 'YOUR MONGODB URI';

module.exports = MONGO_URI;
```
4. Run `npm run dev` and go to http://localhost:8080 to open the application
