import React from "react"
import {Box} from '@mui/material'

import BodyPart from './BodyPart'

//ToDo: we have the horizontalScrollBar and the BodyPart in. Now we need to plug it in our searchExercises.js

const HorizontalScrollbar = (data) =>{
    return (
        <div> 
            {data.map((item)=> (<Box 
            key={item.id || item}
            itemid={item.id || item}
            title={item.id || item}
            m="0 40px"
            >
                <BodyPart item={item} bodyPart = {bodyPart} setBodyPart={setBodyPart}/>
            </Box>
            )
            )}
        </div>
    )
}

export default HorizontalScrollbar