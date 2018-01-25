import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './components/Overlay';

// create node in DOM to render to
const overlayNode = document.createElement("div")
overlayNode.setAttribute("id", "my-id")
document.body.appendChild(overlayNode)

ReactDOM.render(<Overlay />, overlayNode);
