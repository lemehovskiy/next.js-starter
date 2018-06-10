import React from 'react'
import Router from 'next/router'
import Link from 'next/link'


export default class extends React.Component {

    constructor (props) {
        super(props)
    }

    // handling escape close
    componentDidMount () {
    }

    componentWillUnmount () {
    }



    render () {

        return (
            <div>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </div>
        )
    }
}