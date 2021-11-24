import React from 'react'
import {BiPhotoAlbum, BiSmile, BiTag} from  'react-icons/bi';

const Status = () => {
    return(
        <div className="status">
            <div className="status-body">
                <div className="status-image">
                    <span>
                        <img src="https://images.pexels.com/photos/7974362/pexels-photo-7974362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </span>
                </div>
                <div className="status-input">
                    <input type="text" name="" id="" placeholder="Put your thought here"/>
                </div>
            </div>
            <div className="status-accessories">
                <span className="status-icon">
                    <BiPhotoAlbum className="photo"/>
                    <span className="status-icon-text">Photo/Video</span>
                </span>
                <span className="status-icon">
                    <BiTag className="tag"/>
                    <span className="status-icon-text">Tag Friends</span>
                </span>
                <span className="status-icon">
                    <BiSmile className="feelings"/>
                    <span className="status-icon-text">Feeling/Activity</span>
                </span>
            </div>
        </div>
    )
}
export default Status