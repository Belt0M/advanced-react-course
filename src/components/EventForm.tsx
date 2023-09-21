import { Button, DatePicker, Form, Input, Row } from 'antd'
import { rules } from '../utils/rules'

const EventForm = () => {
	return (
		<Form wrapperCol={{ span: 20 }} labelCol={{ span: 8 }}>
			<Form.Item
				label='Event description'
				name='description'
				rules={[rules.required()]}
			>
				<Input />
			</Form.Item>
			<Form.Item label='Event date' name='date' rules={[rules.required()]}>
				<DatePicker />
			</Form.Item>
			<Row justify='end'>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Add
					</Button>
				</Form.Item>
			</Row>
		</Form>
	)
}

export default EventForm
