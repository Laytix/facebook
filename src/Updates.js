import React from 'react'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';



const Updates = () => {
    const [updates, setUpdates] = useState([
        {id:1, img:'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg', name:'Gedu group'},
        {id:2, img:'https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_1280.jpg', name:'CBC group'},
        {id:3, img:'https://cdn.pixabay.com/photo/2017/03/27/12/59/adult-2178560_1280.jpg', name:'Led group'},
        {id:4, img:'https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg', name:'Yoda group'}, 

    ]);
    

    return(
        <div className="updates">
            {updates.map((i) => (
                <div className="updates-properties" key={i.id}>
                    <div className="updates-body">
                        <img src={i.img} alt="Profile" />
                        <div className="updates-body-properties">
                            <div className="updates-body-image">
                                <img src={i.img} alt="" />
                                
                            </div>
                        </div>
                    </div>
                    <div className="updates-name">{i.name}</div>
                </div>
            ))}
            <span className="updates-icon">
                <BsArrowRight className="updates-icon-arrow"/>
            </span>

        </div>
    )
}
export default Updates