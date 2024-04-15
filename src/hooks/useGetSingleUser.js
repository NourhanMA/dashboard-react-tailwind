import { useEffect, useState } from "react";


export const useGetSingleUser = (props) => {
    const [user, setUsers] = useState();
    const getUser = async () => {
        const res = await fetch("https://dummyjson.com/users/" + props);
        const jsonData = await res.json();
        setUsers(jsonData);
        // console.log(user)
    };

    useEffect(() => {
        getUser();
    }, []);

    return user;
}

