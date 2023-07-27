import GlobalStyles from "./styles/global";
import AppRouter from "./router/AppRouter";
import {useMatch, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {userBalance} from "./thunkApi/userSlice";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
  const userName = useSelector((state) => state?.auth?.user.userName);
  const userPassword = useSelector((state) => state?.auth?.user.password);
  const navigate = useNavigate()
  const match = useMatch('/');
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userBalance({userName,userPassword}))
    console.log('balance jтработал')
  },[])
  useEffect(() => {
    if(match)
    navigate('/landing')
  }, [])
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

export default App;
