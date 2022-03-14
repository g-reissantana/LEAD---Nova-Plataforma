import styled, { keyframes } from "styled-components";

type PropsLi = {
    size: string;
};

const Container = styled.div`

    min-height: 100vh;
`;

const Header = styled.header`

    /* Size and alignment */
    width: 100vw;
    height: 8rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 99999;

    padding: 0 9rem;

    /* Appearance */
    background-color: #F9F9F9;

    /* Effects */
    box-shadow: 0px 3px 3px rgba(0, 0, 0, .5);


    @media(max-width: 680px) {
        padding: 0 2rem;
    }
`;

const HeaderLeadLogo = styled.div`

    /* Size and alignment */
    width: auto;
    height: 60%;

    /* Response IMG */
    img {
        width: 100%;
        height: 100%;
    }

    @media(max-width: 620px) {
        height: 40%;
    }
    @media(max-width: 480px) {
        display: none;
    }
`;

const HeaderMenu = styled.ul`
    display: flex;
    gap: 1rem;

    list-style: none;

    flex: 1;
    justify-content: flex-end;
    @media(max-width: 480px) {
        justify-content: space-around;
    }
`;

const HeaderMenuLi = styled.li((props: PropsLi) => (`
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props.size === 'large' ? '#F9F9F9' : '#601B9F'};

    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;

    border-radius: 1rem;
    border: solid 2px #601B9F;

    background-color: ${props.size === 'large' ? '#601B9F' : 'transparent'};

    :hover {
        filter: brightness(1.5);
    }
`))

const LeadLogoSmall = styled.img`

    width: 26rem;
    height: auto;

    margin-bottom: 5rem;
`
const Main = styled.main`

    padding-top: 8rem;
    height: 100vh;

    background-color: #FF3C5D;
    background: linear-gradient(180deg , #FF3C5D 88%, #f2526d 93%, #f48699);
`
const letterAnimate = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
`
const MainWellcome = styled.div`

    max-width: 120rem;
    height: 100%;
    margin: auto;
    padding: 0 3rem;

    display: flex;
    gap: 5rem;
    
    position: relative;
    
    .effectText {
        max-width: 480px;
        text-align: left;
        font-weight: 500;
        color: #fff;
    }

    .effectText::after {
        content: '_';
        opacity: 1;
        margin-left: 5px;
        display: inline-block;
        animation: ${letterAnimate} .7s infinite;
    }

    @media(max-width: 450px) {
        padding: 0 3rem 0 2rem;
    }
`
const bannerAnimation = keyframes`
    0%{
        width: 100%;
        height: 89%;
    }
    50% {
        width: 95%;
        height: 84%;
    }
    100% {
        width: 100%;
        height: 89%;
    }
`
const MainWellcomeBannerArea = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;  
    
    @media(max-width: 620px) {
        display: none;
    }
`
const MainWellcomeBannerImg = styled.img`

    width: 100%;
    height: 89%;
    max-height: 100%;

    animation: ${bannerAnimation} 3.8s infinite ease-in-out;

`
const MainWellcomeText = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;


    width: 70%;

    h1,h2 {
        font-family: 'Epilogue', sans-serif;
        font-size: 8.4rem;
        font-weight: 700;
        line-height: 8.5rem;
        letter-spacing: -0.02em;
        
        color: #F9F9F9;
    }
    h2 {
        margin: 1rem 0 2rem 0;
        text-transform: uppercase;
    }

    p {
        font-family: 'Epilogue', sans-serif;
        font-size: 2.6rem;
        font-weight: 500;
        line-height: 3rem;

        color: #F9F9F9;
    }


    button {
        margin-top: 2rem;
        width: 22rem;
        height: 6.5rem;


        border-radius: 1rem;
        border: none;

        font-size: 2rem;
        font-weight: 600;
        color: #F9F9F9;

        background: #601B9F;

        cursor: pointer;

        :hover {
            filter: brightness(1.2);
        }
    }

    @media(max-width: 1100px) {
        h1,h2 {
            font-size: 4.4rem;
            line-height: 4.8rem;
        }

        p {
            font-size: 1.6rem;
            line-height: 2rem;
        }
    }
    @media(max-width: 745px) {
        width: 100%;

        h1,h2 {
            font-size: 3.4rem;
            line-height: 3.2rem;
        }

        p {
            font-size: 1.3rem;
            line-height: 1.6rem;
        }
    }
    @media(max-width: 620px) {
        h1,h2 {
            font-size: 5.2rem;
            line-height: 5rem;
            
            color: #F9F9F9;
        }

        p {
            font-size: 1.8rem;
            line-height: 2.5rem;

            margin: 2rem 0;
        }
    }
    @media(max-width: 450px) {
        h1,h2 {
            font-size: 4.5rem;
        }
    }
    @media(max-width: 390px) {
        h1, h2 {
            font-size: 3.9rem;
            line-height: 3.5rem;
        }

        p {
            font-size: 1.7rem;
        }
    }
    @media(max-width: 375px) {
        p {
            font-size: 1.5rem;
        }
    }
    @media(max-width: 333px) {
        h1, h2 {
            font-size: 3.5rem;
            line-height: 3.5rem;
        }

        p {
            font-size: 1.4rem;
        }
    }
    
