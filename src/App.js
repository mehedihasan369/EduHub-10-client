import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routs';

function App() {
  return (
    <div className="dark">
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
