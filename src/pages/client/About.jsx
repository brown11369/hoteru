import SEO from "../../component/SEO";
import "./about.css";

const About = () => {
    return (
        <>
        <SEO title="Hoteru - About Us" description="We are best company in restaurant chain. About Page" />
            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container">
                    <div className="imgContainer">
                        <img alt="amzon" className="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg" />
                        <img alt="amzon" className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg" />
                    </div>
                    <div className="responsive-container-block textSide">
                        <p className="text-blk heading">
                            About Us
                        </p>
                        <p className="text-blk subHeading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
                        </p>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                            <div className="cardImgContainer">
                                <img alt="amzon" className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
                            </div>
                            <div className="cardText">
                                <p className="text-blk cardHeading">
                                    Value
                                </p>
                                <p className="text-blk cardSubHeading">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                            <div className="cardImgContainer">
                                <img alt="amzon" className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
                            </div>
                            <div className="cardText">
                                <p className="text-blk cardHeading">
                                    Value
                                </p>
                                <p className="text-blk cardSubHeading">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                            <div className="cardImgContainer">
                                <img alt="amzon" className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
                            </div>
                            <div className="cardText">
                                <p className="text-blk cardHeading">
                                    Value
                                </p>
                                <p className="text-blk cardSubHeading">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                            <div className="cardImgContainer">
                                <img alt="amzon" className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
                            </div>
                            <div className="cardText">
                                <p className="text-blk cardHeading">
                                    Value
                                </p>
                                <p className="text-blk cardSubHeading">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <a>
                            <button className="explore">
                                Explore our Services
                            </button>
                        </a>
                    </div>
                    <img alt="amzon" className="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" />
                </div>
            </div>
        </>
    )
}

export default About;