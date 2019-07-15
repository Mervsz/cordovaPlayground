
async function test(data: any) : Promise<any>{
 {
    return this.http.get(data)
        .map((res: any) => res.json())     // Get the body of the response
        .toPromise()                // Convert the observable into a promise
        .then(
            (response: any) => {           // Success callback
  
                this.results = response;
                console.log(response);
  
                // Since the http get is async, you need to place the logic
                // to save the data in the storage here!
                // ...
                // this.storage.set('data', JSON.stringify(response));
                // ...
            },
            (error: any) => {              // Error callback
  
                // TODO: Handle error
                // ...
  
                console.log(error);
                return error;
            });
  }
}