import React from 'react'
import { useState } from 'react';

const Friendlist = () => {
    const [friendlist, setFriendlist] = useState([
        {id:1, img:'https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg', name:'James'},
        {id:2, img:'https://cdn.pixabay.com/photo/2019/05/04/15/24/art-4178302_1280.jpg', name:'Sarah'},
        {id:3, img:'https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg', name:'Matt'},
        {id:4, img:'https://cdn.pixabay.com/photo/2015/04/20/13/25/flowers-731300_1280.jpg', name:'Ola'},
        {id:5, img:'https://cdn.pixabay.com/photo/2014/06/10/19/10/boy-366311_1280.jpg', name:'David'},
        {id:6, img:'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_1280.jpg', name:'Nelson'},
        {id:7, img:'https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg', name:'Jane'},
        {id:8, img:'https://cdn.pixabay.com/photo/2017/04/06/19/34/girl-2209147_1280.jpg', name:'Mary'},
        {id:9, img:'https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_1280.png', name:'Anthony'},
        {id:10, img:'https://cdn.pixabay.com/photo/2021/04/17/06/57/colour-6185159_1280.jpg', name:'Brad'},
        {id:11, img:'https://cdn.pixabay.com/photo/2021/05/21/16/58/woman-6271553_1280.jpg', name:'Cynthia'}
    ]);

    return(
        <div className="friend">
            {friendlist.map((i) => (
                <div className="friendlist" key={i.id}>
                    <div className="friendlist-img">
                        <img src={i.img} alt="" />
                        <span className="friendlist-img-desc"></span>
                    </div>
                    <div className="friendlist-name">
                        {i.name}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Friendlist