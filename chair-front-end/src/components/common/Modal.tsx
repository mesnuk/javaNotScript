import '../../assets/styles/components/common/modal.scss';
import {useEffect} from "react";
import {UpdateForm} from "./UpdateForm";
import {useClickOutside} from "../../hooks";

export const Modal = ({ type,id, title, handleClose, element, setData}) => {
    const {ref} = useClickOutside(handleClose)
    useEffect(() => {
        return () => handleClose();
    },[])

    return <div className='modal__container' >
        <div className='modal__wrapper' ref={ref}>
            <div className='modal__header'>
                <h2>{title}</h2>
                <button className='modal__close' onClick={handleClose}>
                    X
                </button>
            </div>
                <UpdateForm type={type} id={id} closeModal={handleClose} element={element} setData={setData}/>
        </div>
    </div>
}