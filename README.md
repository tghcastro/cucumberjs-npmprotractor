# Cucumber JS and Protractor example

## About

Project-based on the Udemy course ["Get Up & Running with the Protractor-Cucumber Framework (JS)"](https://www.udemy.com/course/get-up-running-with-the-protractor-cucumber-framework/). For me was more an introduction in JS and Cucumber JS than any other.

> Please don't think that the Gherkin usage here is the best approach following good practices. I was only following the lectures.

### About the course

I really don't recommend it for a person that is starting to learn about test automation or doesn't have some knowledge about programming. It's superficial and the instructor rushes with many concepts, doesn't answer questions from previous students and doesn't follow good practices.

## Running

### Pre-requirements

1. Node.js
2. Selenium (Webdriver-manager)
3. Visual Studio Code (optional)

#### Installing pre-quirements

```shell
npm install webdriver-manager

webdriver-manager update
```

### Running the test

```shell
webdriver-manager start
npm run protractor
```

> After running the tests the report files will be available in the report folder (ignored in .gitingore).
