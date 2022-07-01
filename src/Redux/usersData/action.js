export const USER_DETAIL = "userDetail";
export const GET_ALL_USER =  "getAllUser";

export const userDetails = (payload) => ({
    type : USER_DETAIL,
    payload
})

export const getAlluser = (payload) => ({
      type : GET_ALL_USER,
      payload
})