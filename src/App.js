import React, {useState} from 'react'
import {Header} from './components/layout/Header'
import {Content} from './components/layout/Content'
import {ProjectsProvider, SelectedProjectProvider, AuthContextProvider} from './context'

export const App = ({ darkmodeDefault = false }) => {

  const [darkMode, setDarkMode] = useState(darkmodeDefault)

  return (
      <AuthContextProvider>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <main 
          data-testid="application"
          className={ darkMode ? 'darkmode' : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Content/>
          </main>
          
        </ProjectsProvider>
      </SelectedProjectProvider>
      </AuthContextProvider>
  )
}


