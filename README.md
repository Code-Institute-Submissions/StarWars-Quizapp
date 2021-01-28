# **Star Wars Quizapp - A milestone project**

## **Contents**
---

## **Introduction**

Welcome to my second milestone project, the Starwars Quiz app.

I had great success with my first milestone project, Project Sikhism. In my second milestone project, I have tried to expand on 
my knowledge with the hope to create a more interactive experience for users. 

This project will hopefully show some fundamental learning and understanding of JavaScript. Combining JavaScript, HTML and CSS, 
I aim to create an interactive quiz app based on Star Wars.

A large part of the inspiration for this project comes from my love for the Star Wars Universe, and the success of the current TV series, The Mandalorian.
I hope fellow Star Wars fans enjoy the project.

I will outline the steps taken and the philosophy behind the project, from the planning of the project to the development. 

Thank you for viewing this project, I hope you enjoy my attempt at a quiz app.

May the force be with you!

---

## **UXD – User Experience Design**
To help with development, I followed Jason James Garrett’s, “The Elements of User-Experience”. 

The goal of every project should be the provide a positive emotional experience for the user. As developers, it can be easy to get off track with implementations of features, which in theory may seem great, but can cause confusion for users interacting with the project.

The planning and development of the project is split into 5 planes,
- The Strategy Plane
- The Scope Plane
- The Structure Plane
- The Skeleton Plane
- The Surface Plane

I will explain in detail each Planes process of development.

---

## **Strategy Plane**

The Strategy Plane consists of coming up with an idea to help us to better understand the goals of the project.  I focused on coming up with creator goals, first-time visitor goals, and returning visitor goals.

### **Creator Stories** ###

**Creator Goals**, 

- As a creator, I would like the typography in the project to look fun and engaging yet easy to read.

- As a creator, I want to use original imagery in the hero image to invoke a positive emotional response. Particularly from fans of the star wars universe.

- As a creator, I want the project to be responsive across different resolutions.

Having established clear goals for what I would like to achieve with the project as a creator, I did some research amongst friends and fans to better establish what users would like from the project.

### **User Stories** ###

**First-time visitor goals**, 

- As a first-time visitor, I want some introduction to help me understand the purpose of the project.

- As a first-time visitor, I want to be able to navigate to the relevant section I am looking for without having to scroll.

- As a first-time visitor, I want to be able to see some instructions on how to play, before starting the game.

- As a first-time visitor, I would like to see some familiarity with the movies, with either sounds or images.

- As a first-time visitor, I would like to select an answer and know if I selected the correct or incorrect answer with a visual response.

**Returning visitor goals**,

- As a returning visitor, I would like to have my scores saved per session.

From my Creator goals and User stories, it is much easier to understand what features are important to add for a positive user experience versus what I may believe the user would like to see.

As a creator with clearer guidelines, I am better equipped to come up with a design for the project, and plan what the first deployed version would look like, and what features I can add later to enhance the project later.

In the Scope Plane, I will go into more detail about the planning process for the project.

---

## **Scope Plane**

My biggest issue creating the project with the goals I had was whether I could build the project with the lack
of experience I had using JavaScript. This is my first project using JavaScript, and timescale was definitely going to be a 
factor when dealing with issues and bugs.

I decided to start with a minimal viable product on release, allowing me to start gathering feedback. A phased release with additional features would allow me to keep adding features to the project, and keep the project
engaging for returning visitors

My plan for a phased release is 

**Phase 1**

- A simple Home Page, with a navigation menu at the top, and sections for features and instructions.
- A small introduction so the User can understand what the project is. 
- Clear and visible links to the game and highscores pages.
- A simple quiz layout that is easy to understand and use. 
- A final page where the User can save their score, navigate back home or play again. 

**Phase 2**

- Expansion to the quiz with new questions.
- A way for the User to be able to change the colors of the quiz page, perhaps being able to change the colors to red/blue to represent the Sith/Jedi.
- Iconic scrolling text from the movies, to begin the quiz to bring a more nostalgic feeling for fans.

**Phase 3** 

- A contact section for Users to leave feedback and suggestions.
- Game sounds for Users when they select correct/incorrect answers.
- Add characters from the movies to the high scores page, to give the impression to the user they are competing with characters from the movies.

---

## **Structure Plane**

**Colors**

