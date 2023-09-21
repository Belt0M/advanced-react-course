import axios, { AxiosResponse } from 'axios'
import { IUser } from '../models/IUser'

export class UserServices {
	static async getAllUsers(): Promise<AxiosResponse<IUser[]>> {
		return axios.get<IUser[]>('./users.json')
	}
}
