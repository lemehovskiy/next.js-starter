import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Slider = dynamic(() =>
import
('../components/Slider'), {
    ssr: false
}
)

class Index extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='container bg-primary page'>

                <Slider/>
                <h1>Hello, world!</h1>
                <Link href='/about'>
                    <a className='btn btn-light'>About us</a>
                </Link>
            </div>
        )
    }
}
export default Index