![Star Wars Logo ](https://github.com/Harry-Leepz/StarWars-Quizapp/blob/master/assets/images/starwars-heroimage.png)


Before starting the project, I wanted to use the original Star Wars logo as my hero image. As a fan of the franchise, I understand what it meant to me and what it meant to other fans. I used the Yellow/Black color combination throughout the project, and just added white as a contrasting color. I felt the color combination
of White/Black/Yellow was simple and clean. 

I have always been one who prefers Dark Mode on browsers when available. I decided to keep the Black background throughout the project while using Yellow/White as font colors.

**Typography**

The fonts I chose for this project are Luckiest Guy and Roboto. 
Roboto personally looks very modern, very easy on the eyes, and simple to read. It isn't too distracting and doesn't take away from the other contents on the page.
Luckiest Guy is a new font I had never used before. I wanted to use a font that was bold, engaging, and fun. And this font definitely stood out as a great font to use as a header 
and contrast to Roboto. 

![Fonts used](https://github.com/Harry-Leepz/StarWars-Quizapp/blob/master/documentation/fonts.png)

The project overall is responsive across different resolutions, I decided to add CSS media queries to make the fonts on the quiz page smaller to keep all the content on a single page without the need to scroll.

I used Bootstrap as the main framework to help the project stay responsive. Bootstrap is a framework I am becoming a lot more familiar with, Bootstraps built-in class's allowed me to spend more time on
the aspects of the project that required more attention.

I wanted to add a footer section to the home page. I wanted to keep it simple and just added standard copyright text and used font awesome icons to link to the associated social media page. 

---

## **Skeleton Plane**

Below is a link to the project wireframes.

[Project Wireframes](https://github.com/Harry-Leepz/StarWars-Quizapp/blob/master/documentation/wireframes.pdf "Star Wars Quiz App Wireframes.")

For this project, I tried to stay as close to the wireframes that I designed as I could, but some changes were made due mainly to my lack of JavaScript and how to implement certain features
and some changes that I had originally overlooked that would be needed.

**Home Page**

- The home page remained relatively the same as designed in the Wireframes. The only change that I added was I added a High Scores button that links to the High Scores page. 
This was an oversight on my part when designing the wireframes and was something I added during development.

**Quiz Page**

- On the Quiz Page, I made two changes. 
    - I decided to remove the Footer section on the Quiz Page. During development, I realized it didn't make much sense for the User, why would the User click a social link in the middle of the quiz. It also helped with me trying the keep the whole quiz page on one view height size of the page, without the need of the user having to scroll down.
    - Instead of a timer text in the top left, I changed it more to a progress section, that gave the user information on how many questions are remaining. This was due to me struggling with JavaScript and correctly being able to implement 
    the timer with my lack of knowledge.

**Quiz Final Page** 

- This page was not included as part of the project wireframes and was not something I had considered. It was an oversight on my part, and during development, I realized I needed a page
after the user had finished the quiz. This page would provide the user with options of saving their score, playing again, going back home, and a link to the high scores page. 

**High Scores Page**

- The High Scores page stayed relatively the same as the project wireframes. Subtle changes were the removal of the footer, and the increasing the number of high scores from 4 to 6. I removed the Play Again button from the page and kept the link back to the Home Page. This was in response to feedback when sharing the project during development.  

---

## **Surface Plane**
---

## **Technologies Used**
---

## **Testing**
---

## **Deployment**

### **Github**

This project is deployed using GitHub pages using the following process,

**Deploying a GitHub Repository via GitHub Pages**

1. In your Repository section, select the Repository you wish to deploy.
2. In the top horizontal Menu, locate and click the Settings link.
3. Inside the Setting page, around halfway down locate the GitHub Pages Section.
4. Under Source, select the None tab and change it to Master and click Save.
5. Finally once the page resets scroll back down to the GitHub Pages Section to see the following message "Your site is ready to be published at (Link to the GitHub Page Web Address)". It can take time for the link to open your project initially, so please don't be worried if it down not load immediately.

**Forking the Github Repository**

You can fork a GitHub Repository to make a copy of the original repository to view or make changes without it affecting the original repository.

1. Find the GitHub repository.
2. At the top of the page to the right, under your account, click the Fork button.
3. You will now have a copy of the repository in your GitHub account.

**Making a Local Clone**

1. Find the GitHub Repository.
2. Click the Code button
3. Copy the link shown.
4. In Gitpod, change the directory to the location you would like the cloned directory to be located.
5. Type ```git clone```, and paste the link you copied in step 3.
5. Press Enter to have the local clone created.

---

## **Credits**
---