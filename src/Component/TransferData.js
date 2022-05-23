import React from 'react'
import "./style.css"

const TransferData = ({ data }) => {
    return (
        <section className='container main grid'>

            <div className='section_div'>
                <div className='profile_div'>
                    <h2 className='profile_name'>{data.name}</h2>
                    <p>Location {data.location.name}</p>
                </div>
                <div>
                    <img className='section_img' src={data.image} alt='images' />
                </div>
                <div>
                    <p>Gander {data.gender}</p>
                    <p><b> Post at </b>{data.created}</p>
                    <p>Likes {data.id}</p>
                    <p>status {data.status}</p>
                </div>
            </div>
        </section>
    )
}

export default TransferData