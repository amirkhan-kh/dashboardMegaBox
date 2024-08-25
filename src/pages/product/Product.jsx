import { useEffect, useState } from 'react';
import success from '../../assets/succes-removebg-preview.png'
import { postAPI } from '../../service/post/post.js';
import { Link } from 'react-router-dom';
const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    postAPI.getAll().then((response)=> {
      setData(response.data.products);
      
    })
  }, []);
  
  return (
    <div className="p-4 w-full">
      <section className="w-[100%]" id="sectionCategory">
        <div className="flex items-center justify-between mb-5">
          <form
            id="searchInput"
            className="flex items-center gap-3 bg-[#F4F4F5] py-2 px-4 rounded-[16px] w-[70%]"
          >
            <i className="bi bi-search"></i>
            <input type="search" placeholder="Qidiruv..." />
          </form>
          <div className="flex items-center justify-between gap-8">
            <button className="flex items-center justify-between bg-[#EEEEEE] py-2 px-4 rounded-[10px] gap-3">
              Status
            </button>
            <button className="flex items-center justify-between bg-[#DC5F00] py-2 px-4 rounded-[10px] text-[#fff] gap-3">
              Kategoriya qoshish <i className="bi bi-record-circle"></i>
            </button>
          </div>
        </div>
        <div className="length flex gap-[10px] mb-5 text-gray-600">
          Umumiy kategoriya soni  {data.length}
        </div>
        <table className="w-[100%]">
          <thead className="bg-neutral-100 cursor-pointer rounded-2xl">
            <tr>
              <th className="text-neutral-600 p-1 text-[10px] font-[600]">
                KATEGORIYA RASMI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                MAHSULOT NOMI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                KATEGORIYA NOMI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                SUBKATEGORIYA NOMI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                BREND NOMI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                CHEGIRMA
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                NARXI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                SOTUVDAMI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                HOLATI
              </th>
              <th className="text-neutral-600 p-1 text-[12px] font-[600]">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {data.map((product) => (
              <tr key={product.id}>
                <td className="translate-y-10"><img style={{width: "67px", height:"67px"}}  src={product.thumbnail} alt={product.title} className="w-[50px] h-[50px] mt-[15px]" /></td>
                <td className=" text-[13px] w-5">{product.title}</td>
                <td className=" text-[13px]">{product.availabilityStatus}</td>
                <td className=" text-[12px]">{product.reviews.map((item)=> item.reviewerName.substring(0, 8))}</td>
                <td className=" text-[15px] translate-x-5">{product.brand}</td>
                <td className="text-[14px] translate-x-3  py-1 rounded-[20px]    text-orange-600"><h3 className="bg-orange-200 py-2 px-4 rounded-2xl">{product.stock}%</h3></td>
                <td className="text-[14px] translate-x-3  py-1 rounded-[20px]  text-indigo-900"><h3 className="bg-indigo-200 py-2 px-4 rounded-2xl">${product.price}</h3></td>
                <td className="text-[14px] translate-x-3  py-1 rounded-[20px] text-green-500"><h3 className="bg-indigo-200 rounded-2xl flex items-center py-1 translate-y-1 px-4  gap-2"><img className="w-[25px] h-[20px]" src={success} alt="" />Sotuvda</h3></td>
                <td className="  text-[14px] p-1 mt-6 rounded-[20px]"><h3 className="bg-[#D1F4E0]  text-[#12A150] py-2 px-3 rounded-2xl text-center">{product.category.toUpperCase()}</h3></td>
                <td className="block ms-[55%] ">
                <Link to={`/brands/${product.id}`}>
                  <button><i className="bi bi-menu-button-wide"></i></button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Product