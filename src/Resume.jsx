import { useState } from "react"

export default function Resume() {
    const [skills] = useState([
        {
            name: "expressjs",
            logo: "../public/logo/icons8-express-js-50.png"
        },
        {
            name: "mongodb",
            logo: "../public/logo/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png"
        },
        {
            name: "reactjs and frameworks",
            logo: "../public/logo/icons8-react-16.png"
        },
        {
            name: "nodejs",
            logo: "../public/logo/icons8-nodejs-48.png"
        },
        {
            name: "ffmpeg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/FFmpeg-Logo.svg/2560px-FFmpeg-Logo.svg.png"
        }
    ])
    return (<div className="resume">
        <h1>
            ABOUT ME 🚀
        </h1>
        <p>
            Hello, I'am Dhruv &#128512; a proficient MERN stack developer, I specialize in framework like React-native, Express js, and open-source software like FFmpeg
        </p>
        <p>
            I constantly strives to learn new technology in Full stack
        </p>
        <p>
            Recent project include authentication,streaming application using ffmpeg and application deployment using docker and amazon aws💻🌐
        </p>
        <h1>
            Skills!
        </h1>
        <ul>
            {
                skills.map((value, index) => {
                    return (<li className="list-skills" key={index}>
                        {value.name}
                        <img
                            key={index}
                            src={value.logo}
                        />
                    </li>)
                })
            }
        </ul>
        <h1 style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
            What i do! <img
                src="../public/logo/icons8-coding-64.png"
                height={30}
            />
        </h1>
        <p>editing still continue....</p>
    </div>)
}