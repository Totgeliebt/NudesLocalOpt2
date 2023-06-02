import {logout} from "../thunkApi/userSlice";

 export const handleServerError = (response, dispatch) => {
  if (response.status===401) {
    console.log('status401')
    dispatch(logout())
  } else if(!response.ok ){
    throw new Error(response.status);
  }
}