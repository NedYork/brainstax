# BrainSTAX

[BrainSTAX][http://brainstax.herokuapp.com] is a web application for users to study and share flashcards. Inspired by BrainScape, BrainSTAX allows users to upload their own flashcards as an excel spreadsheet, create flashcards, and discover decks by other students. BrainSTAX implements a spaced-repetition algorithm, which reorders a user's set of flashcards causing cards to appear less frequently as user masters each card until all cards are mastered. This [learning method] [https://en.wikipedia.org/wiki/Spaced_repetition] allows a user to maximize retention.

BrainSTAX is a personal project by Ned He.

## Features

- OmniAuth allows users to login from Facebook.
- User accounts with secure authentication using BCrypt password digests and authenticity tokens.
- Allows users to create and delete subjects, decks, and cards.
- CSV file parsing for user uploaded flashcards and persists cards to database.
- Implements spaced-repetition algorithm on front-end to dynamically re-sequence a user's set of flashcards.

## Project Design

BrainSTAX was designed and built in two weeks.

## Technology

BrainSTAX is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [Frontend technology][frontend]

## Future Implementations

BrainSTAX in its current stage is an MVP. Ideally, I'd like to implement some of the following features.

- Search and subscribe to other user's subjects
- Can keep subjects private
