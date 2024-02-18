import { useState } from "react"
import Contact from "./Contact"

export default function Navbar() {
    const [details] = useState({
        name: "Dhruv Kumar Yadav",
        roles: ['full stack developer', 'MERN stack developer', 'react native developer', 'UI/UX', 'Javascript developer']
    })

    return (<div className="navbar">
        <span className="logo">
            <img
                height={150}
                src="/pf.png"
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
                <a>
                    <img
                        height={30}
                        width={30}
                        src="/logo/icons8-linkedin-48.png"
                    />
                </a>
                <a>
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
                <a>
                    <img
                        height={30}
                        width={30}
                        src="/logo/icons8-facebook.svg"
                    />
                </a>
            </div>
            <Contact />
            <a className='resume-link'>
                Download Resume
            </a>
        </p>
    </div >)
}