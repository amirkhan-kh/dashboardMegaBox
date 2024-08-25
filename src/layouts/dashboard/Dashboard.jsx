import "./_dashboard.scss";
import Header from "@layouts/header/Header";
import Section from "@layouts/section/Section";
import Aside from "@layouts/aside/aside";
import { Outlet, useHref, useNavigate } from "react-router";
import { useEffect, useReducer } from "react";
import { modalStore } from '../../components/context/contex.js'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Dashboard = () => {
  const href = useHref();
  const nav = useNavigate();
  useEffect(() => {
    let isAuth = localStorage.getItem("token");
    if (!isAuth) {
      toast.error(`Ma'lumotlaringiz o'chirildi`, {autoClose:2000});
      setTimeout(() => {
        nav("/login");
      }, 1500);
      
    }
  }, [href]);

  const states = {
    isOpen: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CLOSE":  return { ...state, isOpen: false };
      case "OPEN":  return { ...state, isOpen: true };
      default:  return state;
    }
  };

  const [{ isOpen }, dispatch] = useReducer(reducer, states);

  const setModal = (action) => { 
    dispatch(action); 
  };

  return (
    <>
    <modalStore.Provider value={{isOpen, setModal}}>
      <ToastContainer/>
      <Header />
      <Section className="dashboard-section">
        <Aside />

        <Outlet />
      </Section>
      </modalStore.Provider>
    </>
  );
};

export default Dashboard;
