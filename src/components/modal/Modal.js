import React from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {
    return (
        <div className="ui container modalBackground">
            <div className="ui card centered">
                <div className="image">
                    <img src={window.location.origin + '/img/molly.png'} alt="Profile" />
                </div>
                <div className="content">
                    <p className="header">Molly</p>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        Art director living in New York.
                    </div>
                </div>
                <div className="extra content">
                    <p>
                        <i className="user icon"></i>
                        22 Friends
                    </p>
                </div>
                <button onClick={() => closeModal(false)} className="ui red button centered">Close Modal</button>
            </div>
        </div>
    )
}

export default Modal