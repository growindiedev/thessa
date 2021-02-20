import React, {useState} from 'react'
import {Header} from './components/layout/Header'
import {Content} from './components/layout/Content'
// import {Login} from './components/Authentication/Login'
// import {Signup} from './components/Authentication/Signup'
// import {ForgotPassword} from './components/Authentication/ForgotPassword'
import { Form } from './components/Auth/Form'
import {ProjectsProvider, SelectedProjectProvider, AuthContextProvider, useAuth} from './context'
import { PrivateRoute } from './components/Auth/PrivateRoute'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
	Flex,
	ChakraProvider,
} from '@chakra-ui/react';

export const App =  ({ darkmodeDefault = false }) => {

  const [darkMode, setDarkMode] = useState(darkmodeDefault)

  return (
    
    <Router>
      <AuthContextProvider>
      <ProjectsProvider>
      <SelectedProjectProvider>
          <Switch>
            

              <PrivateRoute
                exact
                path='/'
                component={() => (
                  <main
                    data-testid='application'
                    className={darkMode ? 'darkmode' : undefined}
                    >
                      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                      <Content />
                    </main>
                )}
              />

            
              <ChakraProvider>
				        <Flex direction='column' align='center' justify='center'>
					      <Flex justify='center' align='center' w='100%' h='93vh'>
                <Route path='/authenticate'>
						    <Form/>
                </Route>
					      </Flex>
			        	</Flex>
			        </ChakraProvider>
		        
            
          </Switch>
          
      </SelectedProjectProvider>
      </ProjectsProvider>
      </AuthContextProvider>
      </Router>
      
  )
}


