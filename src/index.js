import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react"
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';

const link = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    credentials: 'include'
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

ReactDom.render(
    <ChakraProvider>
        <CSSReset />
        <Router>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Router>
    </ChakraProvider>
    , document.getElementById('root')
);

module.hot.accept();