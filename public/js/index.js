



function get(url: string) {
    
    
    taskRoutes.get('/tasks', (req, res) => {
        
        console.log("GET request to:", url);
    });
    
   
    fetch(url, {
        method: 'GET',
        headers: {
    //   ' Content-Type': 'application/json',
        },
    })
    .then((response: Response) => {
        // If the response is not 2xx, throw an error
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // If the response is 200 OK, return the response in JSON format.
        onOk(response);
        return response;
    })
    .then((response: Response) => onOk(response)) // You can continue to do something to the response.
    .catch((error: Error) => onError(error)); // In case of an error, it will log an error
    
    
}

function create() {
    const url = '/tasks';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(

                { action: 'upvote',
                    
                    userId: 12345,
                    taskId: 67890,
                    timestamp: new Date().toISOString()

                 }
            ) // Send data as JSON
        });
        console.log('Request completed!', response);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}




function onOk(response: Response) {
    console.log(response);
}
function onError(error: Error) 
{
    console.error("Fetch error:", error)
}
*/