import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { setAuth, setUser } from '.'
import { IUser } from '../../../models/IUser'

export const login = createAsyncThunk(
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
				thunkAPI.dispatch(setAuth(true))
				thunkAPI.dispatch(setUser(providedUser))
			} else {
				throw new Error('Invalid User Data')
			}

			return providedUser
		} catch (e) {
			const errorMessage = e instanceof Error ? e.message : String(e)
			return thunkAPI.rejectWithValue(errorMessage)
		}
	}
)
