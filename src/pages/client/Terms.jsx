import { Helmet } from "react-helmet-async";
import "./terms.css";

export default function Terms() {
    return (
        <div className="terms">
            <Helmet>
                <title>Hoteru - Terms</title>
                <meta name='description' content='We are best company in restaurant chain. Terms' />
            </Helmet>
            <header>
                <h1>Our Terms of Service</h1>
            </header>
            <div className="terms-container">
                <h2>1. Introduction</h2>
                <p>Welcome to our Hotel! These terms and conditions outline the rules and regulations for the use of our hotel's website, located at www.examplehotel.com.</p>

                <h2>2. Interpretation and Definitions</h2>
                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Hotel", "Ourselves", "We", "Our" and "Us", refers to our Hotel. "Party", "Parties", or "Us", refers to both the Client and ourselves.</p>
            </div>
        </div>
    )
}