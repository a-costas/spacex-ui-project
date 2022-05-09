import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Routing from './routes/index'; 

// import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize ApolloClient w/ uri that specifies GraphQl server & cache to query results after fetching
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={ client }>
        <Routing /> 
      </ApolloProvider>
    </div>
  );
}

export default App;
