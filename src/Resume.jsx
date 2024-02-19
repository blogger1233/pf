import { useState } from "react"

export default function Resume() {
    const [whatido] = useState([
        {
            icon: "/logo/icons8-coding-64.png",
            title: "web development",
            desc: "Elevating your online presence, I specialize in crafting dynamic and responsive websites using leading web frameworks like Django and Flask. From sleek user interfaces to robust backend systems, I bring your digital vision to life with expertise in technologies such as Django Rest Framework, FastAPI, and Flask Restx."

        },
        {
            icon: "/logo/icons8-portrait-mode-scanning-50.png",
            title: "web scrapping",
            desc: "Unleashing the power of web scraping, I extract valuable data from online sources to fuel your decision-making processes. Specializing in precision scraping techniques, I navigate the web's vast landscape to provide accurate and actionable insights, from competitor analysis to market research."

        }
    ])
    const [skills] = useState([
        {
            name: "expressjs",
            logo: "/logo/icons8-express-js-50.png"
        },
        {
            name: "mongodb",
            logo: "/logo/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png"
        },
        {
            name: "reactjs and frameworks",
            logo: "/logo/icons8-react-16.png"
        },
        {
            name: "nodejs",
            logo: "/logo/icons8-nodejs-48.png"
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
            What i do! 👨🏻‍💻
        </h1>
        <div className="grid-whatido">
            {
                whatido.map((value, key) => {
                    if (key % 2 != 0) {
                        return (<div style={{ backgroundColor: "#ffebd0" }} className="child-whatido" key={key}>
                            <h2>{value.title} <img
                                height={25}
                                src={value.icon}
                            /></h2>
                            <p>
                                {value.desc}
                            </p>
                        </div>)
                    }
                    else {
                        return (<div style={{ backgroundColor: "#f2f7fc" }} className="child-whatido" key={key}>
                            <h2>{value.title}
                                <img
                                    height={25}
                                    src={value.icon}
                                />

                            </h2>
                            <p>
                                {value.desc}
                            </p>
                        </div>)
                    }

                })
            }
        </div>
    </div>)
}