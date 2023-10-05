# MyCoach

**MyCoach** is a mobile application designed to help users track their progress in training, record exercises, and
communicate with their coach. With **MyCoach**, users can keep a training calendar, visualize their progress, and
participate in a community of like-minded individuals.

## Features

MyCoach is a mobile application designed to help users stay on top of their training goals.

**With MyCoach, users can:**

- Record exercises performed during training.
- Keep track of your training calendar.
- Connect with your coach and communicate via chat.
- Share information in the community (posts, photos, videos).
- Interact with others in the community by liking, commenting.
- Manage your progress and see results over time.

## Key Features

- Exercise tracking: record all exercises performed during training, including the number of sets, reps, and weight.
- Training calendar: easily keep track of your training schedule and plan ahead.
- Coach communication: stay in touch with your coach and receive guidance and support.
- Community interaction: connect with others in the fitness community and share your progress.

### Technology

MyCoach is built with the following technologies:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [Recoil](https://recoiljs.org/)

### Running MyCoach

To run MyCoach, you will need to have the following software installed:

- [Node.js](https://nodejs.org/en/) > v16.18.0
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

Once you have the required software, you can follow these steps to get MyCoach up and running:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `cp .env.example .env` to copy environment variables file.
   - set your IP address as a `GRAPHQL_API_URL` host value.
4. Run `npm install` to install the necessary dependencies.

```bash
$ npm install
```

5. Run `expo start` to start the development server.

```bash
$ expo start
```

- If you have made changes to your `.env` file, it may be necessary to clear the bundler's cache to ensure that the
  changes are applied. To do this, you can run the `expo start --clear` command instead of expo
  start. You can read more about this in the Expo
  documentation for [macOS and Linux](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/)
  or [Windows](https://docs.expo.dev/troubleshooting/clear-cache-windows/).

6. Use the Expo app on your phone or an emulator to run the app.

**Note: The steps provided are a general outline, and the actual process may vary based on your setup and environment.**

If you run into any issues or have questions about running MyCoach, feel free to reach out to the development team for
support.

## Roles

The app has two user roles:

#### Student

- Track your progress.
- Participate in the community, and communicate with their coach.

#### Trainer

- Access their students' training calendars.
- Record progress, and offer training times and dates.

## Community

Each user can post some information in the community (posts, photos, videos). The community is selected by users in a
certain radius or from the list of user subscriptions. The user can like the post, comment, and bookmark it.
