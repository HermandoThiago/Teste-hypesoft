import Container from "../../components/Container/Container";
import Apresentation from "../../components/Apresentation/Apresentation";
import Description from "../../components/Description/Description";
import CardServices from "../../components/CardsServices/CardServices";
import CardsWorks from '../../components/CardsWorks/CardsWorks';
import Enterprise from "../../components/Enterprises/Enterprise";
import Banner from "../../components/Banner/Banner";
import Testimonial from "../../components/Testimonial/Testimonial";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Container size='large'>
                <Apresentation />
            </Container>
            <Description />
            <CardServices />
            <CardsWorks />
            <Enterprise />
            <Banner />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}