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
	CloseButton,
	AlertDescription
} from '@chakra-ui/react';

import {EmailIcon, LockIcon} from '@chakra-ui/icons'

import React, { useState } from "react"
import { useAuth } from "../../context"
import { Link, useHistory } from "react-router-dom"
import { useFormik } from 'formik'

export const LoginForm = () => {

        const { login } = useAuth()
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
		const [email, setEmail] = useState('')
        const history = useHistory()

        const formik = useFormik({
            initialValues: {
              email: '',
              password: ''
            },
            onSubmit: async (values) => {
                try {
                    setError("")
                    setLoading(true)
                    await login(formik.values.email, formik.values.password)
                    setLoading(false)
                    history.push("/")
                    } catch (error) {
                    setError('Wrong email or password')
					//setError(error.message)
					setLoading(false)
                    }
            },
          });

        

	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack spacing={3}>
				<FormControl isRequired >
					<InputGroup>
						<InputLeftElement children={<EmailIcon/>} />
						<Input 
							type='email' name='email' 
							placeholder='Email' 
							area-lable='Email' 
							onChange={formik.handleChange} 
							value={formik.values.email}
							bg='white'
							/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired >
					<InputGroup>
						<InputLeftElement children={<LockIcon/>} />
						<Input
							type='password'
							placeholder='Password'
							aria-lable='Password'
                            name='password'
							onChange={formik.handleChange}
							value={formik.values.password}
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
					Login
				</Button>
				{
					error ? (
					<Alert status="error" variant='top-accent'>
					<AlertDescription>{error}</AlertDescription>
					 <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(false)}/>
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

