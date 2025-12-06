# 📝 Todo App

A modern, feature-rich todo application built with React 19, featuring form handling, React Hooks, and comprehensive testing coverage.

## ✨ Features

- ✅ Create, read, update, and delete todos
- 🎯 Clean and intuitive user interface
- 🔄 Real-time state management with React Context
- 🪝 Custom React Hooks for reusable logic
- 🧪 Comprehensive test coverage with React Testing Library
- 📱 Responsive design
- ⚡ Built with modern React 19 features

## 🚀 Technology Stack

- **Framework:** React 19.2.0
- **Language:** JavaScript
- **Build Tool:** React Scripts 5.0.1
- **Testing:** React Testing Library, Jest DOM
- **State Management:** React Context API
- **Custom Hooks:** React Hooks

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher recommended)
- npm (v6.0.0 or higher) or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
todo-app/
├── public/              # Static files and HTML template
├── src/
│   ├── components/      # Reusable React components
│   ├── context/         # React Context for state management
│   ├── hooks/           # Custom React Hooks
│   └── ...             # Other source files
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- Hot-reloading enabled - page reloads when you make changes
- Displays lint errors in the console

### `npm test`

Launches the test runner in interactive watch mode.
- Runs all test suites
- Watch mode automatically re-runs tests on file changes
- See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`

Builds the app for production to the `build` folder.
- Correctly bundles React in production mode
- Optimizes the build for best performance
- Minifies files and includes hashes in filenames
- Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**⚠️ Note: this is a one-way operation. Once you `eject`, you can't go back!**

This command removes the single build dependency and copies all configuration files into your project for full control. Only use this if you need custom configuration beyond what Create React App provides.

## 🧪 Running Tests

The project includes comprehensive test coverage using React Testing Library and Jest.

```bash
# Run tests in watch mode
npm test

# Run tests with coverage report
npm test -- --coverage

# Run tests in CI mode (single run)
CI=true npm test
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

The app can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `build` folder or connect your repository
- **GitHub Pages**: Use the `gh-pages` package
- **Heroku**: Use the Node.js buildpack
- **AWS S3**: Upload the `build` folder contents

For detailed deployment instructions, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## 🏗️ Built With Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), providing a modern build setup with no configuration required.

### Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://react.dev/)
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Write clean, readable code
- Follow React best practices and hooks guidelines
- Add tests for new features
- Ensure all tests pass before submitting PR
- Update documentation as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

If you encounter any issues, please [open an issue](../../issues) on GitHub.

## 📞 Support

For questions and support, please open an issue in the GitHub repository.

---

Made with ❤️ using React