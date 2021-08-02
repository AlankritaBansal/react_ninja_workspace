# Ninja React Coding Challenge

**Please make sure to go through the below details before cloning the repository**

**Goal**: Dynamic page development & Integration, as per the below details

**Design Figma URL** - https://www.figma.com/file/6xhuursXAVWZiZlgH367HS/React-Ninja-Template

**Design consists of two pages**
- Login Page
- Home Page

**Scope of work**
- User should be able to successfully login using the email and password provided in the API details
- After login user should land on the Home page and Users list shoudl be loaded from the Users List API  
- Pagination is add on

**API Details**
- Postman Collection Link - https://www.getpostman.com/collections/5dfbcd9789e5ec3722df

1. Login API - POST - https://reqres.in/api/login 

_Sample Request_
```
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```

2. Users Listing API - GET - https://reqres.in/api/users?page=1

_Sample Response_
```
{
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }]
}
```

_Using APIs made for developers and designers by [Ben Howdle](https://benhowdle.im/)_


**Other Assets**
Font - https://fonts.google.com/specimen/Roboto


**Steps to follow**
1. Fork the repository
2. Make your changes 
3. Submit the **Pull Request** from the forked repository 


**Please note: git push on this repository is not allowed and only pull requests (PRs) from the forked repositories are allowed**
 
**Other Information**:
- Use of frontend frameworks like Bootstrap or Material-UI is allowed

Once you have completed the development, Please raise the pull request from your forked repository, and your work will be reviewed against:
- **Design vs Developed screens**
- **Coding Standards**
- **Readability & Reusability of code**
- **Code Quality and Size**

_This repository is meant to facilitate the interview process @Designstring and only referred candidates for the interview process are requested to access_

Happy Coding!!!
