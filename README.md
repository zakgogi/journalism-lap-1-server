# Ajay, Sammie & Zak Lap 1 Project - Server

## Description

For this project we were tasked with creating a community journaling website. To do this our wesite had to provide the following features:

- Users should be able to visit the website and anonymously post journal entries.
- Users should be limited to how many characters they can put in an entry.
- Users should be able to add gifs from giphy in an entry.
- Users should be able to view other peoples' entries.
- Users should be able to react to other peoples’ entries with an emoji.
- Users should have three emojis to choose from.
- Users should be able to comment on other people’s entries.

This readme will detail how to set-up and install the server side of this application, the technologies used as well as the wins and challenges we came across druring this project. If you would like to acess the client side website it can be found [here](https://sazjournalismproject.netlify.app/). You can also check out the client repo [here](https://github.com/zakgogi/journalism-lap-1-client)

## Installation & Usage

### Installation

- In order to use Heroku we signed up to an account and entered heroku login in the command line.
- After successfully logging in use the heroku dashboard to create an app.
- Get the remote url for that app and add it as a remote within git using `heroku git:remote -a YOUR-APP-NAME`.
- To deploy on heroku use command `git push heroku main`.

### Usage

- The data.json needs to be altered locally to preserve changes since the Heroku server refresehes every 24 hours and we aren't using a service like AWS.
- Navigate to [https://journalism-project-lap-1.herokuapp.com/](https://journalism-project-lap-1.herokuapp.com/) to view the main directory with all the data.
- Navigate to [https://journalism-project-lap-1.herokuapp.com/random](https://journalism-project-lap-1.herokuapp.com/random) to view 3 random objects from the data.
- Navigate to [https://journalism-project-lap-1.herokuapp.com/data/Sport](https://journalism-project-lap-1.herokuapp.com/data/Sport) for example to view objects with the tag of Sport, and replace the word Sport with one of the other tag categories to view the data for that tag.

## Technologies used

- Heroku
- Github
- Jest
- VScode
- Supertest

## Wins and Challenges

### Wins

- Successfully deployed heroku.
- Have the required test coverage.
- Successfully created routes we needed, including a random one that pulls 3 random articles.
- Put and post requests work as desired.

### Challenges

- When running the tests for the server locally, when testing the put requests for example, the way we set it up means it actually writes to the Json back end when running the test suite. Tried to figure out how to correct this (potentially using mock functions) but ended up just sacrificing one post to gain a like and a comment every time the test suite is run (not the end of the world).
- Heroku refreshes every 24 hours so unable to preserve our changes, our writing methods that worked locally don't work when deploying using Heroku (would likely have to add a service like AWS.)

# Checkout our clientside from the link above!

# Enjoy! 😁
