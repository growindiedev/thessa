import React, {useState} from 'react'
import {Header} from './layout/Header'
import {Content} from './layout/Content'

export const Main = ({ darkmodeDefault = false }) => {
    const [darkMode, setDarkMode] = useState(darkmodeDefault)

    return (
        <main 
          data-testid="application"
          className={ darkMode ? 'darkmode' : undefined}
        >
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Content/>            
        </main>
    )
}
