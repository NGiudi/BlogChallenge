import React, { useState } from 'react';
import DataContext from './dataContext';

const DataProvider = ({ children }) => {
    const [data, setData] = useState ();
    
    return (
        <DataContext.Provider value={{ setData, data }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;