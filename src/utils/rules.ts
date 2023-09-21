export const rules = {
	required: (message: string = 'Mandatory field') => ({
		required: true,
		message,
	}),
}
