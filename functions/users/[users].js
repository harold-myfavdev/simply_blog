export function onRequest(context) {
    console.log("users")
    return new Response(context.params.users)
  }