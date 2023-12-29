export const Questions = [
    {
        id: 1,
        question: 'Which of the following is used in React.js to increase performance?',
        options: ['Virtual DOM', 'Original DOM', 'Both A and B', 'None of the above'],
        answer: 1
    },
    {
        id: 2,
        question: 'What is ReactJS?',
        options: ['Open-source JavaScript back-end library', ' JavaScript front-end library to create a database', 'Free and open-source JavaScript front-end library', ' None of the mentioned'],
        answer: 3
    },
    {
        id: 3,
        question: 'Which of the following acts as the input of a class-based component?',
        options: ['Class',
            'Props', 'Factory', 'None of the mentioned'],
        answer: 2
    }, {
        id: 4,
        question: 'How many elements can a valid react component return?',
        options: ["React doesn't return element", '1 Element',
            'More than 1 element', 'None of the mentioned'],
        answer: 2,
    }, {
        id: 5,
        question: 'Which of the following command is used to Install create-react-app?',
        options: [' npm install create-react-app',
            'npm install -f create-react-app',
            'npm install -g create-react-app',
            'install -g create-react-app'],
        answer: 3,
    }, {
        id: 6,
        question: 'Which of the following is correct about prop in react?',
        options: ['Can be changed inside another component',
            'Can be changed inside the component',
            'Cannot be changed in the component'
            , 'All of the mentioned'],
        answer: 3,
    }, {
        id: 7,
        question: 'Which of the following is used to pass data to a component from outside in React?',
        options: ['props', 'render with arguments',
            'setState',
            'PropTypes'],
        answer: 1,
    }, {
        id: 8,
        question: 'What does JSX stand for? ',
        options: ['JavaScript XML',
            'Java Syntax Extension',
            'JSON Xchange Schema',
            'JavaScript Xerography'],
        answer: 1
    }, {
        id: 9,
        question: 'Which lifecycle method is invoked immediately after a component is rendered on the DOM?',
        options: [' componentDidMount ',
            'componentDidUpdate',
            'componentWillMount',
            'componentWillRender'],
        answer: 1
    }, {
        id: 10,
        question: 'What is the purpose of the "key" prop in React? ',
        options: ['It uniquely identifies a component in an array of components. ',
            'It determines the visual styling of a component. '
            , 'It specifies the route for navigation within a React application. '
            , "It defines the data type of a component's prop. "],
        answer: 1
    },
    {
        id: 11,
        question: 'What is the state of React class component? ',
        options: [' A JavaScript method for sorting arrays.',
            'A built-in object that stores component data. ',
            'A CSS class used for component styling.',
            " A React component's initial render method."],
        answer: 2
    },
    {
        id: 12,
        question: 'Which method is used to update the state of a class component in React? ',
        options: [' this.updateState()', 'this.setState()', 'this.modifyState()', 'this.changeState,'],
        answer: 2
    },
    {
        id: 13,
        question: 'What is the purpose of the React Router library? ',
        options: ['To handle HTTP requests in React applications.', 'To manage and synchronize component states.', 'To manage navigation and routing in React applications.', 'To optimize the performance of React applications. '],
        answer: 3
    }, {
        id: 14,
        question: 'What is the purpose of React Fragments? ',
        options: ['To group multiple components within a single parent component. ', 'To create reusable CSS styles for React components. ', 'To optimize the rendering performance of React components. ', 'To handle asynchronous operations in React applications. '],
        answer: 1
    }, {
        id: 15,
        question: 'Which method is used to render a React component to the DOM? ',
        options: ['renderComponent() ', 'ReactDOM.render() ', 'React.render() ', 'component.render() '],
        answer: 2
    }, {
        id: 16,
        question: 'What is Babel?',
        options: ['JavaScript compiler', 'JavaScript interpreter', 'JavaScript transpiler', 'None of the above'],
        answer: 1
    }, {
        id: 17,
        question: 'What is the significance of the virtual DOM in React? ',
        options: ['It renders components on the server side.', 'It optimizes React components for mobile devices.', 'It provides an in-memory representation of the DOM for efficient updates.', 'It handles animations and transitions in React applications. '],
        answer: 3
    }, {
        id: 18,
        question: 'Which hook is used to add state to functional components in React? ',
        options: ['useState ', 'useEffect ', 'useContext ', 'useReducer '],
        answer: 1
    }, {
        id: 19,
        question: 'What is the purpose of the useEffect hook in React? ',
        options: ['To add state to functional components.', 'To handle component re-renders.', 'To perform side effects in functional components.', 'To handle form submissions in React applications. '],
        answer: 3
    }, {
        id: 20,
        question: 'What is the purpose of the useParams hook in React Router? ',
        options: ['To handle form validation in React.js', 'To retrieve query parameters from the URL', 'To extract URL parameters from a route', 'To manage the state of route transitions '],
        answer: 3
    }, {
        id: 21,
        question: 'How can you access form input values in React.js? ',
        options: ['By using the document.getElementById() method', 'By using the event.target.value property', 'By using the useState hook and setting the initial value', 'By using the useRef hook and the current property '],
        answer: 2
    }, {
        id: 22,
        question: 'What is the difference between state and props in React?',
        options: ['Props are mutable, state is immutable',
            'Both state and props are mutable',
            'Both state and props are immutable',
            'State is mutable, props are immutable'],
        answer: 4
    }, {
        id: 23,
        question: 'What is the purpose of React Router?',
        options: ['To handle routing in React applications',
            'To handle styling in React applications',
            'To handle state management in React applications',
            'To handle data fetching in React applications'],
        answer: 1
    }, {
        id: 24,
        question: 'What is the purpose of Redux in React?',
        options: ['To manage component state in React applications',
            'To manage component styles in React applications',
            'To manage component events in React applications',
            'To manage global state in React applications'],
        answer: 4
    }, {
        id: 25,
        question: 'What is a Redux store?',
        options: ['A single state tree in a Redux application',
            'A collection of multiple state trees in a Redux application',
            'A component in a Redux application',
            'A stylesheet in a Redux application'],
        answer: 1
    }, {
        id: 26,
        question: 'What is the purpose of Redux actions?',
        options: ['To describe changes to the Redux store',
            'To describe changes to component state',
            'To describe changes to component styles',
            'To describe changes to component events'],
        answer: 1
    }, {
        id: 27,
        question: 'What is the purpose of Redux reducers?',
        options: [
            'To specify how component state should change in response to actions',
            'To specify how the state in a Redux store should change in response to actions',
            'To specify how component styles should change in response to actions',
            'To specify how component events should change in response to actions'],
        answer: 2
    }, {
        id: 28,
        question: 'What is the purpose of Higher Order Components (HOCs) in React?',
        options: ['To share data between components',
            'To reuse component logic',
            'To manage component styles',
            'To manage component events'],
        answer: 2
    }, {
        id: 29,
        question: 'What do you mean by ES6?',
        options: ['Javascript 6',
            'Extended Javascript 6',
            'ECMAScript 6',
            'None of these'],
        answer: 3
    }, {
        id: 30,
        question: ' What is the use of React hooks?',
        options: ['To manage state and side effects in functional components',
            'To manage styles in functional components',
            'To manage state and side effects in class components',
            'To manage styles in class components'],
        answer: 1
    },
];