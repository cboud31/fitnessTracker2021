import React, { useState } from 'react';

const useToggle = (initVal = false) => {
  const [state, setState] = useState(initVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

export default useToggle;

/*
// Examples of useage:

import useToggle from './hooks/useToggle';

const Toggler = () => {
    const [isHappy, toggleIsHappy] = useToggle(false);
    const [isCold, toggleIsCold] = useToggle(false)

    return(<>
            <h1 onClick={toggleisHappy}>{isHappy ? '😄' : '😟'</h1>
        </>)
}


*/
