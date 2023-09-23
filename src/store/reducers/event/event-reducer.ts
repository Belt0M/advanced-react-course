import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'
import { IEvent } from './../../../models/IEvent'
import { fetchGuests, postEvent } from './event-thunk'

interface EventState {
	guests: IUser[]
	events: IEvent[]
	isLoading: boolean
	error: string
}

const initialState: EventState = {
	guests: [],
	events: [],
	isLoading: false,
	error: '',
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
	extraReducers: builder => {
		builder.addCase(fetchGuests.fulfilled, (state, { payload }) => {
			state.guests = payload as IUser[]
			state.isLoading = false
		})
		builder.addCase(fetchGuests.rejected, (state, { payload }) => {
			state.error = payload as string
			state.isLoading = false
		})
		builder.addCase(fetchGuests.pending, state => {
			state.isLoading = true
		})
		builder.addCase(postEvent.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.events = payload as IEvent[]
		})
		builder.addCase(postEvent.pending, state => {
			state.isLoading = true
		})
		builder.addCase(postEvent.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload as string
		})
	},
})

export const { setEvents, setGuests } = eventSlice.actions

export default eventSlice.reducer
