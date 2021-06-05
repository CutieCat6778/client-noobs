import React from 'react';
import App from './App';
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import Loading from './components/loadingCircle';

export function Chakra(){
    return(
        <>
            <ChakraProvider>
                <React.Suspense fallback={<Loading/>}>
                    <CSSReset />
                        <App />
                </React.Suspense>
            </ChakraProvider>
        </>
    )
}

export default Chakra;