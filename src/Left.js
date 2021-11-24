import React from 'react';
import { useState } from 'react';


const Left = () => {

    const [left, setLeft] = useState([
        {id:1, img:'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg', name:'Gedu group'},
        {id:2, img:'https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_1280.jpg', name:'CBC group'},
        {id:3, img:'https://cdn.pixabay.com/photo/2017/03/27/12/59/adult-2178560_1280.jpg', name:'Led group'},
        {id:4, img:'https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg', name:'Yoda group'}, 
        {id:5, img:'https://png.pngtree.com/png-clipart/20190520/original/pngtree-a-small-yellow-crown-png-image_4286489.jpg', name:'Liv group'}
    ]);
    

    return(
        <div className="left-nav">
            {left.map((i) => (
                <div className="left-nav-properties" key={i.id}>
                    <div className="left-nav-image">
                    <img src={i.img} alt="Profile" />
                    </div>
                    <div className="left-nav-name">{i.name}</div>
                </div>
            ))}

        </div>
    )
}

export default Left;