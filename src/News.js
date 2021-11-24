import React from 'react'
import { useState } from 'react'


const News = () => {

    const [news, setNews] = useState([
        {id:1, userImg:'https://cdn.pixabay.com/photo/2013/10/16/22/42/head-196541_1280.jpg', name:'Chris', time:'1h', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', post_img:'https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_1280.jpg'},
        {id:2, userImg:'https://cdn.pixabay.com/photo/2015/01/28/23/24/woman-615421_1280.jpg', name:'Trent', time:'3h', text:'Lorem ipsum dolor sit amet.', post_img:'https://cdn.pixabay.com/photo/2015/05/15/14/21/architecture-768432_1280.jpg'}
    ]);

    return(
        <div className="news">
            {news.map((i) => (
                <div key={i.id} className="empty">
                    <div className="news-header">
                        <div className="news-image">
                            <img src={i.userImg} alt="user"/>
                        </div>
                        <div className="news-header-name">
                            {i.name}
                            <div className="news-header-date">{i.time}</div>
                        </div>
                    </div>
                    <div className="news-body">
                        <div className="news-body-text">
                            {i.text}
                        </div>
                        <div className="news-body-image">
                            <img src={i.post_img} alt="" />
                        </div>
                    </div>
                    <div className="news-footer">

                    </div>
                </div>
            ))}


        </div>
    )
}
export default News