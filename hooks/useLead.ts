// axios fetches data from the API get request
// params: currentpage, pagesize, publishonly
// endpoint: https://apis.baanbaan.co/api/lead/FindPaging?currentpage=${LeadRequest.currentpage}&pagesize=${LeadRequest.pagesize}&publishonly=${LeadRequest.publishonly}
// query parameters : currentpage, pagesize, publishonly
// Authorization: Bearer token from local storage token
// returns: lead data  (array of objects)

import { httpClient } from "@/services/httpClient";
import { useAppDispatch } from "@/stores/store";
import { useEffect, useState } from "react";
import { LeadRequest, LeadResponse } from "@/models/lead.model";


export const useLead = () => {
    const [lead, setLead] = useState<LeadResponse[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const dispatch = useAppDispatch();

    const getLead = async (args: LeadRequest) => {
        try {
            const { data } = await httpClient.get<LeadResponse[]>(
                `/lead/FindPaging?currentpage=${args.currentpage}&pagesize=${args.pagesize}&publishonly=${args.publishonly}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            // console.log("data", data);
            setLead(data);
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

    return { lead, error, getLead };
}
