import { AxiosResponse } from 'axios'

import {API} from "api";
export const GetUsers = async (): Promise<AxiosResponse> => await API.get('/users/admin-get-users')