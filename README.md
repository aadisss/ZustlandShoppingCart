const readmeContent = `
# React Native Zustand Example

This is a simple React Native project showcasing the usage of Zustand, a small and fast state management library for React. It demonstrates how to manage and share state between components using Zustand in a mobile application.

## Zustand

[Zustand](https://github.com/pmndrs/zustand) is a state management library for React that aims to provide a simple and scalable solution. It is built around the concept of stores, which encapsulate a piece of state and provide methods to update and access that state. Zustand promotes a minimalistic and hook-based approach, allowing you to define and consume stores with ease.

## Features

- Add items to a cart
- View the cart

## Prerequisites

- Node.js
- React Native development environment

## Getting Started

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/your-repo.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd your-repo
   \`\`\`

3. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

4. Start the React Native development server:

   \`\`\`bash
   npx react-native start
   \`\`\`

5. Run the app on Android or iOS:

   \`\`\`bash
   # For Android
   npx react-native run-android

   # For iOS
   npx react-native run-ios
   \`\`\`

## Usage

The app consists of a home screen where you can enter the name and price of an item and add it to the cart. You can then navigate to the cart screen to view the added items.

The state management is handled using Zustand. The \`useCartStore\` hook provides access to the cart state and actions to add items to the cart.

## Folder Structure

- \`src\`: Contains the source code files
  - \`components\`: Reusable components used in the app
  - \`screens\`: Top-level screens of the app
  - \`store\`: Zustand store and related logic
  - \`navigation\`: App navigation configuration
  - \`App.js\`: Entry point of the app
- \`App\`: Android and iOS project files

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
`;


