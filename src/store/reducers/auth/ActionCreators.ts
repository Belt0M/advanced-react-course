import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../../models/IUser'

export const fetchUsers = createAsyncThunk(
	'auth/fetchUsers',
	async ({ username, password }: IUser, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>('./users.json')
			const providedUser = response.data.find(
				user => user.username === username && user.password === password
			)
			if (providedUser) {
				localStorage.setItem('auth', 'true')
				localStorage.setItem('username', providedUser.username)
			} else {
				throw new Error('Incorrect User Data')
			}

			return providedUser
		} catch (e) {
			const errorMessage = e instanceof Error ? e.message : String(e)
			thunkAPI.rejectWithValue(errorMessage)
		}
	}
)
