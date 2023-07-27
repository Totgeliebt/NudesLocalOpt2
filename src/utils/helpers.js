import {logoutUser} from "../thunkApi/authSlice";

 export const handleServerError = (response, dispatch) => {
  if (response.status===401) {
    console.log('status401')
    dispatch(logoutUser())
  } else if(!response.ok ){
    throw new Error(response.status);
  }
}
