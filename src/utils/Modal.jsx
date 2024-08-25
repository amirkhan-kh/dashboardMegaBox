import { useState, useEffect} from 'react';
import { getPostById, getPost } from '@service/post';


 const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null; 
  const [data, setData] = useState([]);

  useEffect(() => {
    getPost().then((response) => {
      setData(response);
    })
    catch(error) {
      console.error( error);
    };
  }, []);
  const handleRowClick = async (id) => {
    const product = await getPostById(id);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
      {data.map((product) => (
              <div key={product.id} onClick={() => handleRowClick(product.id)}>
                <div className="translate-y-6">
                  <img src={product.thumbnail} alt={product.title} className="w-[50px] h-[50px] mt-[15px]" />
                </div>
              </div>
            ))}
        <button onClick={onClose}>Yopish</button>
      </div>
    </div>
  );
};

export default Modal;
