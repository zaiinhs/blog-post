# Blog Post @zaiinhs.
This project in build for a need Challenge Test (Front End Developer - Internship) with tech stack :

`JavaScript, React, Next.js, Tailwindcss`

The following is a [list of required tasks](./task-list.md) that have been completed

### Table of Contents
- [Overview](#blog-post-zaiinhs)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)

### Features
- Blog post list and Search users
- Blog post detail with comment and user 
- Users page with Create, Read, Update, Delete
- Responsive display 

### Prerequisites
- Version control system ([Git](https://git-scm.com/))
- Nodejs `18.x.x` version
- Code editor (VS Code)
- Browser (Chrome)

### Getting Started

To start a project, there are several steps that must be taken

- `git clone https://github.com/zaiinhs/blog-post.git`
- `cd blog-post`
- `npm install`
- After that you need to create an `.env` file. Currently there is an `.env.example` file, all you have to do is copy and paste it then change the name to `.env.local`. In that file you have to configure the URL of the [Public API](https://gorest.co.in/public/v2) and the API KEY.
- Next, you can run it `npm run dev`
- Finally, open the browser and the project will run on port `http://localhost:3000` or `localhost:3001` if you currently have a project running on port `3000` 

### folder sturcture
```javascript
Next JS Folder Structure

├── public
|     └── favicon.ico
├── src
    ├── components
    |     ├── header
    |     |     └── Header.jsx
    |	  ├── home
    |     |     ├── detail
    |     |     |      |── Comments.jsx
    |     |     |      |── DetailPost.jsx
    |     |     |      └── User.jsx
    |     |     ├── mobile
    |     |     |      |── AllList.jsx
    |     |     |      └── Button.jsx
    |     |     ├── Jumbotron.jsx
    |     |     ├── ListPosts.jsx
    |     |     └── ListUsers.jsx
    |     ├── layout
    |     |     └── main-layout.jsx
    |     ├── user
    |     |     ├── update
    |     |     |      |── Form.jsx
    |     |     |      └── ListPostUpdate.jsx
    |     |     ├── ButtonUserPage.jsx
    |     |     ├── CreatePost.jsx
    |     |     ├── DeletePost.jsx
    |     |     ├── UpdatePage.jsx
    |     |     └── UserPage.jsx
    |     └── index.js
    ├── pages
    |     ├── detail-post
    |     |     └── [id].js
    |     ├── user
    |     |     └── index.js
    |     └── _app.js
    |     └── _document.js 
    |     └── index.js
    ├── styles
    |     └──  globals.css
|
├── .gitignore
├── package-lock.json
├── package.json
├── .env.example
├── .eslintrc.json
├── jsconfig.json
├── next.config.json
├── postcss.config.js
├── tailwind.config.js
├── task-list.md
└── README.md
```