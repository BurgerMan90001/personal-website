
const baseUrl: string = 'http://localhost:'+process.env.PORT;
export const request = {
  async get(url:string){
    try {
      const response = await fetch(baseUrl+url);
      const result = await response.json();
      console.log("Success:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  async post(url:string) {
    try {
      const response = await fetch(baseUrl+url, {
        method: 'POST',
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  },
  async put(url:string) {
    try {
      const response = await fetch(baseUrl+url, {
        method: 'PUT',
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  },
  async delete(url:string) {
    try {
      const response = await fetch(baseUrl+url, {
        method: 'DELETE',
      });
      const result = await response.json();
      console.log("Success:", result);

    } catch (error) {
      console.error("Error:", error);
    }
  }
}

