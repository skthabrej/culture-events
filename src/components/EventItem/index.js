import './index.css'
import { Component } from 'react'

class EventItem extends Component {

    onClickButton = () => {
        this.props.onClickView(this.props.eachItem.id)
    }

    render() {
        const {eachItem} = this.props
        const {imageUrl,imageAlt,belongsTo,eventName} = eachItem
        return (
            <ul onClick={this.onClickButton}>
                <li className='list-container'>
                    <div className='item-container'>
                        <img src={imageUrl} alt={imageAlt} className='img-card'/>
                        <h1 className='event-heading'>{belongsTo}</h1>
                        <p className='event-paragraph'>{eventName}</p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default EventItem