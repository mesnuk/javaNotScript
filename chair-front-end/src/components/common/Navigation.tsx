import {NavLink} from "react-router-dom";


import '../../assets/styles/components/common/navigation.scss'


export const Navigation = () => {

    return (
        <nav className='navigation__container'>
            <NavLink to='/' className='navigation__link'>Home</NavLink>
            <NavLink to='/subjects' className='navigation__link'>Subjects</NavLink>
            <NavLink to='/chairs' className='navigation__link'>Chairs</NavLink>
            <NavLink to='/speciality' className='navigation__link'>Speciality</NavLink>
            <NavLink to='/teachers' className='navigation__link'>Teachers</NavLink>
        </nav>
    )
}