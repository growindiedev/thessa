import React from 'react'
import {Header} from './components/layout/Header'
import {Content} from './components/layout/Content'
import {ProjectsProvider, SelectedProjectProvider} from './context'

export const App = () => {
  return (
      <SelectedProjectProvider>
        <ProjectsProvider>
          <Header/>
          <Content/>
        </ProjectsProvider>
      </SelectedProjectProvider>
  )
}


