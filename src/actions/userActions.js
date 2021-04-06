import { USER_LOGIN, USER_EDIT_PROFILE, USER_LOGOUT } from './types';

import { menuListFetch } from './menuListActions';

export const userLogin = ({ username, password, history }) => {
    return async (dispatch) => {
        /*For Production
        const res = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        
        if (res.status == 200) {
            const user = await res.json();
            dispatch({ type: USER_LOGIN, payload: { ...user } });
            dispatch(menuListFetch());
            history.push('/home');
        } else {
            //Swal.fire (SweetAlert2) Here
        }*/

        const user = {
            ID: 62010609,
            name: 'พักตร์ภูมิ',
            surname: 'ตาแพร่',
            username: 'phoom0529',
            email: 'phoom0529@gmail.com',
            role: 'Adminstrator',
            role_level: 0,
            createdBy: '-',
            avatarUrl: 'https://avatars2.githubusercontent.com/u/36500890?s=460&u=c6d4793fcb2ec759704fa68bfe4806e93fbf2569&v=4',
        };
        dispatch({ type: USER_LOGIN, payload: { ...user } });
        dispatch(menuListFetch());
        history.push('/home');
    };
};

export const userEditProfile = ({ avatarUrl, name, surname, email }) => {
    return async (dispatch, getState) => {
        /*For Production
        const { user } = getState();

        let updateAvatarUrl;
        if (avatarUrl === user.avatarUrl) {
            updateAvatarUrl = '';
        } else {
            updateAvatarUrl = avatarUrl;
        }

        const res = await fetch('/api/v1/editProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                avatarUrl: updateAvatarUrl,
                name,
                surname,
                email,
            }),
        });
        
        if (res.status == 200) {
            const editedUser = await res.json();
            dispatch({ type: USER_EDIT_PROFILE, payload: { ...editedUser } });
        } else {
            // Swal.fire (SweetAlert2) Here
        }*/

        const { user } = getState();
        dispatch({ type: USER_EDIT_PROFILE, payload: { ...user, avatarUrl, name, surname, email } });
    };
};

export const userLogout = ({ history }) => {
    return async (dispatch) => {
        /*For Production
        const res = await fetch('/api/v1/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.status == 200) {
            dispatch({ type: USER_LOGOUT });
            history.push('/login');
        }*/

        dispatch({ type: USER_LOGOUT });
        history.push('/login');
    };
};
