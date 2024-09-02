import React from "react";
import './Modal.css';

export default function Modal({ toggleModal }) {
    return (
        <div className="modal">
            <div className="overlay" onClick={() => toggleModal(false)}></div>
            <div className="modal-content">
                <h2>Movie Not Found</h2>
                <button className="close-modal" onClick={() => toggleModal(false)}>CLOSE</button>
            </div>
        </div>
    );
}
