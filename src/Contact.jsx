import { useState } from 'react';

export default function Contact() {
    const [blocks] = useState([
        {
            title: "Phone",
            name: "+919660490556",
            image: "../public/logo/icons8-phone-48.png"
        },
        {
            title: "Email",
            name: "4444dhruv@gmail.com",
            image: "../public/logo/icons8-email-48.png"
        },
        {
            title: "Location",
            name: "Gurugram, India",
            image: "../public/logo/icons8-location-48.png"
        }
    ]);

    return (
        <div className="contact">
            <div className="block">
                {blocks.map((block, index) => (
                    <div className="block2" key={index}>
                        <img className='contact-img' src={block.image} alt={block.title} />
                        <div className="inner-block">
                            <p className='block-title'>{block.title}</p>
                            <p className='block-data'>{block.name}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}
