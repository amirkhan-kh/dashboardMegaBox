import { Table, THead, TBody,  Td, Th, Tr } from '../../table/index';
import { tableNav } from '../../../mocks/table/TableNav';

export const DataTable = ({ data, deleteItem, dataChange }) => {
  return (
    <Table>
      <THead>
        <Tr className="w-full">
          {tableNav.map((item) => <Th key={item.id}>{item.name}</Th>)}
        </Tr>
      </THead>
      <TBody className="text-center">
        {
          data.length > 0 ? (
            data.map((item, index) => {
              return (
                <Tr key={index} className="text-center ">
                  <Td>{index + 1}</Td>
                  <Td><p className={item.status ?  `underline` : null}></p>{item.customer}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.phone}</Td> 
                  <Td>
                    <button style={{backgroundColor: item.status ? "yellow": ''}} disabled={item.status} onClick={()=>dataChange(item.id)} className="bg-indigo-300 py-2 px-3 rounded-lg text-white">EDIT</button>
                  </Td>
                  <Td>
                    <button onClick={()=>deleteItem(item.id)} className="bg-red-300 py-2 px-3 rounded-lg text-white">DELETE</button>
                  </Td>
                </Tr>
              )
            })
          ) : (
            <Tr>
              <Td colSpan={tableNav.length}>Ma'lumot topilmadi</Td>
            </Tr>
          )
        }
      </TBody>
    </Table>
  )
}
