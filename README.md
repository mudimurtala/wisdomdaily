# WisdomDaily

### Bridging Generations through Meaningful Conversations

---

## Project Overview

**WisdomDaily** is a social media platform designed to rebuild and strengthen the relationship between the younger generation (youth/teenagers) and elders (parents, guardians, community leaders). The platform provides a space for both groups to share wisdom, advice, and knowledge while fostering mutual respect and understanding.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Firebase Configuration](#firebase-configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. **User Registration and Authentication**:
   - Users can sign up and log in using Firebase Authentication.
   - Two main user categories: Younger Generation (youth) and Elders.
   
2. **Discussion Forums**:
   - Elders share valuable advice and wisdom.
   - Youth post their concerns, ideas, and questions for elders.

3. **Resource Library**:
   - A section for storing articles, books, or videos for future reference.

4. **Interactive Feedback**:
   - Users can like, comment, and respond to posts in a respectful environment.

5. **Notification System**:
   - Users are notified of feedback or responses to their posts.

---

## Technologies

### Front-End
- **HTML5**: Structure and content of the web pages.
- **CSS3**: Styling and layout of the web app.
- **JavaScript (Vanilla)**: Core scripting and functionality.

### Back-End
- **Firebase Firestore**: NoSQL cloud database for data storage.
- **Firebase Authentication**: User authentication (sign up, log in).
- **Firebase Hosting**: For hosting and deploying the app.

### Tooling
- **Webpack**: Module bundler for managing and bundling assets.
- **Git/GitHub**: Version control and project repository management.

---

## Installation and Setup

### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [Firebase CLI](https://firebase.google.com/docs/cli) for managing Firebase services
- A GitHub account for version control

### Steps to Install

1. **Clone the repository**:
```bash
   git clone https://github.com/yourusername/wisdomdaily.git
   cd wisdomdaily
```
2. **Install dependencies**: First, initialize the project:
```bash
    npm init -y
```
Then, install project dependencies (Webpack, Firebase):
```bash
    npm install webpack webpack-cli firebase @firebase/app @firebase/firestore --save-dev
```
3. **Set up Firebase**: Make sure to log in to Firebase and initialize Firebase for the project:
```bash
    firebase login
    firebase init
```
4. **Start the development server**:
```bash
    npm run start
```
## Contributing
Feel free to fork this repository and contribute by submitting pull requests. For major changes, please open an issue to discuss what you would like to change.

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License



