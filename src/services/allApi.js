import { BASE_URL } from './baseUrl';
import { commonApi } from './commonApi';

export const addUser = async (body, header) => {
    return commonApi("POST", `${BASE_URL}/add`, body, header)
}

export const allUsers = async (search) => {
    return commonApi("GET", `${BASE_URL}/get-all-users?search=${search}`, "")
}

export const deleteUser = async (id) => {
    return await commonApi("DELETE", `${BASE_URL}/delete-user/${id}`, {})
}

export const editUser = async (id,body,header)=>{
    return commonApi("PUT",`${BASE_URL}/edit-user/${id}`,body,header)
}

