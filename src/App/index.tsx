import { ApolloProvider } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import client from '../lib/apollo';
import Router from '../Router';
import './styles.css';

const App = () => {

  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Toaster position='top-right' toastOptions={{duration: 3000}} />
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
