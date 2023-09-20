import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'

const LoginForm = () => {
	const handleFinish = () => {}

	return (
		<Form
			wrapperCol={{ span: 20 }}
			labelCol={{ span: 8 }}
			onFinish={handleFinish}
		>
			<Form.Item
				label='Username'
				name='username'
				rules={[rules.required('Please input your username!')]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label='Password'
				name='password'
				rules={[rules.required('Please input your password!')]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
