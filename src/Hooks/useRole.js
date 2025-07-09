import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [roleLoading, setRoleLoading] = useState(false);




    useEffect(() => {

        const fetchUserRole = async () => {
            if (!user?.email) return;
            setRoleLoading(true);
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/user/role/${user.email}`);

                setRole(data?.role);
            } catch (error) {
                console.log(error);
            } finally {
                setRoleLoading(false)
            }
        };
        fetchUserRole();

    }, [user?.email]);


    return [role, roleLoading];
};

export default useRole;