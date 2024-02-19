import { useState } from "react"
import Contact from "./Contact"

export default function Navbar() {
    const [loading, setLoading] = useState(true)
    const [details] = useState({
        name: "Dhruv Kumar Yadav",
        roles: ['full stack developer', 'MERN stack developer', 'react native developer', 'UI/UX', 'Javascript developer']
    })

    return (<div className="navbar">
        <span className="logo" style={{}}>
            <img
                height={150}
                onLoad={() => { setLoading(false) }} // Call handleImageLoad function when the image is loaded
                src="/pf.png"
                style={{
                    opacity: loading ? 0 : 1,
                    transition: "opacity 0.5s ease-in-out" // Apply transition effect to opacity
                }}
            />
        </span>
        <p className="heading">
            {details.name}
        </p>
        <p>
            <ul className="roles">
                {
                    details.roles.map((value) => {
                        // eslint-disable-next-line react/jsx-key
                        return (<li>{value}</li>)
                    })
                }
            </ul>
            <div className="link">
                <a href="https://www.linkedin.com/in/dhruv-kumar-yadav-5943022a5" target="_blank">
                    <img
                        height={30}
                        width={30}
                        src="/logo/icons8-linkedin-48.png"
                    />
                </a>
                <a href="https://github.com/blogger1233" target="_blank">
                    <img
                        height={30}
                        width={30}
                        src="/logo/icons8-github-48.png"
                    />
                </a>
                <a>
                    <img
                        height={30}
                        width={30}
                        src="/logo/icons8-twitter-48.png"
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100076600885540&sk=map" target="_blank">
                    <img
                        height={30}
                        width={30}
                        src="/logo/icons8-facebook.svg"
                    />
                </a>
            </div>
            <Contact />
            <a target="_blank" href="https://github.com/blogger1233" className='resume-link'>
                Project repo
            </a>
        </p>
    </div >)
}