import { createAsyncThunk } from '@reduxjs/toolkit'
import { setAuth, setUser } from '.'
import { UserServices } from '../../../api/user-services'
import { IUser } from '../../../models/IUser'

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, password }: IUser, thunkAPI) => {
		try {
			const response = await UserServices.getAllUsers()
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

export const logout = createAsyncThunk(
	'auth/logout',
	async (_, { dispatch }) => {
		localStorage.removeItem('auth')
		localStorage.removeItem('username')
		dispatch(setAuth(false))
		dispatch(setUser(null))
	}
)
