import { Button, Layout, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { IEvent } from '../models/IEvent'
import {
	fetchEvents,
	fetchGuests,
	postEvent,
} from '../store/reducers/event/event-thunk'

const Event: React.FC = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const dispatch = useAppDispatch()
	const { guests, events } = useAppSelector(state => state.event)
	const { user } = useAppSelector(state => state.auth)

	useEffect(() => {
		dispatch(fetchGuests())
		dispatch(fetchEvents(user!.username))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const addNewEvent = (event: IEvent) => {
		setModalVisible(false)
		dispatch(postEvent(event))
	}

	return (
		<Layout>
			{JSON.stringify(events)}
			<EventCalendar events={events} />
			<Row justify='center'>
				<Button onClick={() => setModalVisible(true)}>Add Event</Button>
			</Row>
			<Modal
				title='Add Event'
				footer={null}
				open={modalVisible}
				onCancel={() => setModalVisible(false)}
			>
				<EventForm guests={guests} submit={addNewEvent} />
			</Modal>
		</Layout>
	)
}

export default Event
