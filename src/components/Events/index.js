import './index.css'
import { Component } from 'react'
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'

class Events extends Component {
    state = {id:0}
    onClickView = id => {
        this.setState({id:id})
    }

    render() {
        const {id} = this.state
        const {cultureDetailsList} = this.props
        return(
            <div className='background-container'>
                <div className='card-container'>
                    <div className='event-container'>
                        <h1 className='main-heading'>Events</h1>
                        <div className='items-container'>
                            {cultureDetailsList.map(eachItem => (
                                <EventItem 
                                onClickView={this.onClickView}
                                key={eachItem.id}
                                eachItem={eachItem}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='active-card-container'>
                        <ActiveEventRegistrationDetails id={id}/>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Events