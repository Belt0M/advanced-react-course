import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'
import { IEvent } from './../../../models/IEvent'

interface EventState {
	guests: IUser[]
	events: IEvent[]
}

const initialState: EventState = {
	guests: [],
	events: [],
}

export const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		setGuests: (state, { payload }: PayloadAction<IUser[]>) => {
			state.guests = payload
		},
		setEvents: (state, { payload }: PayloadAction<IEvent[]>) => {
			state.events = payload
		},
	},
})
