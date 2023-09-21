import { Col, Layout, Menu, Row } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { RouteNames } from '../routes'
import { logout } from '../store/reducers/auth/ActionCreators'

const Navbar: FC = () => {
	const navigate = useNavigate()
	const { isAuth, user } = useAppSelector(state => state.auth)

	const dispatch = useAppDispatch()

	return (
		<Layout.Header
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
			}}
		>
			<Row justify='end'>
				<Col style={{ display: 'flex', alignItems: 'center' }}>
					{isAuth ? (
						<>
							<span style={{ color: '#fff' }}>{user?.username}</span>
							<Menu
								theme='dark'
								mode='inline'
								selectable={false}
								onClick={() => dispatch(logout())}
								items={[{ label: 'Logout', key: RouteNames.EVENT }]}
							/>
						</>
					) : (
						<Menu
							theme='dark'
							mode='inline'
							selectable={false}
							onClick={() => navigate(RouteNames.EVENT)}
							items={[{ label: 'Login', key: RouteNames.LOGIN }]}
						/>
					)}
				</Col>
			</Row>
		</Layout.Header>
	)
}

export default Navbar
