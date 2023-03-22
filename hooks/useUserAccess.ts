// endpoint: `https://apis.baanbaan.co/api/useraccess/byuser/${userId}`
// params: userId from local storage
import { httpClient } from "@/services/httpClient";
import { useAppDispatch } from "@/stores/store";
import { useEffect, useState } from "react";

export const useUserAccess = () => {
    const [userAccess, setUserAccess] = useState<[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const dispatch = useAppDispatch();

    const getUserAccess = async () => {
        try {
            const { data } = await httpClient.get<[]>(
                `/useraccess/byuser/${localStorage.getItem("id")}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            // console.log("data", data);
            setUserAccess(data);
            return data;
        } catch (error) {
            if (error instanceof Error) {
                // ✅ TypeScript knows error is Error
                console.log(error.message);
                setError(error);
            } else {
                console.log('Unexpected error', error);
            }
        }
    };

    // useEffect(() => {
    //     getUserAccess();
    // }, []);

    return { userAccess, error, getUserAccess };
}
