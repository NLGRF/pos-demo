// Lead Component shows the lead information to tables with tailwindcss

import React, { useState, useEffect } from 'react';
import { LeadRequest, LeadResponse, LeadListResponse } from '@/models/lead.model';
import { useLead } from '@/hooks/useLead';
import { useUserAccess } from '@/hooks/useUserAccess';

// Lead Component shows the lead information to tables with tailwindcss
// input LeadRequest, LeadResponse
// output LeadResponse

const Lead = () => {

    const { getUserAccess } = useUserAccess();
    const [uA, setUA] = useState<[] | null>(null);
    // leads state LeadListResponse
    const [leads, setLeads] = useState<LeadResponse[] | null>(null);
    const { getLead } = useLead();

    // signout function
    const signOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/signin';
    }
    
    const initialValues: LeadRequest = {
        currentpage: 1,
        pagesize: 10,
        publishonly: true,
    };

    // const lead = getLead(initialValues);
    // console.log("lead", lead);

    // useEffect async function to get lead data
    useEffect(() => {
        const getLeads = async () => {
            const lead = await getLead(initialValues);
            console.log("lead", lead);
            setLeads(lead!.value);
        }

        // const getUA = async () => {
        //     const ua = await getUserAccess();
        //     console.log("ua", ua);
        //     setUA(ua!);
        // }
        getLeads();
        // getUA();
    }, []);

    return (
        <div>
            {/* h1 is left and button is right */}
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-10 text-white">Lead</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={signOut}>Sign Out</button>
            </div>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Id</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">iMs</th>
                        <th className="px-4 py-2">tel</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">LeadType</th>
                        <th className="px-4 py-2">referObjId</th>
                    </tr>
                </thead>
                <tbody>
                    {/* JSON.parse(JSON.stringify(leads)) */}
                    {leads?.map((lead: LeadResponse) => (
                        <tr key={lead.id}>
                            <td className="border px-4 py-2">{lead.id}</td>
                            <td className="border px-4 py-2">{lead.name}</td>
                            <td className="border px-4 py-2">{lead.email}</td>
                            <td className="border px-4 py-2">{lead.iMs}</td>
                            <td className="border px-4 py-2">{lead.tel}</td>
                            <td className="border px-4 py-2">{lead.status}</td>
                            <td className="border px-4 py-2">{lead.leadType}</td>
                            <td className="border px-4 py-2">{lead.referObjId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Lead;
