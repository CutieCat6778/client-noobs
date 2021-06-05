import React from 'react';
const App = React.lazy(() => import('./App'));
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import Loading from './components/loadingCircle';

export function Chakra(){
    return(
        <ChakraProvider>
            <CSSReset />
            <React.Suspense fallback={<Loading/>}>
                <App />
            </React.Suspense>
        </ChakraProvider>
    )
}

export default Chakra;