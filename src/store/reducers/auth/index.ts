import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'
import { fetchUsers } from './ActionCreators'

interface IAuthState {
	isAuth: boolean
	user: IUser | null
	isLoading: boolean
	error: string
}

const initialState: IAuthState = {
	isAuth: false,
	user: null,
	isLoading: false,
	error: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.isLoading = false
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			state.isLoading = false
		},
	},
	extraReducers: {
		[fetchUsers.fulfilled.type]: state => {
			state.isLoading = false
		},
		[fetchUsers.pending.type]: state => {
			state.isLoading = true
		},
		[fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.isLoading = false
		},
	},
})

export default authSlice.reducer
