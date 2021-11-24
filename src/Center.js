import React from 'react'
import Updates from './Updates'
import Status from './Status'
import News from './News'

const Center = () => {
    return(
        <div className="center">
            <Updates/>
            <Status/>
            <News/>

        </div>
    )
}
export default Center