import React from 'react';

const RenderIf = ({ condition, children }) => (
  <div>
    {
      condition &&
      children
    }
  </div>
);

export default RenderIf;