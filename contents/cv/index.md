---
title: Curriculum Vitae
author: karl
template: article.pug
---

# Karl O'Keeffe

* London, United Kingdom
* [karl@monket.net](mailto:karl@monket.net)
* [https://monket.net](https://monket.net)
* [CV as PDF](Karl%20O'Keeffe%20-%20CV.pdf)


I'm a senior software developer with a front end focus.

## Introduction

I’m a senior developer with over 15 years of experience across a variety of businesses and roles (e.g. team lead, front end, server side, tooling, dev ops).

I’ve built large web apps in a variety of frameworks and languages (you see a lot come and go in 15 years!). Most recently I’ve been working with React and TypeScript, a very productive combination. I have lead technology transitions in a sustainable way, helping teams switch to modern tech and practices without slowing down development speed. I’ve introduced techniques such as state charts to help bring rigour and tame the complexity of UI development.

I've also been a team lead, empowering teams to make excellent technical decisions and helping them grow as individuals. I’ve reworked hiring processes to help bring in the best team members, and run regular tech discussions to share knowledge and experience and help teams grow. Outside of individual teams I’ve given a talk at Facebook on the benefits of Storybook as a dev and test tool.

My passion for providing the best user experiences has driven me to work on all levels on the tech stack including server side, tooling, and dev ops. I’ve built everything from cloud functions running Node to PHP servers with smart caching.  I’ve even built a custom browser testing framework to support a complex app that spans multiple domains and authentication strategies.

On the tooling side I’m passionate increasing developer productivity by speeding up feedback loops (using tools like Storybook and hot reloading). My biggest contribution to tooling was probably writing the JSX formatting in Prettier, a tool now used by most teams writing React. If you don’t like how React is formatted now, that is my fault and I’m sorry 😂

## Experience

### Senior Developer (Contract) | Third Space Learning/Matr, London

_October 2018 - Present_

Third Space Learning offers 1-to-1 online maths tutoring for schools and at home under both the Third Space Learning and Matr brands.

#### Achievements

- Built online classroom web app in React and TypeScript, using WebRTC for audio and web sockets for real time message passing. Hit our 1 month deadline and released to customers with no major issues.
- Added support for third party solutions for audio (with Twilio) and message passing (with PubNub), using feature flags to allow quick switching between available solutions.
- Used React hooks and context to provide easy time travel functionality to whiteboard UI components.
- Built out server side functionality in Node running on Google Cloud functions to manage secure interactions with Twilio, PubNub, and GCP Storage.
- Improved site load speed from 20s to 2s by migrating from Create React App to Next.js utilising server rendering, and bundle splitting.
- Started building out a React based component library to be used across the app.
- Built a custom end to end testing framework based on Jest and Puppeteer to test in browser with automated screenshots and logging.
- Built a client/server logging library in TypeScript that support browser console logging and batched sending to the server.
- Prototyped a React based whiteboard UI using Immer patches to provide real time shared interaction with eventual consistency.

#### Technologies Used

`react`, `next.js`, `typescript`, `node`, `redux`, `redux-saga`, `material-ui`, `webpack`, `es6`, `jest`, `bitbucket`, `twilio`, `pubnub`


### React Consultant (Contract) | Funding Xchange, London

_Jan 2020 - Feb 2020_

Funding Xchange is marketplace to connect small businesses with lenders.

I was brought in on a short term contract to kick start a transition to React.

#### Achievements

- Detailed potential migration routes (embedded iframe/route splitting/integrating into existing monolith).
- Detailed React build strategies (Create React App/Next.js/custom Webpack & Babel config).
- Detailed styling options available (CSS modules/Styled-JSX/existing monolith CSS).
- Set up eslint and CI guard rails to assist with good code practices.
- Mentored members of the team on React development best practices and patterns (none of them had used React before).
- Built a custom mobile optimised version of Storybook to work with constraints from their existing codebase.
- Built some components to demonstrate good use of Storybook, testing, and React hooks.


#### Technologies Used

`react`, `storybook`, `eslint`, `prettier`, `axios`, `jest`


### Senior Developer (Contract) | Sky, London

_July 2017 - October 2018_

Sky is a multinational media company empowing customers to watch content at home and on all their devices.

#### Achievements

- Built functionality for the Electron based Sky Go Desktop app.
- Took charge of the hiring process, introducing a new technical test and stronger evaulation of tech skills and cultural fit.
- Introduced yarn workspaces, reducing duplication in node_modules and bringing unit test run time down from 9 minutes to 1 minute.
- Systematically fixed flaky end to end tests and added automated re-running, this reduced PR merge time from 4+ hours to 20 minutes.
- Introduced POEditor to streamline the translation process. The was so successful it was immediately adopted by the Sky Go mobile team.
- Pioneered the use of state machines (based on XState) with Redux Saga to manage async interactions. Extracted into a work in progress library https://redux-saga-state-machine.netlify.com
- Set up a fortnightly tech retrospective to help empower developers to suggest and implement technical improvements.

#### Technologies Used

`react`, `javascript`, `electron`, `redux`, `redux-saga`, `xstate`, `jest`, `webpack`, `es6`, `jenkins`

### Team Lead & Front End Developer | Geckoboard, London

_November 2015 – July 2017_

Geckoboard helps companies turn their key performance data into beautiful, accessible KPI dashboards that keep teams informed, motivated and data-driven.

#### Achievements

- Lead a team of 6 (one of the two dev teams at Geckoboard). Including regular 1 to 1's with team members, and advocating for the team to the leadership group.
- Mentoring junior developers and leading retrospectives.
- Introducing Storybook for rapid dev feedback, and improved testing. I gave a talk on this at Facebook.
- Migrating a custom flux implementation to Redux.
- Built a framework in Jest for testing async code synchronously (using Lolex, Bluebird, and Babel to mock clocks, promises, and async/await).
- Implemented a new layout strategy in Prettier to revamp how JSX code is formatted. Done during Geckboard's "innovation" days.
- Re-built Geckoboard's automated chart labelling algorithm in D3.

#### Technologies Used

`react`, `javascript`, `es6`, `redux`, `sass`, `prettier`, `webpack`, `d3`, `storybook`

### Lead Front End Developer | Qumu, London

_April 2010 – November 2015_

Qumu provide a web app for businesses to create and share videos and presentations. This is used by a diverse range of clients from small businesses to multinational banks.

#### Achievements

- Built embeddable video widgets using CoffeeScript and PHP. I built the client and server components. Implemented a stale-while-revalidating caching layer.
- Built a deploy process to pre-populate cache entries to ensure no drop in performance post release.
- Incrementally transitioning a custom UI framework to Angular. We approached this inside out, graduly migrating the UI while still regularly releasing and adding new features.
- Desiging a new REST based API. Initially used by customers, we migrated the UI to this and decomissioned the old API.

#### Technologies Used

`angular`, `javascript`, `coffeescript`, `jquery`, `less`, `jenkins`, `html`, `css`, `php`

### Front End Web Developer | 7 Digital, London

_May 2008 – April 2010_

7digital sell music online, direct to the consumer at 7digital.com, and business to business. They offer bespoke tailored sites and white label stores.

#### Achievements

- Building an online music locker in JavaScript using ExtJS.
- Created an infinite scrolling component to make it quick to scroll through many thousands of songs.
- Used qUnit and JS Test Driver to run automated tests across multiple browsers simultaneously.
- Wrote UI and server side components using C#.
- Managed a remote team building the desktop download manager app.

#### Technologies Used

`javascript`, `jquery`, `extjs`, `qunit`, `jstestdriver`, `teamcity`, `html`, `css`, `balsamiq`, `c#`, `ruby`, `cucumber`

### Front End Web Developer | CWA New Media, New Zealand

_June 2006 – March 2007_

CWA New Media develop web sites for education. They run TKI.org.nz, the largest education portal in New Zealand.

#### Achievements

- Built a JavaScript based timesheets system with automated saving using ajax calls.
- Built and launched a redesigned Digital Conversations site with embedded videos.
- Produced a Firefox plugin to automate switching between live and staging server to facilitate faster regression testing.
- Built a custom HTML to Markdown converter. This reduced the time to make edits on the site by a factor of 6.

#### Technologies Used

`javascript`, `xhtml`, `css`, `php`

### User Interface Consultant (Contract) | Philips, Singapore

_April 2006 – May 2006_

Philips is a huge consumer electronics company, developing a wide range of electronic devices including televisions.

This was a short contract to build a prototype smart TV interface.

#### Achievements

- Built a smart TV interface in Opera mobile to show off the capabilities of a new interactive TV chip.
- The UI included TV channel browsing, on-demand movies, split screen web browsing, and a music player.
- Used pre-loading of images and data to provide immediate feedback to user interactions (no interminable loading spinners!).
- Add support for SD and HD TVs.

#### Technologies Used

`javascript`, `opera`, `jsp`, `java`, `philips-tv-api`

### Systems Engineer | Formicary, London

_June 2004 – June 2005_

Formicary provide IT solutions for the Financial Services industry. Providing both bespoke solutions, and customisable software products.

#### Achievements

- Created the Java Swing UI for a bond trading app. This was multi-threaded for responsiveness and non-modal allowing multiple trades at a time.
- Developed a browser based chat client using COMET long polling to provide instant push of messages to every client.
- Built a server side data processing app in Java using SwiftMQ to provide eventually reliable data transfer between disparate systems.

#### Technogogies Used

`java`, `swing`, `swiftmq`, `html`, `css`, `javascript`

## Education

**MEng Computing with Artificial Intelligence**, Imperial College London, 1999 – 2003

1st Class Honours, top five in the year.

### Courses Taken

Artificial Intelligence I/II, Operating Systems I/II, Software Engineering I/II/III, Architecture I/II, Databases I/II, Networks and Communications, Compilers, Distributed Systems, Robotics, Simulation and Modelling, Concurrent Programming (and Logic), Mathematical Methods and Graphics, Natural Language Processing, Multi Agent Systems, and many logic courses.

### Projects Undertaken

* Group project redesign of departmental website.
* Masters Thesis on automated music analysis.

## Projects

**Prettier**, [https://github.com/prettier/prettier](https://github.com/prettier/prettier)

A code formatter for JavaScript (and other languages). Prettier is an open source project that I have contributed to. I focused on improving the formatting of JSX.

The improvements I made to JSX formatting in Prettier is probably the most impactful work I've done (in terms of number of people who benefit). Prettier is now used by most teams that use React.

**React Storybook Talk**, [https://www.youtube.com/watch?v=UxbQ-cGnoCE](https://www.youtube.com/watch?v=UxbQ-cGnoCE)

An introduction to React Storybook, what it is, how to use it, and some of the benefits we have seen from adopting it here at Geckoboard.

A talk I gave as part of the React London Meetup at the Facebook offices.

**React Async I/O Testbed**, [https://github.com/karl/react-async-io-testbed](https://github.com/karl/react-async-io-testbed)

This repo attempts to recreate the the IO demo from Dan Abramov's Beyond React 16 talk using the React 16. It shows how to implement suspense style async UI behaviours using React 16.

**Redux Saga State Machine**, [https://redux-saga-state-machine.netlify.com/](https://redux-saga-state-machine.netlify.com/)

A prototype of a library to build a Redux Saga based state machine runner. Built upon xstate and Redux Saga.

This was borne out of some of the work I did while at Sky.

Note I built this before I had experience with TypeScript, it doesn't reflect how I now write TypeScript!

**Dancing Monkeys**, [https://monket.net/dancing-monkeys/](https://monket.net/dancing-monkeys/)

Dancing Monkeys was my individual project while at Imperial College London. It is an application to automatically generate step files for DDR (Dance Dance Revolution)…

Created as part of my final year project at university. Released as open source and maintained for a few years by another developer.
