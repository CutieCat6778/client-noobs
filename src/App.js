import React from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/loadingCircle';

const Routers = React.lazy(() => import('./pages/index'));
const link = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    credentials: 'include'
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

export function App() {
    return(
        <Router>
            <ApolloProvider client={client}>
                <React.Suspense fallback={<Loading/>}>
                    <Routers/>
                </React.Suspense>
            </ApolloProvider>
        </Router>
    )
}

export default App;