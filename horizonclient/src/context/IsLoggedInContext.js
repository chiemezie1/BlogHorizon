import { createContext, useState, useContext } from 'react';

export const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </IsLoggedInContext.Provider>
    );
};

export const useIsLoggedIn = () => {
    const context = useContext(IsLoggedInContext);
    if (context === undefined) {
        throw new Error('useIsLoggedIn must be used within an IsLoggedInProvider');
    }
    return context;
};
