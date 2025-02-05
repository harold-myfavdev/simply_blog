export async function onRequest(context) {
    // Create a prepared statement with our query
    const ps = context.env.DB.prepare("SELECT * from Customers");
    const data = await ps.all();
    console.log(data)
    return Response.json(data);
  }