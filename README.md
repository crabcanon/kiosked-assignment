# kiosked-assignment
 An experimental project in using ES6 via SystemJS, JSPM, Gulp, Babel and AngularJS.
 
## About

* A npm package originally designed for learning how to craft a complete webapp project from scratch(npm init & jspm init & gulp init).
* This package could be used to explore:
  * new features of ECMAScript 6.
  * how to use JSPM/SystemJS to maintain your project. 
  * how to construct and combine Gulp tasks.
  * how to code with AngularJS 1.x in using ES6.
  * how to provide a good structure of SASS.  
  
## Features

* No more `bower`
* No more `RequireJS`(replaced by `ES6 modules`)
* AngularJS 1.x embraces `ES6`
* Easy to install & run(`npm start`)
* Maintain dependencies by `jspm`
* Watch and reload webpage in real-time via `gulp` and `websocket`
* Bootstrap the webpage via `systemjs`

## Get started

* Clone the project
* `npm start`

## Motivation

#### 1. Why to use ES6?

* AngularJS 2 fully supports TypeScript and works equally well with ES6.
* React fully supports ES6.
* The sugar syntax and new features make things easier and more clear. It's time to embrace!

#### 2. Why not to use bower?

* Some amazing libs don't support bower anymore, for example Mapbox.
* https://github.com/mapbox/mapbox-gl-js/issues/1342
* It's a good practice to let npm handle everything somehow. No need to add one more layer.
* It requires more complicated tasks in Gulpfile in order to run.

#### 3. Why to use jspm?

* JSPM is based on the standard of ES2015 modules and System loader API. Currently, Loader API is just the API of browsers and hasn't been able to be parts of ES2015(we only have a proposal from WHATWG for now). But once it becomes a standard specification, integrated with HTTP/2, we can write ES2015 modules without building. 
* But of course, it seems like JSPM is heavier(45k after compile) and not powerful enough compared to Webpack in current phase.  

#### 4. I choose to be a web developer.

* If you try to embrace web technologies, you actually choose a way to embrace changes.
* [A good article to know.](https://jjperezaguinaga.com/2014/03/19/why-cant-we-find-front-end-developers/)

## TODO List(solid requirements)

- [x] Title: “Build test”.
- [x] Paragraph: “This page was built from dynamic content at `time`”, where `time` is the time at build time.
- [x] Button name: 'Click me'.
- [x] The title, paragraph and button text should not be black, but should be the same colour.
- [x] The background of the button should also be the same colour, but 25% lighter.
- [x] A popup modal will be shown if click the button.
- [x] Counter counting up from 0 (at least show the seconds changing).
- [x] Close and reopen the modal.
- [ ] Content’s font-size should be dependant on the screen size.
- [x] Use a build tool (npm/grunt/gulp) to compose your built product.
- [x] Use SASS (scss).
- [ ] Show understanding of variables and functions (lighter colour).
- [ ] Show understanding of mixins (CSS media queries).
- [x] Push the code to Github as a public open source project.
- [x] Add a README to the Github repo containing information about building and running your code.
- [x] A “watcher” task that watches for code changes and builds again.
- [ ] Neatness and documentation.
- [x] Modern practices and technologies. 

## TODO List(further requirements)

- [ ] Unit/Middleware/E2E Test with Karma/Chai/Protractor.
- [ ] Integrate with systemjs-builder.
- [ ] Automatically test, build and deploy(npm/travis-ci/Heroku).
- [ ] Create a yeoman generator for this project.

## License

* [MIT Licensed](http://choosealicense.com/licenses/mit/).

## Author

* Email: sysuhuangye@gmail.com
* Personal website: https://yehuang.me
   
