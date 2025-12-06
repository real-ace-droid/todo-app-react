# 📝 Todo App

A modern, feature-rich todo application built with React 19, featuring custom hooks, context API for state management, and comprehensive testing with React Testing Library.

## ✨ Features

- ✅ **Task Management** - Create, update, and delete todo items
- 🎯 **Form Handling** - Intuitive form-based task input with validation
- 🔄 **React Hooks** - Leverages custom hooks for reusable logic
- 🌐 **Context API** - Global state management for seamless data flow
- 🧪 **Comprehensive Testing** - Full test coverage with React Testing Library
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- ⚡ **Performance Optimized** - Built with React 19's latest performance enhancements

## 🚀 Technology Stack

- **Frontend Framework:** React 19.2.0
- **Language:** JavaScript
- **State Management:** React Context API
- **Testing:** React Testing Library & Jest DOM
- **Build Tool:** React Scripts 5.0.1
- **Performance Monitoring:** Web Vitals

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn

## 🛠️ Installation

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
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
todo-app/
├── public/              # Static files and assets
├── src/
│   ├── components/      # Reusable React components
│   ├── context/         # Context API providers and consumers
│   ├── hooks/           # Custom React hooks
│   └── ...             # Other source files
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser
- The page will reload when you make changes
- You may also see any lint errors in the console

### `npm test`

Launches the test runner in interactive watch mode.
- Runs all test suites
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`

Builds the app for production to the `build` folder.
- Correctly bundles React in production mode
- Optimizes the build for the best performance
- The build is minified and the filenames include the hashes
- Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and give you full control over configuration files.

## 🧪 Testing

This project uses React Testing Library for component testing. The testing suite includes:

- Component unit tests
- User interaction tests
- Integration tests
- DOM manipulation tests

Run tests with:
```bash
npm test
```

For coverage report:
```bash
npm test -- --coverage
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

The app can be deployed to various platforms:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `build` folder to [Netlify](https://app.netlify.com/)
- **GitHub Pages**: Follow [this guide](https://create-react-app.dev/docs/deployment/#github-pages)
- **Heroku**: Use the [create-react-app buildpack](https://github.com/mars/create-react-app-buildpack)

For detailed deployment instructions, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Standards

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)

## 📄 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons and design inspiration from the React community
- Testing utilities from [Testing Library](https://testing-library.com/)

---

**Note:** This is a React 19 application. Make sure you're using compatible versions of all dependencies.