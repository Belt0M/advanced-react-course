import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'
import { login } from './ActionCreators'

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
		setAuth: (state, { payload }: PayloadAction<boolean>) => {
			state.isAuth = payload
		},
		setError: (state, { payload }: PayloadAction<string>) => {
			state.error = payload
			state.isLoading = false
		},
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload
		},
		setUser: (state, { payload }: PayloadAction<IUser>) => {
			state.user = payload
			state.isLoading = false
		},
	},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, state => {
			state.isLoading = false
		})
		builder.addCase(login.pending, state => {
			state.isLoading = true
		})
		builder.addCase(login.rejected, (state, action) => {
			state.error = action.payload as string
			state.isLoading = false
		})
	},
})

export const { setAuth, setError, setLoading, setUser } = authSlice.actions

export default authSlice.reducer
