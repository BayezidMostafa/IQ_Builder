import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Roots from './components/Roots/Roots';
import Statistics from './components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots/>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: 'quiz/:quizId',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <QuizDetails/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>      
    </div>
  );
}

export default App;
