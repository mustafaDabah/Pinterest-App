# React Native Pinterest App

## Description

This is a training project I created to learn how to use React Native. The purpose of this app is to mimic the functionality of Pinterest. Although it is currently not connected to a backend, I plan to integrate it with a backend in the near future.

## Technologies Used

- React Native
- TypeScript

## Project Structure

The project is organized into several key directories:

### Components

This directory contains reusable components used throughout the app. The components are further divided into subdirectories based on their functionality, such as Auth, UI, and ProfileScreen.

### Constants

The Constants directory contains files that define various constants used in the app. These include Colors, Routes, and an index file.

### Dark Mode

The Dark Mode directory implements theme and context API functionality for supporting dark mode in the app.

### Hooks

The Hooks directory contains custom hooks used within the app. These hooks provide reusable logic and enhance the functionality of the app.

### Navigation

The Navigation directory handles the navigation within the app. It includes separate navigators for authentication (Auth Navigator), the main app screens (Root Navigator), and the tab-based navigation (Tab Navigator).

### Screens

The Screens directory contains the individual screens of the app. It is further divided into subdirectories based on the screen type, including Auth Screens, Stack Screens, and Tab Screens.

## Screens Included

- Home
- Upload
- Profile
- Single Pin
- Settings
- Login
- Signup

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm start` or `yarn start`
4. Use a compatible emulator or connect your physical device to run the app.

Please note that since the app is not connected to a backend, certain features may not be fully functional. However, you can navigate through the screens and explore the app's user interface.

## Contribution

If you would like to contribute to this project or have suggestions for improvements, feel free to submit a pull request or open an issue in the repository. Your contributions are greatly appreciated!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
