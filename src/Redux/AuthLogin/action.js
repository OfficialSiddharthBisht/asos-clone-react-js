export const LOG_IN = "login";
export const LOG_OUT = "logOut";

export const logIn = (payload) => ({
     type : LOG_IN,
     payload
})

export const logOut = () => ({
    type : LOG_OUT
})