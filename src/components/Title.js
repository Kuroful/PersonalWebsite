import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Kevin Ma'


function Title(){
    return (
        <Helmet>
        <title> { TITLE }</title>
        </Helmet>
    )
}
export default Title;