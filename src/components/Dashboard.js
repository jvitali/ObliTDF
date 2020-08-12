import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})



export default connect(mapStateToProps)(Dashboard)

