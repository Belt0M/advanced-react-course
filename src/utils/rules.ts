import dayjs, { Dayjs } from 'dayjs'

export const rules = {
	required: (message: string = 'Mandatory field') => ({
		required: true,
		message,
	}),
	isDateAfter: (message: string) => () => ({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		validator(_: any, value: Dayjs) {
			const date = dayjs()
			if (value.isBefore(date, 'day')) {
				return Promise.reject(new Error(message))
			}
			Promise.resolve()
		},
	}),
}
