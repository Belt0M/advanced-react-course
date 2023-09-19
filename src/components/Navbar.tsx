import { Col, Layout, Menu, Row } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'

const Navbar: FC = () => {
	const navigate = useNavigate()

	const auth = false
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
					{auth ? (
						<>
							<span style={{ color: '#fff' }}>BeltoM</span>
							<Menu
								theme='dark'
								mode='inline'
								selectable={false}
								onClick={() => console.log('Logout')}
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
