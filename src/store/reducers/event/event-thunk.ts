import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserServices } from '../../../api/user-services'

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
