import React from 'react'

export default function NextArrow(props) {
    const { onClick } = props;
    return (
         <svg onClick={onClick} className='mx-xxl-5 mx-2 nextarrow pointer' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
         <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
     </svg>
    )
}
