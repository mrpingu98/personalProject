export const technical = {
    mainTitle: 'Aim of project',
    mainDescriptionOne: 'My aim is to be a full-stack developer. When I started this project I had only a basic understanding of the full layout of an app (front-end, back-end, deployment, etc). So I set myself the challenge of trying to develop and deploy one.',
    mainDescriptionTwo: 'Where I had gaps in my knowledge, I went away and did self-learning, then came back and applied what I had learnt. I’ve found making this actually quite fun - understanding the configuration, how to deploy, etc. I love problem-solving and getting technical, which this project has allowed me to do.',
    mainDescriptionThree: 'As this is a side-project there are parts of my code that probably don’t follow best practices. The main aim of this project was to give me a space to apply my learning. E.g. for the front-end I’m aware there’s parts where I could make a component to increase efficiency, I just haven’t had the time/decided to focus on implementing a new feature/learning. E.g. For the back-end I’ve implemented error handling, but it would probably be a lot more thorough/laid out differently in a real project. When I have time I do try to update/clean-up my code though.',
    mainDescriptionFour: 'Below is a summary of the technical skills I’ve applied/learnt:',
    setupTitle: 'General Setup',
    setupDescriptionOne: 'JIRA - made a personal board to create tickets and track progress. Tickets labelled as ‘MS<number>’',
    setupDescriptionTwo: 'Github - Simple branching strategy (task branch off main, pushed back into main). Branch naming based on JIRA ticket Id ‘MS<number>’',
    frontEndRepo: 'Front-end repo (React / Typescript): ',
    frontEndRepoUrl: 'https://github.com/mrpingu98/personalProject',
    backEndRepo: 'Back-end repo (.NET 8 / C#): ',
    backEndRepoUrl: 'https://github.com/mrpingu98/personalProjectAPI',
    pagesTitle: 'Pages',
    muzikPage: 'Muzik - Some favourite songs of mine. Will need to update this to cache the fetched spotify data as takes too long to load on every refresh of the page.',
    yourSpotify: 'Your Spotify - Summary of your Spotify listening. Have to authorise access to your Spotify data in the My Profile area.',
    myProfile: 'My Profile - Eventually want to add login functionality and this is where a users profile will be. Has authorisation for spotify data and a light/dark theme for now.',
    merch: 'Merch - Pretend merchandise store which is fetching data from my database. My back-end project was based around the idea of a online shopping page. Still a work in progress so might have "filler" data in some parts',
    admin: 'Admin - Page where you can add/edit/delete products. Basic login functionality has been added to my app, where I have made one User. I use this login to give me access to these Authorised endpoints. Eventually will let people register but need to add Roles, e.g. register as a "user" so they can add products to their own baskets and buy them / register as an "admin" to update the available products.',
    frontEndTitle: 'Front-End',
    frontEndDescriptionOne: 'Javascript, Typescript, MUI (Material UI)',
    frontEndDescriptionTwo: 'Redux',
    frontEndDescriptionThree: 'React hooks - useState, useEffect, useCallback, useMemo, usRef, useContext, useTransition, useDeferredValue',
    frontEndDescriptionFour:'Custom hooks',
    frontEndDescriptionFive: 'React Query - useQuery and useMutations to handle API requests and cache data + error handling with try/catch statements',
    frontEndDescriptionSix: 'Basic unit testing using Cypress ',
    frontEndDescriptionSeven: 'Connecting to Spotify API - currently using PKCE Authentication. Once login functionality has been created for the app, will switch to using oAuth2 with token authentication',
    backEndTitle: 'Back-End',
    backEndDescriptionOne: 'Basics of OOP Programming ',
    backEndDescriptionTwo: 'Configuring and setting up a Web API project (handling Nuget packages, understanding configuration of Program.cs file - services, middleware etc) ',
    backEndDescriptionThree:  'Controller, Handler, Repository structure ',
    backEndDescriptionFour:  'Dependency Injection ',
    backEndDescriptionFive:  'DbContext',
    backEndDescriptionSix:  'Database migrations',
    backEndDescriptionSeven:  'Entity Framework Core',
    backEndDescriptionEight:  'Using swagger to test endpoints',
    backEndDescriptionNine:  'Custom error messages',
    backEndDescriptionTen:  'Basic Login functionality using Microsoft.EntityFrameworkCore.Identity / Authorised endpoints / oAuth2 flow. At the moment I have made one User Account - you can only add/edit/delete products if you log into this account.', 
    azureTitle: 'Azure',
    azureDescriptionOne: 'Deploying a Web App - never done this before / had any idea of how to do this, so had to research and understand how it all worked. Connected to my github repo to create an Azure CI/CD Pipeline. Configured yaml file for certain deployment settings (e.g. not automatically deploying whenever a push is made into main branch)',
    azureDescriptionTwo: "Deploying a Web API + SQL Server. Understand how to connect/view the SQL Db I had created (whitelisting IP Address, using Azure Data Studio). Initially app wasn’t running so had to use Application Logs to debug (was issues with my db such as not connecting correctly or expecting the wrong data types)"
}