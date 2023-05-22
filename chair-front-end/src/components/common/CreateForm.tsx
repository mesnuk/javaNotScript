import '../../assets/styles/components/common/createFrom.scss'
export const CreateForm = ({type, setData}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {};
        Array.from(e.target.elements).filter(el => el.type !== 'submit').map(el => Object.assign(payload , { [el.name] : el.value }))
        setData(payload)
    }

    switch (type) {
        case 'subjects':
            return <form className='create_form__container' onSubmit={handleSubmit}>
                <label>
                    name
                    <input type="text" name={'name'}/>
                </label>
                <button type={'submit'}>Create</button>
            </form>;
        case 'teachers':
            return <form className='create_form__container' onSubmit={handleSubmit}>
                <label>
                    firstName
                    <input type="text" name='firstName'/>
                </label>
                <label>
                    lastName
                    <input type="text" name='lastName'/>
                </label>
                <label>
                    email
                    <input type="text" name='email'/>
                </label>
                <label>
                    rank
                    <input type="text" name='rank'/>
                </label>
                <label>
                    role
                    <input type="text" name='role'/>
                </label>
                <button type={'submit'}>Create</button>

            </form>;
        case 'speciality':
            return <form className='create_form__container' onSubmit={handleSubmit}>
                <label>
                    name
                    <input type="text" name={'name'}/>
                </label>
                <button type={'submit'}>Create</button>
            </form>;
        case 'chairs':
            return <form className='create_form__container' onSubmit={handleSubmit}>
                <label>
                    name
                    <input type="text" name={'name'}/>
                </label>
                <button type={'submit'}>Create</button>

            </form>;
        default :
            return <form className='create_form__container' onSubmit={handleSubmit}>
            </form>;
    }

}