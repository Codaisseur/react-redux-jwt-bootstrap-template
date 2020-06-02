# Week 6 practice assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for practice assessment

You are allowed to ask for help of teachers and fellow students.

#### Sample solution

[Client](https://github.com/Codaisseur/cool-story-bro-client)
[Server](https://github.com/Codaisseur/cool-story-bro-server)

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

#### Frontend

- Basic knowledge of React
  - components
  - props
  - useState
  - useEffect
  - event listeners & handlers
- Routing & dynamic routing using react-router-dom
- Making a reducers that transform the redux state
- Using selectors to take state from the redux store and use it in your components
- Dispatching actions from your components to change the redux state
- Seperating reducers & actions & selectors
- Using async actions (redux thunk)
- Sending GET / POST / PATCH and DELETE requests using axios
- Setting an authorization header with a JWT to make an authorized request

#### Backend

- Starting and restarting a docker container running a postgres server
- Generating models & migrations using sequelize-cli
- Doing database validation using sequelize models (e.g. allowNull: false, unique: true)
- Implementing hasMany, hasOne and belongsTo relations
- Adding foreign keys to models in migrations
- Adding relations to sequelize models
- Generating seed data using sequelize-cli
- Creating, updating & deleting records from the database using sequelize models
- Querying the database using sequelize models
- Eager loading related models using sequelize `include`
- Implementing GET / POST / PATCH / DELETE routes in express
- Sending responses with express
- Setting status codes to responses in express
- Seperating routes using the express Router
- Using the auth middleware to manage authorization for routes in express

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past weeks! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stackoverflow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating homework experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

## What are we building?

We are building a webapp where people can have their own homepage and post stories. It is called `Cool story bro`. It has multiple pages

- Signup & Login pages (already implemented in the starter kit)
- A page with a list of homepages of different users
- A detail page for a homepage where you can view a users' stories
- A page where you can view your own homepage
- A form where you can edit your homepage
- A form where you can post a story

It is recommended that you use the react-redux & express templates where the login / signup flow has been implemented.

[Frontend starter](https://github.com/Codaisseur/react-redux-jwt-bootstrap-template)
[Backend starter](https://github.com/Codaisseur/express-template)

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README

## Entities

### Homepage

| key             | data type        | required | notes                             |
| --------------- | ---------------- | -------- | --------------------------------- |
| id              | Integer          | yes      | Already added by model:generate   |
| title           | String           | yes      |                                   |
| description     | Text             | no       |                                   |
| backgroundColor | String (hexcode) | no       | default should be #ffffff (white) |
| color           | String (hexcode) | no       | default should be #000000 (black) |
| createdAt       | Date             | yes      | Already added by model:generate   |
| updatedAt       | Date             | yes      | Already added by model:generate   |
| userId          | Integer          | yes      | Foreign key (references a user)   |

**Relations:**

- homepage belongs to user
- user has one homepage

### Story

| key        | data type | required | notes                               |
| ---------- | --------- | -------- | ----------------------------------- |
| id         | Integer   | yes      | Already added by model:generate     |
| name       | String    | yes      |                                     |
| content    | Text      | no       |                                     |
| imageUrl   | String    | no       |                                     |
| createdAt  | Date      | yes      | Already added by model:generate     |
| updatedAt  | Date      | yes      | Already added by model:generate     |
| homepageId | Integer   | yes      | Foreign key (references a homepage) |

**Relations:**

- story belongs to homepage
- homepage has many story

| Criteria                                                               | Points |
| ---------------------------------------------------------------------- | ------ |
| Server contains sequelize models for Homepage & Story                  | 2      |
| Server contains migrations to create homepages and stories tables      | 2      |
| title in homepage and name in story are validated in model & migration | 2      |
| User, Homepage and Story models are correctly related                  | 2      |
| Seeders are present to create at least 2 homepages and 4 stories       | 2      |
| Total                                                                  | 10     |

## Features

### 1. As a user I want to view a list of homepages belonging to other users

- The default page you see when you go to `/` should be a list of homepages
- Each homepage is displayed in the colors their users have customized
- There is a button linking to the details of that homepage

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| The frontend route `/` displays a list of homepages done                   | 1      |
| The homepages are fetched from the server done                             | 1      |
| The homepages have a backgroundColor and color as specified by their users | 1      |
| An array of homepages is stored and managed by redux done                  | 1      |
| A selectors and actions are defined in a seperate files done               | 1      |
| Each homepage has a `Visit page` button, it links to a homepage's details  | 1      |
| Total                                                                      | 6      |

### 2. As a user interested in people's lives, I want to read people's stories, so I can be informed

- When we click on the `Visit page` button of a homepage we see the details of a homepage
- On this detail page we can see the stories belonging to that homepage

| Criteria                                                                  | Points |
| ------------------------------------------------------------------------- | ------ |
| The frontend route `/homepages/:id` displays a detail page for a homepage | 1      |
| The stories are displayed with a name, description and an image           | 1      |
| The homepage and its stories are fetched from the server                  | 1      |
| The homepage and its stories are queried from the database using 1 query  | 1      |
| The homepage has a backgroundColor and color as specified by their user   | 1      |
| The stories are displayed in order, from newest to oldest (`createdAt`)   | 2      |
| Total                                                                     | 7      |

### 3. As a logged in user I want to be able to view my page

- When you are logged in, there should be a link in the navbar to `My page`
- When you click that link you see the page belonging in to your user and its stories
- Ideally, we add the user's homepage to the information being fetched when we login
- That means modifying the `/me` and `/login` endpoints to also send your homepage in the response
- Alternatively fetch the data from the endpoint set up for feature #2 (detail page)

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| You see a `My page` link in the navbar (but only when you're logged in)    | 1      |
| When you click `My page` you see your homepage and your stories            | 1      |
| The homepage and its stories are fetched from the server                   | 1      |
| Your homepage & stories are fetched using the `/me` and `/login` endpoints | 2      |
| Your homepage's details are managed by redux                               | 2      |
| Total                                                                      | 7      |

### 4. As a user signing up I want a homepage to be created for me

- When you sign up for a new account, a homepage should be created for you.
- The homepage is set up with some default values:
  - title: `${user.name}'s homepage`
  - description: null
  - backgroundColor: #ffffff (white)
  - color: #000000 (black)
- You'll have to modify the existing `/signup` endpoint to make this happen

| Criteria                                                                  | Points |
| ------------------------------------------------------------------------- | ------ |
| When a user sign's up a homepage is created ands saved to the database    | 1      |
| The new homepage is assigned the userId of the user that just signed up   | 1      |
| The new homepage has values for title, backgroundColor and color          | 1      |
| The homepage is sent in the response of `/signup` along with the new user | 1      |
| The homepage is stored in the redux store in the frontend                 | 1      |
| Total                                                                     | 5      |

### 5. As a logged in user I want to be able to post stories on homepage, so I can share my adventures with the world

- You should be able to post a story on your homepage
- In the `My page` section there should be a button to `Post a cool story bro`
- When you click this button a form appears so you can post a story
- You should only be able to do this when you are logged in

| Criteria                                                                | Points |
| ----------------------------------------------------------------------- | ------ |
| There is a button with `Post a cool story bro` on `My page`             | 0.5    |
| Clicking the button makes a form appear                                 | 1      |
| The form has inputs for name, content and imageUrl                      | 0.5    |
| When a user enters an imageUrl, they can see a preview of the image     | 1      |
| When the form is submitted a POST request is sent to the server         | 1      |
| An Authorization header is set in the request                           | 1      |
| The auth middleware is used on the server side to authorize the request | 1      |
| The POST request updates the database with input from the user          | 1      |
| The story saved in the database has the correct `homepageId`            | 1      |
| The user sees a success message if the story was posted successfully    | 1      |
| The success message is an alert, confirm or prompt popup or console.log | -1     |
| Total                                                                   | 9      |

### 6. As a logged in user I want to be able to edit my homepage, so I can express myself

- Your homepage has a title, description backgroundColor and color. You should be able to change those
- In the `My page` section there should be a button to `Edit my page`
- When you click this button a form appears so you can edit your page
- You should only be able to do this if you're logged in

**Hint:** Make the backgroundColor and color inputs using `<input type="color">`, documentation on it can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

| Criteria                                                                 | Points |
| ------------------------------------------------------------------------ | ------ |
| There is a button with `Edit my page` on `My page`                       | 0.5    |
| Clicking the button makes a form appear                                  | 1      |
| The form has inputs for title, description, color and background color   | 0.5    |
| The values in the form start as the current values for your homepage     | 2      |
| When the form is submitted a PATCH request is sent to the server         | 1      |
| An Authorization header is set in the request                            | 1      |
| The auth middleware is used on the server side to authorize the request  | 1      |
| The PATCH request updates the database with input from the user          | 1      |
| The user can see the results of their update without refreshing the page | 2      |
| Total                                                                    | 10     |

### 7. Finishing up

- Self assess: Score your assessment yourself using the table below
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |
| Student has regularly committed changes (at least 1 commit per feature)    | 1      |
| Student has pushed their repository using git                              | 1      |
| Total                                                                      | 6      |

### Self assessment

| Section                      | Max Points | Self assessed points | Assessor |
| ---------------------------- | ---------- | -------------------- | -------- |
| 0 Migrations, models & seeds | 10         | 0/10                 | 0/10     |
| 1 Homepages list             | 6          | 0/6                  | 0/6      |
| 2 Homepage details           | 7          | 0/7                  | 0/7      |
| 3 My page                    | 7          | 0/7                  | 0/7      |
| 4 Homepage created on signup | 5          | 0/5                  | 0/5      |
| 5 Posting stories            | 9          | 0/9                  | 0/9      |
| 6 Editing your homepage      | 10         | 0/10                 | 0/10     |
| 7 Finishing up               | 6          | 0/6                  | 0/6      |
| Total                        | 60         | 0/60                 | 0/60     |
