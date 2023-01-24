import React from 'react'
import opinion1 from '../multimedia/opinion1.jpg'
import opinion2 from '../multimedia/opinion2.jpg'
import opinion3 from '../multimedia/opinion3.jpg'


export const OpinionsCard = () => {

    return (<div>
        <img className="opinion-img" src={opinion1} alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit esse explicabo nam saepe eius quod, beatae minus quia tempora veniam ut dolorum modi quae amet illo laboriosam officia accusamus?
        </p>
        <h5>
            name_here
        </h5>
    </div>)
}

