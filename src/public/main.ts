
import taskRoutes from '../routes/tasks';

function get(uri: string) {
    
    fetch(uri).then((response: Response) => {
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
function onOk(response: Response) {
    console.log(response);
}
function onError(error: Error) 
{
    console.error("Fetch error:", error)
}

function create() {
    taskRoutes.post('/');
}


