import './modal.css';
import { useContext, useReducer } from 'react';
import { GiExitDoor } from "react-icons/gi";
import { modalStore } from '@components/context/contex.js';
import { addReducer, customerStates} from '../../../reducer/leadReducer.js'
import { leadsAPI } from '../../../pages/leads/index.js';

function Modal({ title }) {
    const [{customer, email, phone}, dispatch] = useReducer(addReducer,  customerStates)
    const { setModal, isOpen } = useContext(modalStore);
    const modaStyle = {
        display: isOpen ? "grid" : "none",
    };
    async function useFetch(params) {
        const newObject = {customer: customer, email, phone, id: String(Date.now()), status: false}
        if(newObject.customer.trim().length === 0 || newObject.email.trim().length === 0 || newObject.phone.trim().length === 0){
            alert('Toldir');
            return
        } else {
            try {
                const response = await leadsAPI.create(newObject);
                if(response.status === 201){
                    setModal({type: 'CLOSE'})
                    window.location.reload()
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    

    return (
        <div className="modal" style={modaStyle}>
            <div className="wrapper">
                <div className="content">
                    <h3>{title}</h3>
                    <button onClick={()=> setModal({type: "CLOSE"})} className="border border-[#333] rounded-[50%] p-1"><GiExitDoor /></button>
                </div>
                <form className="grid gap-4 mb-10  w-full place-content-center">
                    <input onChange={(e) => dispatch({ type: "UPDATE_CUSTOMER", payload: e.target.value })} value={customer} type="text" placeholder="Create name" className="py-2 p-5 bg-white rounded-lg w-[330px] border-l-indigo-800 border-solid" />
                    <input onChange={(e) => dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })}value={email} type="email" placeholder="Create email" className="py-2 p-5 bg-white rounded-lg w-[330px] border-l-indigo-800 border-solid" />
                    <input onChange={(e) => dispatch({ type: "UPDATE_PHONE", payload: e.target.value })} value={phone} type="tel" placeholder="Create phone" className="py-2 p-5 bg-white rounded-lg w-[330px] border-l-indigo-800 border-solid" />
                </form>
                <button onClick={()=>useFetch()} className="ms-[70%] bg-green-500 px-4 py-2 rounded-xl text-white">Save</button>
            </div>
        </div>
    );
}

export default Modal;
