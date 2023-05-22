import '../../assets/styles/components/common/header.scss'

import {Navigation} from "./Navigation";

export const Header = ({isMobile}) => {


    return (
        <header className='header__container'>
            <div className='header__wrapper'>
                <Navigation/>
            </div>
        </header>
    )
}