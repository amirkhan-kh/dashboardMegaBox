import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import { useEffect, useReducer, useContext } from "react";
import { useNavigate } from "react-router";
import { leadsAPI } from "../../pages/leads/index.js";
import { DataTable } from "../../../src/components/ui/dataTable/dataTable";
import Modal from "../../components/ui/modal/Modal";
import { modalStore } from "../../components/context/contex.js";
import { initialState, reducer } from "../../reducer/leadReducer.js";
import { toast } from 'react-toastify'
const Leads = () => {
  const { setModal } = useContext(modalStore);
  const [state, dispatch] = useReducer(reducer, initialState);
  const useFetch = async () => {
    dispatch({ type: "LOADING_START" });
    try {
      const response = await leadsAPI.getAll();

      if (response.status === 200 && response.data.length > 0) {
        dispatch({ type: "SUCCESS", payload: response.data });
      } else {
        dispatch({ type: "ERROR", payload: "Ma'lumot topilmadi " });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    } finally {
      dispatch({ type: "LOADING_END" });
    }
  };

  async function deleteLead(id){
    
    try {
      const res =await leadsAPI.delete(id);
      if(res.status === 200){
        useFetch()
        toast.success(`Ma'lumot muvaffaqiyatli o'chirildi`, {autoClose:2000});
      }      
    } catch (error) {
      console.log(error);
      
    }
  }

  async function changeStatus(id) {
    try {
      const response = await  leadsAPI.update(id, { status: true})
      if(response.status === 200){
        useFetch()
        toast.success(`Ma'lumot muvaffaqiyatli o'zgartirildi`, {autoClose:2000});
      }      
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    useFetch();
  }, []);
  const naviate = useNavigate();
  return (
    <> 
      <Modal title="Create title" />
      <div className="p-4 w-full">
        <section>
          <div className="flex justify-between mb-10">
            <form className="flex items-center gap-3 bg-[#F4F4F5] py-2 px-4 rounded-[16px] w-[70%]">
              <input type="search" placeholder="Qidiruv..." />
            </form>
            <button
              onClick={() => naviate(-1)}
              className="bg-indigo-300 py-2 px-5 text-white flex items-center gap-2 rounded-2xl" >
              <BsFillDoorOpenFill />
              Back
            </button>
            <button
              onClick={() => setModal({ type: "OPEN" })}
              className="bg-orange-600 py-2 px-5 text-white flex items-center gap-2 rounded-2xl" >
              <FaDotCircle />
              Add Task
            </button>
          </div>
          <DataTable data={state.leads.length ? state.leads : []} deleteItem={deleteLead} dataChange={changeStatus} />
        </section>
      </div>
    </>
  );
};
export default Leads;
