import {
	Button,
	DatePicker,
	DatePickerProps,
	Form,
	Input,
	Row,
	Select,
} from 'antd'
import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { formatDate } from '../utils/date'
import { rules } from '../utils/rules'

interface EventFormProps {
	guests: IUser[]
	submit: (event: IEvent) => void
}

const EventForm: React.FC<EventFormProps> = ({ guests, submit }) => {
	const [event, setEvent] = useState<IEvent>({
		author: '',
		date: '',
		description: '',
		guest: '',
	} as IEvent)

	const { user } = useAppSelector(state => state.auth)

	const handleDateChange: DatePickerProps['onChange'] = (_, dateString) => {
		if (dateString) {
			setEvent({ ...event, date: formatDate(dateString) })
		}
	}

	const handleSubmit = () => {
		submit({ ...event, author: user!.username })
	}

	return (
		<Form
			wrapperCol={{ span: 20 }}
			labelCol={{ span: 8 }}
			onFinish={handleSubmit}
		>
			<Form.Item
				label='Event description'
				name='description'
				rules={[rules.required()]}
			>
				<Input
					onChange={e => setEvent({ ...event, description: e.target.value })}
				/>
			</Form.Item>
			<Form.Item
				label='Event date'
				name='date'
				rules={[
					rules.required(),
					rules.isDateAfter('The selected date cannot be in the past'),
				]}
			>
				<DatePicker onChange={handleDateChange} />
			</Form.Item>
			<Form.Item label='Select guest' name='guest' rules={[rules.required()]}>
				<Select onChange={guest => setEvent({ ...event, guest })}>
					{guests.map(el => (
						<Select.Option key={el.username}>{el.username}</Select.Option>
					))}
				</Select>
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
