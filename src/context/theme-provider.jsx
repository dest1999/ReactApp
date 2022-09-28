import React, {createContext, useCallback, useState, useMemo} from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';

export const ColorModeServicesContext = createContext();

export const ThemeProvider = ({ initialTheme = {}, initialMode = 'light', children }) => {
    const [mode, setMode] = useState(initialMode);

    const theme = useMemo(() =>
        createTheme(deepmerge(initialTheme, { palette: { mode } })),
        [mode, initialTheme]
    );

    const toggleColorMode = useCallback(() => {
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
    }, []);

    return (
        <ColorModeServicesContext.Provider value = { toggleColorMode }>
            <MUIThemeProvider theme={ theme }>
                { children }
            </MUIThemeProvider>
        </ColorModeServicesContext.Provider>
    )
}