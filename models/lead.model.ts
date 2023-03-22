// example of a model
// {
//     "id": "string",
//     "name": "string",
//     "tel": "string",
//     "email": "string",
//     "iMs": [
//       "string"
//     ],
//     "referObjId": "string",
//     "leadType": "string",
//     "status": "string",
//     "origin": "string",
//     "followUpLog": "string",
//     "active": true,
//     "acceptInvite": true,
//     "ownerId": "string",
//     "lastEditorId": "string",
//     "creationTime": "2022-09-20T10:01:56.377Z",
//     "publishTime": "2022-09-20T10:01:56.377Z"
//   }


// LeadListResponse
// {
//     "value": [
//       {
//         "id": "61bec3a8-69cd-4df1-a5b5-2c753b65098a",
//         "name": "อภิชาติ  แย้มไชยศรี",
//         "tel": "0630211046",
//         "email": "apichart3056@gmail.com",
//         "iMs": [
//           "FaceBook:",
//           "Instagram:",
//           "Messenger:",
//           "Line:0630211046"
//         ],
//         "referObjId": "000",
//         "leadType": "cont",
//         "status": "new",
//         "origin": "int",
//         "followUpLog": "ต้องการติดต่อโครงการ เดอร์ไพรเวส ปาคร์วิว ด่วน ",
//         "creationTime": "2022-09-20T05:30:04.9973573",
//         "lastEditTime": "2022-09-20T05:30:04.9973573",
//         "publishTime": "2022-09-20T05:30:04.9973573",
//         "active": true,
//         "acceptInvite": true,
//         "ownerId": null,
//         "lastEditorId": null
//       },
//       {
//         "id": "f01d3856-1051-4695-bdd7-551241bdb8cb",
//         "name": "ไมตรี ใจทา",
//         "tel": "0903213915",
//         "email": "",
//         "iMs": [
//           ""
//         ],
//         "referObjId": "2C59F0C4-902D-405F-91CD-41B6ED82DE8F",
//         "leadType": "proj",
//         "status": "flw",
//         "origin": "int",
//         "followUpLog": "17/09/2022 00:04|new|User register.|ไมตรี ใจทา/n19/09/2022 17:12|flw|ลูกค้าทำสัญญากับโครงการแล้วค่ะ|admin/n",
//         "creationTime": "2022-09-17T00:04:09.3546821",
//         "lastEditTime": "2022-09-19T10:12:46.8765649",
//         "publishTime": "2022-09-19T10:12:46.8765649",
//         "active": true,
//         "acceptInvite": true,
//         "ownerId": "user",
//         "lastEditorId": "df26c6c6-9c34-49f2-917c-5470f97b5811"
//       }
//     ],
//     "respItems": 2,
//     "allItems": 2,
//     "errors": [],
//     "hasErrors": false
//   }

export interface LeadRequest {
    currentpage: number;
    pagesize: number;
    publishonly: boolean;
}

export interface LeadResponse {
    id: string;
    name: string;
    tel: string;
    email: string;
    iMs: string[];
    referObjId: string;
    leadType: string;
    status: string;
    origin: string;
    followUpLog: string;
    creationTime: string;
    lastEditTime: string;
    publishTime: string;
    active: boolean;
    acceptInvite: boolean;
    ownerId: string;
    lastEditorId: string;
}

export interface LeadListResponse {
    value: LeadResponse[];
    // total:  number;
    // respItems: number;
    // allItems: number;
    // errors: string[];
    // hasErrors: boolean;
}
