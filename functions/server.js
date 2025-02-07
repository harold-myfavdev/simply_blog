export async function onRequest(context) {
    const t0 = performance.now(); 
    // Create a prepared statement with our query
    const ps = context.env.BLOGS_DB.prepare("SELECT * from Customers");
    const data = await ps.all();
    const t1 = performance.now();     
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`); 
    return Response.json(data);
  }