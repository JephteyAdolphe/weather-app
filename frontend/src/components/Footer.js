import React from 'react'
import linkedin from '../pictures/linkedin.png';
import github from '../pictures/github.png';
import styled from 'styled-components';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div id="menu">
                    <FooterContainer>
                        <ul>
                            <li>
                                <a className="nav-link" href="https://www.linkedin.com/in/jephtey-adolphe-160166147/">
                                <img src={linkedin} />
                                </a>
                            </li>
                        </ul>
                    </FooterContainer>
                    <FooterContainer2>
                        <ul>
                            <li>
                                <a className="nav-link" href="https://github.com/JephteyAdolphe/weather-app">
                                <img src={github} />
                                </a>
                            </li>
                        </ul>
                    </FooterContainer2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

// Footer Container
const FooterContainer = styled.footer`
background: #344;
height: 9rem;
position: fixed;
left: 0;
bottom: 0;
width: 50%;
display: inline;
float: left;
`;

const FooterContainer2 = styled.footer`
background: #344;
height: 9rem;
position: fixed;
right: 0;
bottom: 0;
width: 50%;
display: inline;
float: right;
`;
