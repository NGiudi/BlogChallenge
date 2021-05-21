import { createContext } from 'react';

const dataContext = createContext ({
    setData: () => {},
    data: []
});

export default dataContext;