import { Component } from "react";
import './index.css'

class ActiveEventRegistrationDetails extends Component {
    
    zeroItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/L6bsnb7D/mark-g173d4c736-1280.png" className="clickImg" alt='img-1'/>
                <p className="heading">ThankYou</p>
            </div>
        )
    }

    firstItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/htThssY3/sign-g2cb2e6faf-1280.png" className="clickImg" alt='img-1'/>
            </div>
        )
    }

    secondItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/1t9Hsf6s/thank-you-g18bc31e9e-1280.png" className="clickImg" alt='img-1'/>
            </div>
        )
    }

    thirdItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/HkRL2dr4/register-now-gf07be59de-1280.png" className="clickImg" alt='img-1'/>
            </div>
        )
    }

    fourthItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/L6bsnb7D/mark-g173d4c736-1280.png" className="clickImg" alt='img-1'/>
                <p className="heading">ThankYou</p>
            </div>
        )
    }

    fifthItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/1t9Hsf6s/thank-you-g18bc31e9e-1280.png" className="clickImg" alt='img-1'/>
            </div>
        )
    }

    sixthItem = () => {
        return (
            <div className="show-image-container">
                <img src="https://i.postimg.cc/1t9Hsf6s/thank-you-g18bc31e9e-1280.png" className="clickImg" alt='img-1'/>
            </div>
        )
    }

    render() {
        const {id} = this.props
            switch (id) {
            case 1 :
                return this.zeroItem()
            case 2:
                return this.firstItem()
            case 3:
                return this.secondItem()
            case 4:
                return this.thirdItem()
            case 5:
                return this.fourthItem()
            case 6:
                return this.fifthItem()
            default:
                return this.sixthItem()
        }
    }
}
export default ActiveEventRegistrationDetails