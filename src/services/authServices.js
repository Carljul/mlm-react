import { getService, postService, serviceStatus } from './httpServices';

export const ServiceCallBack = {
    LOGIN: 'login',
    ACCOUNT: 'account'
}

export const authChecker = function (callbackName) {
    if (localStorage.getItem('ACCESS_TOKEN') === null) {
        return Promise.resolve(false);
    }

    return serviceChecker(callbackName);
}

const serviceChecker = function (callback) {
    if (process.env.REACT_APP_ENV == 'static') {
        if (callback == ServiceCallBack.LOGIN) {
            return Promise.resolve(serviceStatus(200));
        } else if (callback == ServiceCallBack.ACCOUNT) {
            serviceStatus(200)
            return Promise.resolve({
                data: {
                    name: 'Admin Test',
                    email: 'admin@gmail.com',
                    cellphone_number: '09068765047',
                    genealogy_invitation_code: null,
                    role_id: 1,
                    id: 1,
                    avatar: 'https://www.chronostep.com/cswp/wp-content/uploads/2022/03/jul.png',
                    person: {
                        firstname: 'Admin',
                        middlename: 'Admin',
                        lastname: 'Admin',
                        suffix: null,
                        fullname: 'Admin A. Admin',
                        civil_status: 'Single',
                        gender: 'Male',
                        birthdate: '06/22/1997'
                    }
                }
            });
        }
    }

    return getService('/user').then((data) => {
        if (callback == ServiceCallBack.LOGIN) {
            return Promise.resolve(serviceStatus(data.status));
        } else if (callback == ServiceCallBack.ACCOUNT) {
            serviceStatus(data.status)
            return Promise.resolve(data);
        }
    }).catch((error) => {
        console.error(error);
    });
}