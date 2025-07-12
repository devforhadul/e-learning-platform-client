import { AuthContext } from '@/Providers/AuthProvider';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const useAxiosSecure = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => {
                return res;
            },
            async error => {
                console.log('Error caught from axios interceptor-->', error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    logout();
                    navigate('/login')
                }
                return Promise.reject(error);
            }
        )
    }, [logout, navigate])

    return axiosSecure
};

export default useAxiosSecure;