# MyCoach Admin Service

## Introduction

**MyCoach** is a mobile application designed to help users track their progress in training, record exercises, and communicate with their coach. With **MyCoach**, users can keep a training calendar, visualize their progress, and participate in a community of like-minded individuals.

**The admin service** for MyCoach provides administrators with tools to manage the exercises and training complexes available in the app.

## Features

#### The following features are available in the MyCoach admin service:

- Authorization.
- Change theme.
- Change language.
- Exercise list.
  - Filter.
  - Search.
- Create exercise.
  - Name and preview image.
  - Muscle selection.
  - Exercise type and instructions.
  - Additional media upload.
  - Preview created exercise.
- View exercise.
- Edit exercise.
- Duplicate exercise.
- Delete exercise.
- Training complex list.
  - Filter.
  - Search.
- Open training complex.
- Create training complex.
  - Add exercises.
  - Exercise list.
  - Save.
- Edit training complex.
- Duplicate training complex.
- Delete training complex.

## Technology

##### The MyCoach admin service is built with the following technology stack:

- [Vue](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://axios-http.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vue-i18n](https://kazupon.github.io/vue-i18n/)
- [Element-Plus](https://element-plus.org/en-US/)

### Running MyCoach Admin Service

#### To run MyCoach admin service, you will need to have the following software installed:

- [Node.js](https://nodejs.org/en/) > v16.18.0

#### Once you have the required software, you can follow these steps to get MyCoach up and running:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.

```bash
$ npm install
```

4. To run the project, you need to create a .env file in the root directory of the project and provide the required variables. You can copy the .env.example file in the root directory by using the following command:

```bash
$ cp .env.example .env
```

5. Once the installation is complete and file is create, start the development server by running the following command:

```bash
$ npm run dev
```

6. Open a web browser and navigate to http://localhost:5173/ to access the MyCoach admin service.

#### Note: The steps provided are a general outline, and the actual process may vary based on your setup and environment.

If you run into any issues or have questions about running MyCoach, feel free to reach out to the development team for support.

#### Contributions are welcome and appreciated. To contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your changes `git checkout -b my-changes`.
- Commit your changes `git commit -am 'Add some changes'`.
- Push to the branch `git push origin my-changes`.
- Create a new Pull Request.
