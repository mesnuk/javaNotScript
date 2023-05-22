import axios from "axios";
import '../../assets/styles/components/common/updateFrom.scss'

export const UpdateForm = ({type, id, closeModal, element}) => {


    const  handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {}
        Array.from(e.target.elements).filter(el => el.type !== 'submit').map(el => Object.assign(payload , { [el.name] : el.value }))

        axios.put(`http://localhost:8080/api/${type}/${id}`, payload).then(data => closeModal()).catch(err => alert(err))


    }
    switch (type) {
        case 'subjects' :
            return <form className='update_form__container' onSubmit={handleSubmit}>
                <label>
                    name
                    <input type="text" name='subject_name' defaultValue={element.name}/>
                </label>
                <button className='update_form__submit' type={'submit'}>Update</button>
            </form>
        case 'chairs' :
            return <form className='update_form__container'>
                <label>
                    <input type="text" name='chair_name' defaultValue={element.name}/>
                </label>
                <button className='update_form__submit' type={'submit'}>Update</button>
            </form>
        case 'teachers' :
            return <form className='update_form__container'>
                <label>
                    <input type="text" name='firstName' defaultValue={element.firstName}/>
                </label>
                <label>
                    <input type="text" name='lastName' defaultValue={element.lastName}/>
                </label>
                <label>
                    <input type="email" name='email' defaultValue={element.email}/>
                </label>
                <label>
                    <input type="text" name='rank' defaultValue={element.rank}/>
                </label>
                <label>
                    <input type="text" name='role' defaultValue={element.role}/>
                </label>
                <button className='update_form__submit' type={'submit'}>Update</button>
        </form>

        default :
            return <form className='update_form__container'>

            </form>
    }
}