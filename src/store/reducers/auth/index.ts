import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAuthState {
	isAuth: boolean
}

const initialState: IAuthState = {
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
})

export default authSlice.reducer
