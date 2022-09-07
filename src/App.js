
import { QueryClient, QueryClientProvider } from 'react-query';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RQSuperheroes from './components/RQSuperheroes';
import Superheroes from './components/Superheroes';
import {ReactQueryDevtools} from "react-query/devtools"
import RQSingleSuperhero from './components/RQSingleSuperhero';

const queryClient= new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     <h1>React Query</h1>

     <div className='nav'>
      <Link className='linkclass' to="/">Home</Link>
      <Link className="linkclass" to="/superheroes">Superheroes</Link>
      <Link className="linkclass" to="/rqsuperheroes">RQ-Superheroes</Link>
     </div>

     <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/superheroes' element={<Superheroes/>} />
      <Route  path='/rqsuperheroes' element={<RQSuperheroes/>} />
      <Route  path='/rqsuperheroes/:heroId' element={<RQSingleSuperhero/>} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>This page doesn't exist !!!!</p>
        </main>
      }
    />
     </Routes>

    
    </div>

    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
