import { Layout } from 'antd'
import { useEffect } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { useAppDispatch } from './hooks/redux'
import { IUser } from './models/IUser'
import { setAuth, setUser } from './store/reducers/auth'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			dispatch(setAuth(true))
			dispatch(setUser({ username: localStorage.getItem('username') } as IUser))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Layout>
			<Navbar />
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
		</Layout>
	)
}

export default App