`

type MainSectionProps = {
    bgColor: string;
}
const MainSection = styled.div((props:MainSectionProps) => (
    `
        padding-top: 1rem;

        background-color: ${props.bgColor};
        height: calc(100vh - 8rem);

        @media(max-width: 1100px) {
            height: auto;
        }

        .bar {
            margin-top: 6rem;
            width: 100%;
            height: 20rem;
            background-color: #FF3C5D;

            display: flex;
            justify-content: space-around;
            align-items: center;

            h1 {
                color: #F9F9F9;
                font-family: 'Epilogue', sans-serif;
                font-size: 5.4rem;
                font-weight: 700;
                line-height: 7rem;
            }

            button {
                margin-top: 2rem;
                width: 22rem;
                height: 6.5rem;


                border-radius: 1rem;
                border: none;

                font-size: 2rem;
                font-weight: 600;
                color: #F9F9F9;

                background: #601B9F;

                cursor: pointer;

                :hover {
                    filter: brightness(1.2);
                }
            }

            @media(max-width: 920px) {
                flex-direction: column-reverse;
                
                height: auto;

                button {
                    margin-bottom: 2rem;
                }
            }
            @media(max-width: 620px) {
                h1 {
                    font-size: 4.4rem; 
                    line-height: 5.8rem;
                }
            }
            @media(max-width: 450px) {
                h1 {
                    font-size: 3rem; 
                    line-height: 4.2rem;
                }
            }
        }
    `
))
const MainSectionSubTitle = styled.h1`

    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    color: #FF4700;

    @media(max-width: 640px) {
        font-size: 2rem;
    }
    
`
const MainSectionTitle = styled.h1`

    font-family: 'Epilogue', sans-serif;
    font-size: 4.8rem;
    font-weight: 700;
    text-align: center;
    color: #601B9F;
    @media(max-width: 640px) {
        font-size: 3.5rem;
    }
`

const MainSectionDivide = styled.div`
    width: 90%;
    margin: 5rem auto 0 auto;
    
    display: flex;
    justify-content: space-between;
    /* gap: 2rem; */

    .texts {
        width: 40%;

        p {
            margin-top: 5rem;

            font-family: 'Work Sans';
            font-size: 2rem;
            font-weight: 400;
            line-height: 3rem;
            text-align: justify;

            height: 245px;
        }
    }

    @media(max-width: 1080px) {
        flex-direction: column;
        align-items: center;

        .texts {
            width: 80%;

            margin: 3rem 0 6rem 0;

            p {
                margin-top: 1rem;
                height: auto;
            }
        }
    }
    @media(max-width: 620px) {
        margin: 2.5rem auto 0 auto;
    }
    @media(max-width: 423px) {
        p {
            font-size: 1.5rem !important;
            line-height: 2.5rem !important;
        }
    }
`
const MainSectionDivideBannerArea = styled.div`
    width: 60%;
    /* margin-left: -70px; */
    display: flex;
    justify-content: center;

    img {
        width: 81%;
        height: 81%;

        object-fit: contain;
    }
    @media(max-width: 620px) {
        width: 80%;
    }
`
const MainSectionDivideTitle = styled.h1`
    flex: 1;
    font-family: 'Epilogue', sans-serif;
    font-size: 3.8rem;
    font-weight: 700;
    text-align: center;
    color: #601B9F;

    @media(max-width: 640px) {
        font-size: 2.5rem;
    }
    @media(max-width: 423px) {
        font-size: 1.8rem;
    }
`

const MainSectionCategories = styled(MainSection)`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 2rem 10rem;
`

const MainSectionCategorie = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Work Sans', sans-serif;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
        text-align: justify;

        max-width: 60rem;
    }

    @media(max-width: 1100px) {
        flex-direction: column;
        gap: 2rem;

        margin-bottom: 3rem;
    }
    
`

const MainSectionIconCategorie = styled.div`
    width: 24rem;
    height: 24rem;

    margin-right: 10rem;

    display: flex;

    img {
        width: 100%;
        height: 100%;
    }

    @media(max-width: 1100px) {
        margin-right: 0;
    }
`

const MainSectionPartials = styled.div`

    margin-top: 4rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 2rem;
`
const MainSectionPartialBox = styled.div`

    width: 25.6rem;
    height: 12.3rem;
`

const MainSectionPartialImg = styled.img`

    width: 100%;
    height: 100%;
`



export {
    Container,
    Header,
    HeaderLeadLogo,
    HeaderMenu,
    HeaderMenuLi,
    Main,
    MainWellcome,
    MainWellcomeBannerArea,
    MainWellcomeBannerImg,
    MainWellcomeText,
    MainSection,
    MainSectionTitle,
    MainSectionSubTitle,
    MainSectionDivide,
    MainSectionDivideBannerArea,
    MainSectionDivideTitle,
    MainSectionCategories,
    MainSectionCategorie,
    MainSectionIconCategorie,
    MainSectionPartials,
    MainSectionPartialBox,
    MainSectionPartialImg,
    LeadLogoSmall
};