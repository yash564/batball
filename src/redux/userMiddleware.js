
export default async function userFetchMiddleware(dispatch){
    try{
        let resp=await fetch("https://jsonplaceholder.typicode.com/users");
        let users=await resp.json();
        dispatch({
            type:"fetch_users",
            payload:users,
        })
    }
    catch(err){
        dispatch({
            type:"error_users",
            payload:err.message,
        })
    }
}