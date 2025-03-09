import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

const Section2 = () => {
    const [userdata, setuserdata] = useState([])
    const fetchingData = async () => {
        const result = await axios.get("http://localhost:3001/cardData");
        setuserdata(result.data);
    }

    useEffect(() => {
        fetchingData()
    }, [])
    return (
        <>
            <div className="section bg-light">
                <div className="container">
                    <div className="row">
                        {userdata.map((card) => {
                            return (
                                <Card
                                    key={card.id}
                                    card_title={card.card_title}
                                    description={card.description}
                                    linkText={card.linkText}
                                    className={card.className}
                                />
                            )
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Section2