import { authApi } from "../axios.config";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export async function useAuth(userObject) {
    const notify = () => toast("Wow so easy!");
    try {
        const response = await authApi.post('/auth/login', userObject)
        localStorage.setItem('token', response.data.access_token)
        if(response.data.access_token){
            location.href="/"
            {
               <div>
                <button onClick={notify}>Notify!</button>
                    <ToastContainer />
                </div>
            }
        }
        
        
    } catch (error) {
        console.log(error);
        
    }
}