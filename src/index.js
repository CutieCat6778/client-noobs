import React from 'react';
import ReactDom from 'react-dom';
const Chakra = React.lazy(() => import('./chakra-ui'));

ReactDom.render(
    <Chakra/>
    , document.getElementById('root')
);