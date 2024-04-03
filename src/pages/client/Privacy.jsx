import { Helmet } from "react-helmet-async";
import "./privacy.css"


const Privacy = () => {
    return (
        <div className="privacy-container">
            <Helmet>
                <title>Hoteru - Privacy</title>
                <meta name='description' content='We are best company in restaurant chain. Privacy' />
            </Helmet>
            <main>
                <h1>Privacy Policy</h1>
                <p>
                    This is the privacy policy for our website. Please read it carefully
                    to understand how we collect, use, and protect your personal
                    information.
                </p>
                <section>
                    <h2>Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you
                        register for an account, subscribe to our newsletter, or contact us.
                        The types of information we may collect include your name, email
                        address, and any other information you choose to provide.
                    </p>
                </section>
                <section>
                    <h2>How We Use Your Information</h2>
                    <p>
                        We may use the information we collect from you to provide, maintain,
                        and improve our services, communicate with you, and personalize your
                        experience. We may also use your information to send you promotional
                        emails or newsletters.
                    </p>
                </section>
                <section>
                    <h2>Third-Party Services</h2>
                    <p>
                        We may use third-party services to help us operate our website and
                        deliver our services. These third-party services may have access to
                        your personal information but are prohibited from using it for any
                        other purpose.
                    </p>
                </section>
                <section>
                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update our privacy policy from time to time. We will notify
                        you of any changes by posting the new privacy policy on this page.
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our privacy policy, please
                        contact us at <a href="mailto:example@example.com">example@example.com</a>.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Privacy;