# 🔴 🟡 🟢 🔵 Javascript random sequence

This app consists of a simple game in which the user has to repeat correctly a sequence of colors by clicking on each highlighted circle.

The functional requirements are:
- Generate a random sequence of colors.
- After each round add a new random color.
- The sequence should start after pressing a button.
- When fails, it should restart.

---
## ⚒️ Process

I have built this app using Vanilla JavaScript and CSS3 to give the styles.

I started to create a basic structure with HTML and CSS, in order to have a blank canvas where I could start to have some functionality. Finally I decided to create all DOM elements from JavaScript file, since it makes easier to test them.

I am really interested in all that having to do with clean code and best practices. Testing is something that I am starting to learn. Although I am not an "advanced user" regarding this practice, I wanted to try to put it into practice during this exercise, so I have included some [tests](src/main.test.js) using [Testing Library](https://testing-library.com/).

---

## 🚀 How to run the App.

> ⚠️ You need to have [```Node```](https://nodejs.org/es/) previously installed in your computer.

To start using this project, clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/conchaasensiomr/js-random-sequence.git
> ```

***

You have to run npm install in order to install the necesary dependencies.
> ```console
> $ npm install
> ```

Once you have installed the dependencies, you are ready to run the app with ```npm start```. 
> ```console
> $ npm start
> ```

> 👉 localhost is automatically open to view in the browser.

Finally, to run the tests, you need to introduce the following commands on your terminal:
```console
$ npm test
```

## 👩‍💻 Author

This App has been developed by [**Concha Asensio**](https://github.com/conchaasensiomr).