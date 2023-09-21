import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { login } from '../store/reducers/auth/ActionCreators.ts'
import { rules } from '../utils/rules'

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useAppDispatch()
	const { error, isLoading } = useAppSelector(state => state.auth)

	const handleSubmit = () => {
		dispatch(login({ username, password }))
	}

	return (
		<Form
			wrapperCol={{ span: 20 }}
			labelCol={{ span: 8 }}
			onFinish={handleSubmit}
		>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Form.Item
				label='Username'
				name='username'
				rules={[rules.required('Please input your username!')]}
			>
				<Input value={username} onChange={e => setUsername(e.target.value)} />
			</Form.Item>
			<Form.Item
				label='Password'
				name='password'
				rules={[rules.required('Please input your password!')]}
			>
				<Input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='password'
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' loading={isLoading}>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
