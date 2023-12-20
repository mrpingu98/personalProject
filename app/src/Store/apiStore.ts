export const yieldGet = (url: string, header?: object) => {
    if (header) {
        const headersArray = Object.entries(header);
        console.log(headersArray);
        return fetch(url, {
            method: 'GET',
            headers: headersArray
        })
    }
    else {
        return fetch(url, {
            method: "GET"
        })
    }

}

// below doesn't currently work for the refresh token POST request...something to look at another time....

// export const yieldPost = (url: string, header?: object, body?: object) => {
//     const requestOptions: RequestInit = {
//         method: 'POST',
//     }
//     if (header) {
//         console.log('1')
//         const headersArray = Object.entries(header);
//         requestOptions.headers = headersArray;
//     }
//     if (body) {
//         console.log('2')
//         if (body instanceof URLSearchParams) {
//             // If the body is an instance of URLSearchParams, convert it to a string
//             requestOptions.body = body.toString();
//         }
//         else {
//             console.log('3')
//             requestOptions.body = JSON.stringify(body)
//         }
//     }
//     return fetch(url, requestOptions)
// }

//there is something about formatting the body to a string 
//depends on the content type the server is expecting 
//if passing in URLSearchParams you use .toString 
//if passing in a standard object (e.g. a payload for the backend), then use JSON.stringify on it
//NOTE: payload/body are the same thing


