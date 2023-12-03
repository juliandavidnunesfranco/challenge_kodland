import axios from "axios";

export const CREATE_USER = "CREATE_USER"; //ok
export const UPDATE_USER = "UPDATE_USER"; //ok
export const LOGIN_USER = "LOGIN_USER"; //ok
export const LOGOUT_USER = "LOGOUT_USER"; //ok
export const GET_USER_ID = "GET_USER_ID"; //ok
export const GET_ALL_USER = "GET_ALL_USER"; //ok

/* ACTION FOR CREATE AN USER */
export function createUsers(input) {
    //console.log(input);
    return async (dispatch) => {
        try {
            let newUser = await axios.post(
                "http:localhost:backend/ruta_para_crear_un_usuario",
                input
            );

            return dispatch({
                //este dispatch es del front-end
                type: CREATE_USER,
                payload: newUser.data,
            });
        } catch (error) {
            console.log(error);
            //manejo de errores
        }
    };
}

/* get user for ID */
export function getIdUsers(id, token) {
    return async function (dispatch) {
        try {
            let user = await axios.get(
                `http://localhost:backend/ruta_para_tomar_un_usuario_por_id${id}`, //params
                {
                    headers: { Authorization: `Bearer ${token}` }, //authorized headers
                }
            );
            return dispatch({
                type: GET_USER_ID,
                payload: user.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

/* action for update an user */
export function updateUser(input, token) {
    return async (dispatch) => {
        try {
            let updateUser = await axios.put(
                `http://localhost:backend/ruta_for_updateprofile`,
                input,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            return dispatch({ type: UPDATE_USER, payload: updateUser.data });
        } catch (error) {
            console.log(error);
        }
    };
}

/* action for login */
export function loginUser(data) {
    const LOGIN_URL = "http://localhost:4000/users/login" ;

    return async (dispatch) => {
        
        const response = await axios.post(LOGIN_URL, data);
        if (response?.status === 201) {
            const { user } = response.data;
            console.log(user);
            return dispatch({ type: LOGIN_USER, payload: user });
        } else {
            alert("Error", "Usuario o contraseña incorrecta", "error");
            console.log("LA ACTION ERROR");
        }

        
    };
}

/* Action for logout user */
export function logoutUser() {
    return async (dispatch) => {
        return dispatch({ type: LOGOUT_USER, payload: [] });
    };
}

/* Get all users  */
export function getUsers(token) {
    return async (dispatch) => {
        try {
            let allUser = await axios.get(
                "http://localhost:backend/ruta_para_tomar_users/",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return dispatch({
                type: GET_ALL_USER,
                payload: allUser.data.rows,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
