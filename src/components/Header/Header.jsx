
import React, { useContext } from 'react'
import './index.css';
// import { Logo } from '../Logo/Logo';

import { ReactComponent as LogoSvg } from '../Logo/logo.svg';
import styles from './style.module.css'
import { Search } from '../Search/Search';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as Basket } from './img/basket.svg';
import { ReactComponent as Profile } from './img/profile.svg';
import { ReactComponent as Like } from '../Card/img/like.svg';
import { CardsContext } from '../../context/cardContext';



export const Header = (props) => {

    const setSearchQuery = (path) => {
        // console.log({path});
        props.setSearch(path);
    }

    const location = useLocation();

    const { favorites } = useContext(CardsContext);

    return <div className="header">
        <div className='container'>
            <div className='header__wrapper'>
                <Link to={'/'}>
                    <LogoSvg className='logo' />
                </Link>
                {location.pathname === '/' && <Search setSearch={setSearchQuery} />}
                <div className='header__icons'>
                    <Link className='header__fav' to={'/favorites'}>
                        <Like className='header__like' />
                        {!!favorites.length && <span className='header__bubble'>{favorites.length}</span>}
                    </Link>
                    <Basket className='header__icon' />
                    <Profile className='header__icon' />

                </div>
            </div>
        </div>
    </div>
}
