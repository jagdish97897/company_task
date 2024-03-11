

import React, { useState } from 'react'
import styled from 'styled-components'
import jagdish from '../../img/jagdish.jpeg'

import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={jagdish} alt="" />
                <div className="text">
                    <h2>Jagdish Prasad Singh</h2>
                    {/* <p>Your Money</p> */}
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 1.5rem;
    width: 300px;
    height: 100%;
    background: #ffffff; /* Changed background color */
    border: 2px solid #dddddd; /* Changed border color */
    border-radius: 20px; /* Adjusted border radius */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #ffffff;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: #222260; /* Changed text color */
            font-size: 1.2rem; /* Adjusted font size */
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: flex;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .3s ease; /* Adjusted transition duration */
            color: #555555; /* Changed text color */
            padding: .5rem 1rem; /* Adjusted padding */
            border-radius: 10px; /* Added border radius */
            &:hover {
                background-color: #f0f0f0; /* Added hover background color */
            }
            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                margin-right: 0.5rem; /* Added margin between icon and text */
            }
        }
    }

    .active {
        color: #222260; /* Changed active text color */
        i {
            color: #222260; /* Changed active icon color */
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;


export default Navigation