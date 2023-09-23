import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserServices } from '../../../api/user-services'
import { IEvent } from '../../../models/IEvent'

export const fetchGuests = createAsyncThunk(
	'event/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await UserServices.getAllUsers()
			return response.data
		} catch (e) {
			const errorText = e instanceof Error ? e.message : String(e)
			rejectWithValue(errorText)
		}
	}
)

export const postEvent = createAsyncThunk(
	'event/postEvent',
	async (event: IEvent, { rejectWithValue }) => {
		console.log('thunk')
		try {
			const events = localStorage.getItem('events') || '[]'
			const parsedArr = JSON.parse(events) as IEvent[]
			parsedArr.push(event)
			localStorage.setItem('events', JSON.stringify(parsedArr))
			return parsedArr
		} catch (e) {
			const errorText = e instanceof Error ? e : String(e)
			rejectWithValue(errorText)
		}
	}
)
