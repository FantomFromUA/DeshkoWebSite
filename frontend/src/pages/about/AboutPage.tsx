import * as React from 'react';
import "./aboutPage.css";

import QuestionHero from '../../components/questionHero/QuestionHero';
import BannerHero from '../../components/bannerHero/BannerHero';
import RegestrationBlock from '../../components/registrationBlock/RegistrationBlock';


const AboutPage : React.FC = () => {
    return (
        <div>
            <BannerHero/>
            <div className='about-info'>
                <div className='about-info-hero'>
                    <img 
                        className='about-image'
                        src = {require('../../images/about-us-photo.jpg')}
                        alt="" 
                    />
                    <div className='about-text'>
                        <h3>Про нас</h3>
                        <p>
                            Транспортна компанія Deshko понад два десятки років активно й успішно працює
                            на ринку автомобільних вантажних перевезень, які здійснює з усіх країн
                            Євросоюзу з\в Україну "Україна Мукачево Міжнародне транспортне підприємство"
                        </p>
                    </div>
                </div>
                <div className='about-info-hero'>
                    <div className='about-text'>
                        <h3>Принципи діяльності підприємства</h3>
                        <p>
                            Розвиток підприємства відбувається за рахунок прибутку: жодних
                            банківських кредитів Колегіальний стиль керівництва з максимальним
                            рівнем особистої відповідальності Підтримка родинної атмосфери в
                            підприємстві Задоволені клієнти та співробітники — головна мета
                            підприємства Постійний розвиток відповідно до економічних інновацій
                            Орієнтація на основний вид діяльності підприємства забезпечує його
                            провідне положення на ринку
                        </p>
                    </div>
                    <img 
                        className='about-image'
                        src = {require('../../images/portal.jpg')}
                        alt="" 
                    />
                </div>
                <div className='about-info-hero'>
                    <img 
                        className='about-image'
                        src = {require('../../images/portal2.jpg')}
                        alt="" 
                    />
                    <div className='about-text'>
                        <h3>Про підприємствo</h3>
                        <p>
                            Наша транспортне підприємство здійснює перевезення вантажів
                            автомобільним транспортом як по Україні так і за кордон.
                            Місцезнаходження – Україна м.Мукачево. Наш автопарк складається з
                            автомобілів різного типу, тому у нас є можливість перевозити практично
                            всі види товарів. На кожне окреме перевезення оформляється страховання
                            відповідальності перевізника (CMR-страховання), тому Ви можете бути
                            абсолютно спокійні за збереження вантажу в дорозі проходження.
                            Транспортне підприемство «Deshko» вже більше 20 років працює на ринку
                            міжнародних автомобільних вантажоперевезень. Великий досвід та
                            професіоналізм нашої команди гарантує надійність, безпечність та
                            швидкість доставки Вашого вантажу.
                        </p>
                    </div>
                </div>
            </div>
            <RegestrationBlock/>
            <QuestionHero/>
        </div>
    );
}
 
export default AboutPage;