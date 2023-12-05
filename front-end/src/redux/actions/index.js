import axios from "axios";
import swal from "sweetalert2";

export const CREATE_USER = "CREATE_USER"; //ok
export const UPDATE_USER = "UPDATE_USER"; //ok
export const LOGIN_USER = "LOGIN_USER"; //ok
export const LOGOUT_USER = "LOGOUT_USER"; //ok
export const GET_USER_ID = "GET_USER_ID"; //ok
export const GET_ALL_USER = "GET_ALL_USER"; //ok

/* ACTION FOR CREATE AN USER */
export function createUser(data) {
    const REGISTER_URL =
        "http://localhost:4000/users/register";
    const USER_TOKEN = "user";

    return async (dispatch) => {
        try {
            const response = await axios.post(REGISTER_URL, data);
            if (response?.status === 201) {
                const user = response.data.newUser;
                localStorage.setItem(USER_TOKEN, JSON.stringify(user));

                swal.fire({
                    icon: "success",
                    title: "Usuario creado correctamente!",
                    text: "Te has registrado.",
                });

                return dispatch({ type: CREATE_USER, payload: user });
            }
        } catch (error) {
            if (error.response) {
                // El servidor respondió con un código de estado de error.
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                });
            } else if (error.request) {
                // La solicitud fue hecha ,no se recibió respuesta
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error en la solicitud, no se recibió respuesta del servidor",
                });
            } else {
                // Algo sucedió en la configuración de la solicitud que generó un error
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error al procesar la solicitud",
                });
            }
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
    const LOGIN_URL =
        "http://localhost:4000/users/login";

    return async (dispatch) => {
        try {
            const response = await axios.post(LOGIN_URL, data);

            if (response?.status === 201) {
                const { user } = response.data;
                swal.fire({
                    icon: "success",
                    title: "Bienvenido!",
                    text: "Ahora podras ingresar.",
                });

                return dispatch({ type: LOGIN_USER, payload: user });
            }
        } catch (error) {
            if (error.response) {
                // El servidor respondió con un código de estado de error.
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                });
            } else if (error.request) {
                // La solicitud fue hecha ,no se recibió respuesta
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error en la solicitud, no se recibió respuesta del servidor",
                });
            } else {
                // Algo sucedió en la configuración de la solicitud que generó un error
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error al procesar la solicitud",
                });
            }
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
