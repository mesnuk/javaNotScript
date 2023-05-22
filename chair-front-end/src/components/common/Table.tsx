import '../../assets/styles/components/common/table.scss'
import {useState} from "react";
import {Modal} from "./Modal";
import {createPortal} from "react-dom";
import {UpdateForm} from "./UpdateForm";
export const Table =  ({data, type, handleDelete, setData}) => {
    const [showModal, setShowModal] = useState(false);
    const [currentId, setCurrentId] = useState(-100)
    const handleOpenModal = (id) => {
        setCurrentId(id)
        setShowModal(true)
    }


    return <table className='table__container'>
        <thead>
            <tr>
                {!!data.length && Object.keys(data[0]).map(el => <th key={el}>{el}</th>)}
            </tr>
        </thead>
        <tbody>
            {data && data.map(el => <tr key={el.id}>
                {
                    Object.values(el).map(val => <td key={val + Math.random() * 100}>{val}</td>)
                }
                <td><button onClick={() => handleOpenModal(el.id)}>Update</button></td>
                <td><button onClick={e => handleDelete(e,el.id)}>Delete</button></td>
                {showModal && currentId === el.id && createPortal(<Modal type={type}
                                                                         id={el.id}
                                                                         title={'Update Subject'}
                                                                         handleClose={() => setShowModal(false)}
                                                                         element={el}
                                                                         setData={setData}
                />,
                    document.getElementById('root'))}
            </tr>)}
        </tbody>

    </table>
}