import { MENULIST_FETCH } from './types';

export const menuListFetch = () => {
    return async (dispatch, getState) => {
        /*For Production
        const { user } = getState();

        const res = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ID: user.ID,
            }),
        });

        if(res.status === 200){
            const menuList = await res.json();
            dispatch({ type: MENULIST_FETCH, payload: menuList });
        }*/

        const menuList = [
            {
                title: 'หน้าหลัก',
                url: '/home',
            },
            {
                title: 'เลือกสถานที่รับยา',
                url: '/',
            },
            {
                title: 'ผู้ป่วยรอคิวชำระเงิน',
                url: '/',
            },
            {
                title: 'Dashboard ร้านขายยา',
                url: '/',
            },
            {
                title: 'จัดการบัญชีผู้ใช้',
                url: '/manage-account',
            },
            {
                title: 'จัดการกลุ่มผู้ใช้',
                url: '/',
            },
            {
                title: 'จัดการบัญชีร้านขายยา',
                url: '/',
            },
            {
                title: 'จัดการข้อมูลยา',
                url: '/',
            },
        ];
        dispatch({ type: MENULIST_FETCH, payload: menuList });
    };
};
