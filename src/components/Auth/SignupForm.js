import {
	Input,
	Stack,
	Icon,
	InputGroup,
	InputLeftElement,
	Button,
	FormControl,
	FormHelperText,
	Alert,
	AlertIcon,
	CloseButton
	
} from '@chakra-ui/react';

import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import React, { useEffect, useRef, useState } from "react"
import { useAuth } from "../../context"
import { Link, useHistory } from "react-router-dom"
import { useFormik } from 'formik'

export const SignupForm = () => {

        
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
	const [quote,  setQuote] = useState('')
    const history = useHistory()

		
        const formik = useFormik({
            initialValues: {
              email: '',
              password: '',
              confirmPassword: ''
            },
            onSubmit: async (values) => {
                if (formik.values.password !== formik.values.confirmPassword) {
                    return setError("Passwords do not match")
                  }
              
                  try {
                    setError("")
                    setLoading(true)
                    await signup(formik.values.email, formik.values.password)
                    history.push("/")
                  } catch (error){
                    //setError("Failed to create an account")
					setError(error.message)
					setLoading(false)
                  }
              
                  setLoading(false)
            },
          });

        

	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack spacing={3}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<EmailIcon />} />
						<Input type='email'
						 name='email' 
						 placeholder='Email' 
						 aria-lable='Email' 
						 onChange={formik.handleChange} 
						 value={formik.values.email} 
						 bg='white'
						 />
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<LockIcon />} />
						<Input
							type='password'
							name='password'
							placeholder='Password'
							aria-lable='Password'
                            onChange={formik.handleChange} 
                            value={formik.values.password}
							bg='white'
						/>
					</InputGroup>
				</FormControl>
                <FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<LockIcon />} />
						<Input
							type='password'
							name='confirmPassword'
							placeholder='confirm password'
							aria-lable='confirmPassword'
                            onChange={formik.handleChange} 
                            value={formik.values.confirmPassword}
							bg='white'
						/>
					</InputGroup>
				</FormControl>
				<Button
					type='submit'
					boxShadow='sm'
					_hover={{ boxShadow: 'md' }}
					_active={{ boxShadow: 'lg' }}
					disabled={loading}
					
					
					>
					Sign up!
				</Button>
				{
					error ? (
					<Alert status="error" variant='top-accent'>
				 	{error}
					 <CloseButton position="static" right="8px" top="8px" onClick={() => setError(false)}/>
				   </Alert> )
				   : (
					<FormHelperText textAlign='center' color='grey'>
						Created by Jarryingnut 👨‍💻
					</FormHelperText> 
				   )
				}
			</Stack>
		</form>
	);
};

