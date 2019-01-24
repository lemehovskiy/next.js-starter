import React from 'react'
import Link from 'next/link'

class About extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='container bg-success page'>
                <h1>About us</h1>
                <p>
                    Notice how a loading spinner showed up while my content was "loading"?
                    Pretty neat, huh?
                </p>
                <Link href='/'>
                    <a className='btn btn-light'>Go back home</a>
                </Link>
            </div>
        )
    }
}
export default About