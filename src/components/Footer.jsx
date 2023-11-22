import { Email, EmailOutlined, LinkedIn, LocationCity, Phone, PhoneAndroidOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {medium, small} from "../responsive"

const MainContainer=styled.div`
height: 100%;
background-color: #8F3985;
color: black;
`
const InnerContainer=styled.div`
display:flex;
justify-content: space-between;
padding: 1rem;
gap:3rem;
${small({display:"inline"})}
`
const Left=styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex:2;
`
const Right=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
flex:1;
`
const OwnerDiv=styled.div`
display: flex;
height: 2rem;
background-color: black;
color: white;
align-items: center;
justify-content: space-between;
${medium({display:"none"})}
`

export default function Footer() {
    return (
        <>
        <MainContainer>
            <InnerContainer>
                <Left>
                    <div><h2 style={{textAlign:"start"}}>MakeYouUp</h2></div>
                    <div><p>Nobody is born with a perfect face but everyone is blessed with attractive features, waiting to be revealed.  we bring you the best of makeup online, featuring a wide range of personal care products of high quality. Hide your blemishes and flaws to create a smooth, healthy skin surface. Add colours to contour your face to achieve an attractive look. Highlight your best features with products that enhance them. The sky is the limit when it comes to transforming your face to reveal the kind of look you prefer.</p></div>
                </Left>
                <Right>
                <div><h2 style={{textAlign:"start"}}>Contact Us</h2></div>
                <div><p><LocationCity/>All over India</p></div>
                <div><p><Email/>borntowindharma@gmail.com</p></div>
                <div><p><Phone/> +91-7358799565</p></div>
                </Right>
            </InnerContainer>
        </MainContainer>
        <OwnerDiv>
            <div>
                Developed by Dharma FSD
            </div>
            <div className="d-flex gap-1">
                <div><EmailOutlined/>borntowindharma@gmail.com</div>
                <div><LinkedIn/>linkedin.com/in/dharma-s-4b0b18244</div>
                <div><PhoneAndroidOutlined/>+91-7358799565</div>
            </div>
        </OwnerDiv>
        </>
    )
}
