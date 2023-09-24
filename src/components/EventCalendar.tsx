import { Dayjs } from 'Dayjs'
import { Calendar } from 'antd'
import React from 'react'
import { IEvent } from '../models/IEvent'

interface EventCalendarProps {
	events: IEvent[]
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
	const dateCellRender = (value: Dayjs) => {
		const currentDate = value.format('YYYY.MM.DD')
		const userEvents = events.filter(el => el.date === currentDate)
		return (
			<div>
				{userEvents.map((el, index) => (
					<div key={index}>{el.description}</div>
				))}
			</div>
		)
	}
	return <Calendar cellRender={dateCellRender} />
}

export default EventCalendar
