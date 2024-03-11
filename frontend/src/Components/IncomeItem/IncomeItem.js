
import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

// Define the styled component for the delete icon
const DeleteIcon = styled.i`
    font-size: 1.2rem; /* Adjust the size as needed */
    color: #fff; /* White color */
`;

// Use the DeleteIcon component in your DeleteButton styled component
const DeleteButton = styled.button`
    background-color: #f44336; /* Material Red 500 */
    color: #fff; /* White text color */
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out; /* Smooth transition */

    /* Hover effect */
    &:hover {
        background-color: #d32f2f; /* Darken the background color on hover */
    }

    /* Focus effect */
    &:focus {
        outline: none; /* Remove default focus outline */
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3); /* Add custom focus outline */
    }

    /* Ensure the button text doesn't wrap */
    white-space: nowrap;

    /* Prevent button from being stretched by its content */
    min-width: 100px;
    text-align: center;
`;

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';
        }
    };

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    };

    console.log('type', type);

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <DeleteButton onClick={() => deleteItem(id)}>
                            <DeleteIcon className="fas fa-trash-alt" /> {/* You can use any trash icon class */}
                            Delete
                        </DeleteButton>
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem;



// import React from 'react'
// import styled from 'styled-components'
// import { dateFormat } from '../../utils/dateFormat';
// import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
// import Button from '../Button/Button';

// function IncomeItem({
//     id,
//     title,
//     amount,
//     date,
//     category,
//     description,
//     deleteItem,
//     indicatorColor,
//     type
// }) {

//     const categoryIcon = () =>{
//         switch(category) {
//             case 'salary':
//                 return money;
//             case 'freelancing':
//                 return freelance
//             case 'investments':
//                 return stocks;
//             case 'stocks':
//                 return users;
//             case 'bitcoin':
//                 return bitcoin;
//             case 'bank':
//                 return card;
//             case 'youtube':
//                 return yt;
//             case 'other':
//                 return piggy;
//             default:
//                 return ''
//         }
//     }

//     const expenseCatIcon = () => {
//         switch (category) {
//             case 'education':
//                 return book;
//             case 'groceries':
//                 return food;
//             case 'health':
//                 return medical;
//             case 'subscriptions':
//                 return tv;
//             case 'takeaways':
//                 return takeaway;
//             case 'clothing':
//                 return clothing;
//             case 'travelling':
//                 return freelance;
//             case 'other':
//                 return circle;
//             default:
//                 return ''
//         }
//     }

//     console.log('type', type)

//     return (
//         <IncomeItemStyled indicator={indicatorColor}>
//             <div className="icon">
//                 {type === 'expense' ? expenseCatIcon() : categoryIcon()}
//             </div>
//             <div className="content">
//                 <h5>{title}</h5>
//                 <div className="inner-content">
//                     <div className="text">
//                         <p>{dollar} {amount}</p>
//                         <p>{calender} {dateFormat(date)}</p>
//                         <p>
//                             {comment}
//                             {description}
//                         </p>
//                     </div>
//                     <div className="btn-con">
//                         <Button 
//                             icon={trash}
//                             bPad={'1rem'}
//                             bRad={'50%'}
//                             bg={'var(--primary-color'}
//                             color={'#fff'}
//                             iColor={'#fff'}
//                             hColor={'var(--color-green)'}
//                             onClick={() => deleteItem(id)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </IncomeItemStyled>
//     )
// }

// const IncomeItemStyled = styled.div`
//     background: #FCF6F9;
//     border: 2px solid #FFFFFF;
//     box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//     border-radius: 20px;
//     padding: 1rem;
//     margin-bottom: 1rem;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     width: 100%;
//     color: #222260;
//     .icon{
//         width: 80px;
//         height: 80px;
//         border-radius: 20px;
//         background: #F5F5F5;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border: 2px solid #FFFFFF;
//         i{
//             font-size: 2.6rem;
//         }
//     }

//     .content{
//         flex: 1;
//         display: flex;
//         flex-direction: column;
//         gap: .2rem;
//         h5{
//             font-size: 1.3rem;
//             padding-left: 2rem;
//             position: relative;
//             &::before{
//                 content: '';
//                 position: absolute;
//                 left: 0;
//                 top: 50%;
//                 transform: translateY(-50%);
//                 width: .8rem;
//                 height: .8rem;
//                 border-radius: 50%;
//                 background: ${props => props.indicator};
//             }
//         }

//         .inner-content{
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             .text{
//                 display: flex;
//                 align-items: center;
//                 gap: 1.5rem;
//                 p{
//                     display: flex;
//                     align-items: center;
//                     gap: 0.5rem;
//                     color: var(--primary-color);
//                     opacity: 0.8;
//                 }
//             }
//         }
//     }
// `;

// export default IncomeItem