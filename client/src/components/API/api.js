import Cookies from 'universal-cookie';

export default class API {

     async logIn(data){
       const response = await fetch('/auth/login', {
             method: 'POST',
             headers: {
                 'Content-type': 'application/json',
             },
             body: JSON.stringify(data),
         });
         const response_1 = await response.json();
         if (response_1['authenticated']) {
             const cookies = new Cookies();
             cookies.set('token', response_1['token'], { path: '/' });
             window.location.href = '/';
         } else {

             return response_1['error'];


         }
    }

    async addBalance(data){
        const response = await fetch('/balance/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const response_1 = await response.json();
        return response_1['newBalance'];
    }

    async getBalance(data){
        const response = await fetch('/balance/getBalance', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const response_1 = await response.json();
        return response_1['balance'];
    }

    async register(data){
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const response_1 = await response.json();
        if (response_1['registered']) {
            window.location.href = '/Login';
        } else {
            return response_1['error'];

        }
    }

    async forgotPassword(data){

        const response = await fetch('/auth/forgot_password', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const response_1 = await response.json();
        if (response_1['userExist']) {
            window.location.href = '/Login';
        } else {


            return response_1['error'];


        }
    }
}