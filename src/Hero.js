import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import "./App.css";


const Hero = ({handleLogout})=>{
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <section className="hero">
            <nav>
                <h2>SAFE WALLET</h2>
                <button onClick={handleLogout}>Logout</button>
                </nav>
                <br/>
                <Title/>
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                { selectedImg && (
                 <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                )}
            
        </section>
    )
}

export default Hero;