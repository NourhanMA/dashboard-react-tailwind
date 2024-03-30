import { useEffect, useState } from "react";


export const useGetUsers = () => {
    const [users, setUsers] = useState();

    const getUser = async () => {
        const res = await fetch("https://dummyjson.com/users");
        const jsonData = await res.json();
        setUsers(jsonData.users);
        // console.log(jsonData.users);
    };

    useEffect(() => {
        getUser();
        // console.log(users);
    }, []);

    return users;
}

