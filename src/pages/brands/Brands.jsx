import { useEffect, useState } from 'react';
import { postAPI } from '../../service/post/post.js';
import { Link } from 'react-router-dom';

const Brands = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    postAPI.getAll().then((response)=> {
      setData(response.data.products);
      
    })
  }, []);
 
  
  return (
    <div className="p-4 w-full">
      <section id="sectionCategory">
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
          </div>
        </div>
        <div className="length flex gap-[10px] mb-5 text-gray-600">
          Umumiy kategoriya soni {data.length}
        </div>
        <table className="w-[100%]">
          <thead className="bg-neutral-100 cursor-pointer rounded-2xl">
            <tr>
              <th className="text-neutral-600 p-1 text-[15px] font-[500]">
                BRAND RASMI
              </th>
              <th className="text-neutral-600 p-1 text-[15px] font-[500]">
                BRAND YARATISH
              </th>
              <th className="text-neutral-600 p-1 text-[15px] font-[500]">
                HOLATI
              </th>
              <th className="text-neutral-600 p-1 text-[15px] font-[500]">
                YANGI SANA
              </th>
              <th className="text-neutral-600 p-1 text-[15px] font-[500]">
                TAHRIRLANGAN SANA
              </th>
              <th className="text-neutral-600 p-1 text-[15px] font-[500]">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {data.map((product) => (
              <tr key={product.id}>
                <td className="translate-y-6">
                  <img src={product.thumbnail} alt={product.title} className="w-[50px] h-[50px] mt-[15px]" />
                </td>
                <td className="p-1 text-[15px]">{product.title}</td>
                <td className="bg-[#D1F4E0] text-[#12A150] text-[14px] flex items-center justify-center p-1 mt-6 rounded-[20px]">
                  {product.category.toUpperCase()}
                </td>
                <td className="p-1 text-[14px]">{product.meta?.updatedAt.replace(/T/g, ' ').replace(/Z/g, '')}</td>
                <td className="p-1 text-[14px]">{product.meta?.createdAt.replace(/T/g, ' ').replace(/Z/g, '')}</td>
                <td className="block ms-[55%]">
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


export default Brands;

