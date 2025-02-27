export async function onRequest({request, env, ctx}) {
    // const allowedDomain = "https://myfav.dev"; 

    // const origin = request.headers.get("Origin") || request.headers.get("Referer");

    // if (!origin || !origin.startsWith(allowedDomain)) {
    //     return new Response(JSON.stringify({ error: "Unauthorized request" }), {
    //         status: 403,
    //         headers: { "content-type": "application/json" }
    //     });
    // }

    const API_URL = env.NOCODB_URL;
    const token = env.NOCODB_TOKEN;
    const options = {
        method: 'GET',
        headers: {      
            'xc-token': token    
        }
    };

    try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            headers: {
                'content-type': 'application/json',
            },
            status: 200
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: {
                'content-type': 'application/json',
            },
            status: 500
        });
    }
}