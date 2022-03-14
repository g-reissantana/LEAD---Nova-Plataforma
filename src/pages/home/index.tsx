import './script.js'
import * as C from './style';
import { Link } from 'react-router-dom';

// Images
import leadLogo from '../../assets/lead.svg';
import boyBanner from '../../assets/boy1.svg';
import image1 from '../../assets/image1.png';
import leadCode from '../../assets/leadCode.svg';
import leadStudio from '../../assets/leadStudio.svg';
import atheneu from '../../assets/atheneu.png';

import magalu from '../../assets/magalu.png';
import stoodi from '../../assets/stoodi.png';
import nexo from '../../assets/nexo.png';
import umBi from '../../assets/1bi.png';
import alura from '../../assets/alura.png';

export const Home = () => {

    const partials = [magalu, stoodi, nexo, umBi, alura];
    
    return(
        <C.Container>
            <C.Header>
                <C.HeaderLeadLogo>
                    <Link to='/'>
                        <img src={leadLogo} alt="" />
                    </Link>
                </C.HeaderLeadLogo>
                <C.HeaderMenu>
                        <C.HeaderMenuLi 
                            data-tf-slider="YZEhZ6Ln"
                            size='large'>
                            Realizar Inscrição
                        </C.HeaderMenuLi>
                    <a target='_blank' href='https://lead.maisatheneu.com.br/'>
                        <C.HeaderMenuLi size='small'>
                            Login
                        </C.HeaderMenuLi>
                    </a>
                </C.HeaderMenu>
            </C.Header>

            <C.Main id='main'>
                <C.MainWellcome>
                    <C.MainWellcomeArea>
                        <C.MainWellcomeBannerArea>
                            <C.MainWellcomeBannerImg src={boyBanner} />
                        </C.MainWellcomeBannerArea>
                        <C.MainWellcomeText>
                            <C.LeadLogoSmall src={atheneu}/>
                            <h1>Bem vind@ a</h1>
                            <h2>jornada_lead</h2>
                            <p className='effectText'>Inscrições abertas para a formação que vai mudar o seu futuro!</p>
                            <button 
                                data-tf-slider="YZEhZ6Ln" 
                                data-tf-width="550" 
                                data-tf-iframe-props="title=Registration Form" 
                                data-tf-medium="snippet">
                                Entrar no foguete!
                            </button>
                        </C.MainWellcomeText>
                    </C.MainWellcomeArea>
                </C.MainWellcome>

                <C.MainSection bgColor='#F9F9F9'>
                    <C.MainSectionSubTitle>Como funciona ?</C.MainSectionSubTitle>
                    <C.MainSectionTitle>Somos o time LEAD</C.MainSectionTitle>
                    <C.MainSectionDivide>
                        <C.MainSectionDivideBannerArea>
                            <img src={image1} alt="" />
                        </C.MainSectionDivideBannerArea>
                        <div className='texts'>
                            <C.MainSectionDivideTitle>Educação + Tecnologia</C.MainSectionDivideTitle>
                            <p>Unificamos a tradição de uma das escolas públicas mais antigas do país com a inovação das maiores empresas do Brasil Nossa metodologia inovadora mistura teoria com a mão na massa e assim você aprende na prática como solucionar problemas reais!</p>
                        </div>
                    </C.MainSectionDivide>
                </C.MainSection>

                <C.MainSectionCategories bgColor='#D8D8FF'>
                    <C.MainSectionCategorie>
                        <C.MainSectionIconCategorie>
                            <img src={leadCode} alt="" />
                        </C.MainSectionIconCategorie>
                        <p>No leadCode você iniciará sua jornada pela programação sendo acompanhado pelas melhores e mais experientes empresas do mercado! Aqui você aprende a solucionar problemas reais através de demandas reais</p>
                    </C.MainSectionCategorie>
                    
                    <C.MainSectionCategorie>
                        <C.MainSectionIconCategorie>
                            <img src={leadStudio} alt="" />
                        </C.MainSectionIconCategorie>
                        <p>O leadStudio foi criado para produzir conteúdos para a web baseados na criatividade dos nossos alunos. Em 2021 fomos resposáveis pela criação e produção de 3 séries de podcasts e 1 mini documentário, conteúdos totalmente criados por alunos do Atheneu!</p>
                    </C.MainSectionCategorie>
                </C.MainSectionCategories>

                <C.MainSection bgColor='#F9F9F9'>
                    <C.MainSectionTitle>Parceiros</C.MainSectionTitle>
                    <C.MainSectionSubTitle>Empresas e instituições parceiras</C.MainSectionSubTitle>
                    <C.MainSectionPartials>
                        {partials.map((item, index) => {
                            return(
                                <C.MainSectionPartialBox key={index}>
                                    <C.MainSectionPartialImg src={item}/>
                                </C.MainSectionPartialBox>
                            )
                        })}
                    </C.MainSectionPartials>

                    <div className='bar'>
                        <h1>Quero fazer parte<br/>do LEAD!</h1>
                        <button 
                            data-tf-slider="YZEhZ6Ln" >
                                Inscreva-se aqui!
                        </button>
                    </div>
                </C.MainSection>

            </C.Main>
        </C.Container>
    );
};
