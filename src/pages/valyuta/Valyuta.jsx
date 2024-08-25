import {useState} from 'react'
const ValutaSection = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState('UZS');
  const [total, setTotal] = useState('');
  
  const result ={
    USD: 1,
    UZS: 12608,
    RUB: 88,
    YUAN: 1763,
    TENGE: 26,
    LIRA: 371
  }

  const handleConvert = (e) => {
    e.preventDefault();
    const converValue = amount * result[currency]
    setTotal(`${converValue}`)
  }

  

  return (
    <div className="p-4 w-[100%]">
     <section id="sectionValue" className="w-[100%]">
      <div id="valyuta" className="flex flex-col">
      <h2 className="text-[20px] font-[700] gap-5 mb-5">Xozirgi valyuta bo'yicha <span className=" border-b-4 text-amber-500 border-amber-500">1 USD</span></h2>
        <form onSubmit={handleConvert} className="bg-slate-100 p-4 rounded-xl">
        <input className="bg-white p-2 rounded-xl"
         placeholder="USD" 
         id="defaultInput" 
         type="number" min="1"
         value={amount}
         onChange={(e)=> setAmount(e.target.value)}/>
           <select
              className="rounded-xl p-2"
              id="fromSelect"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="UZS">UZS</option>
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="LIRA">LIRA</option>
              <option value="TENGE">TENGE</option>
              <option value="YUAN">YUAN</option>
            </select>
          <button type="submit" id="btn" className="bg-amber-500 mt-5 py-2 px-4 rounded-xl text-white">Convert</button>
        </form>
        <div className="flex   mt-3 bg-slate-100 p-3 gap-2">
           <h3>Total:</h3>
           <h3 className="total">{total}</h3>
        </div>
      </div>
     </section>
    </div>
  );
};

export default ValutaSection;
