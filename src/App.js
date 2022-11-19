import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="dark">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
