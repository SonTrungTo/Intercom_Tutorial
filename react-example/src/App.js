import './App.css';
import { IntercomProvider } from 'react-use-intercom';
import HomePage from './components/HomePage';

function App() {
  return (
    <IntercomProvider appId="fjd6qdpm">
      <HomePage />
    </IntercomProvider>
  );
}

export default App;
