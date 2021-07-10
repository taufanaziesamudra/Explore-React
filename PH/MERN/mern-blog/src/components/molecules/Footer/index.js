import React from 'react'
import { Logo, Facebooklogo, Twiiterlogo, Instagramlogo, Githublogo, Discordlogo } from '../../../assets'
import './footer.scss'


const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
                <div className="sosial-wrapper">
                    <Icon img={Facebooklogo}  />
                    <Icon img={Twiiterlogo} />
                    <Icon img={Instagramlogo} />
                    <Icon img={Githublogo} />
                    <Icon img={Discordlogo} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
