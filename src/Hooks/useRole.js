import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [roleLoading, setRoleLoading] = useState(true);

    // const { data, isPending: roleLoading } = useQuery({
    //     queryKey: ['userRole', user?.email],
    //     queryFn: async () => {
    //         const { data } = await axios(
    //             `${import.meta.env.VITE_API_URL}/user/role/${user?.email}`
    //         );
    //         return data;
    //     },
    //     enabled: !!user?.email, // only run if email exists
    // });


    // useEffect(() => {
    //     if (data?.role) {
    //         setRole(data.role);
    //     }
    // }, [data]);





    useEffect(() => {

        const fetchUserRole = async () => {
            if (!user?.email) return;

            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/user/role/${user.email}`);

                setRole(data?.role);
                setRoleLoading(false)
            } catch (error) {
                console.log(error);
            }

        };
        fetchUserRole();

    }, [user?.email]);


    return [role, roleLoading];
};

export default useRole;