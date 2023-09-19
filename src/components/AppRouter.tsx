import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, privateRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
	const auth = false
	return auth ? (
		<Routes>
			{privateRoutes.map(({ path, component: Component }) => (
				<Route path={path} element={<Component />} key={path} />
			))}
			<Route path='*' element={<Navigate to={RouteNames.EVENT} replace />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, component: Component }) => (
				<Route path={path} element={<Component />} key={path} />
			))}
			<Route path='*' element={<Navigate to={RouteNames.LOGIN} replace />} />
		</Routes>
	)
}

export default AppRouter
