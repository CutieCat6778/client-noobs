import React from 'react';
import ReactDom from 'react-dom';
import Loading from './components/loadingCircle';
const Chakra = React.lazy(() => import('./chakra-ui'));

ReactDom.render(
    <React.Suspense fallback={<Loading/>}>
        <Chakra/>
    </React.Suspense>
    , document.getElementById('root')
);