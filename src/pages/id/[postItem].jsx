import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { postAPI } from '../../service/post/post.js';
const PostItem = () => {  
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({})

    async function fetchData(ID) {
        const response = await postAPI.getPostById(ID);;
        return response.data;
        
    }
   
    useEffect(()=>{
        const loadPost = async () => {
            const postData = await fetchData(id);  
            setPost(postData); 
        };
        loadPost();
    }, [id])
    const style = {
        width: "200px",
        height: "70px",
        backgroundColor: "rgb(228, 86, 109)",
        clipPath: "polygon(20% 0%, 80% 0%, 100% 0, 83% 50%, 100% 100%, 20% 100%, 0 100%, 0 0)",
      };

    return (
        <div className="p-4 w-full">
            <section className="div w-[100%] ">
                <div className="flex gap-10">
                    <img  className="w-[35%] border object-cover bg-orange-100 h-[100%] rounded-2xl " src={post.thumbnail} alt="" />   

                    <div className="flex flex-col">
                    <p className="text-gray-500 text-[25px] font-semibold mb-10">
                         {post.category && post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </p>
                        <p className="text-[25px] mb-4">{post.rating}</p>  
                        <p className=" mb-4">{post.description}</p> 
                        <h2 className="text-[30px] text-green-500 font-semibold mb-6">${post.price}</h2>
                        <table>
                            <tbody>
                                <th>{post.warrantyInformation}</th>
                                <th>{post.shippingInformation}</th>
                                <th>{post.availabilityStatus}</th>
                            </tbody>
                        </table>
                        <div style={style} className="mb-4 flex items-center justify-center gap-5 font-semibold text-white">SALE <span>{post.stock}%</span></div>
                    <button onClick={()=>navigate(-1)} className="py-2 px-3 bg-slate-700 w-[10%] text-white">Back</button>
                    </div>    
                 </div>            
            </section>
        </div>
    )
}

export default PostItem; 