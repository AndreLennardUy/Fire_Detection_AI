import React from 'react';
import './css/home.css';
import image from './images/FireApp_Image.jpg';
import overview from './images/overview.jpg';
import resnet from './images/resnet50.gif';
import statement from './images/statement.gif';
import systems from './images/systems.gif';
import landscape from './images/landscape.gif';    
import teamwangan from './images/teamwangan.png';

const Home = () => {
    return (
        <>
        <div className='home-container'>
            <h1 className='section1-header'>"See fire. Stop fire.<br/> 
            Our app's accuracy will never backfire."</h1>
            <div className='section1-container'>
                <div className='section1-left'>
                    <h2>A machine learning mini-project
                    for use and research in effective fire 
                    protection and prevention</h2>
                    <p>
                    Team Wangan's web-based mini-project software is a sophisticated and advanced 
                    tool that can be used by private users and experts to <b>ensure improved home, 
                    commercial property, and public safety with quick and reliable alerts in case of fire.</b>
                    </p>
                    <p>
                    Our machine-learning algorithms are <b>constantly trained</b> with data analyzed and gathered
                    from different sources and datasets to provide the most consistent and accurate fire 
                    recognition and detection.
                    </p>
                </div>
                <div className='section1-right'>
                    <img src={image} alt='right'></img>
                </div>
            </div>
            
            <h1 className='section2-header'>Overview and Statement</h1>
            <div className='section2-container'>
                <div className='section2-left'>
                    <img src={overview} alt='GIF'/>
                </div>
            <div className='spacer'></div>
                <div className='section2-right'>
                    <p>
                        Early detection of fire in CCTV systems 
                        can significantly decrease the response time to such tragedies, 
                        saving many lives and properties.
                    </p>
                    <p>
                        This application, which works in an Internet browser, 
                        is <b>designed for future research and applications in CCTV systems</b>, 
                        especially those in private and commercial properties.
                    </p>
                </div>
            </div>
            
            <h1 className='section3-header'>Powered by ResNet-50</h1>
            <div className='section3-container'>
                <div className='section3-left'>
                    <p>
                        Machine learning is an integral part of the backend systems and algorithmic 
                        processes of this mini-project. Here, the model being used here is <b>ResNet-50</b>.
                    </p>
                    <p>
                        This is a classic neural network used as a backbone for many computer vision tasks.
                        <b> A convolutional neural network that is 50 layers deep</b>, one can load a pretrained
                        version of the neural network trained on more than a million images from the 
                        ImageNet database.
                    </p>
                </div>
                <div className='spacer'></div>
                <div className='section3-right'>
                    <img src={resnet} alt='resnet'/>
                </div>
            </div>

            <h1 className='section4-header'>The Power of the Convolutional Neural Network</h1>
            <div className='section4-container'>
                <div className='section4-left'>
                    <img src={statement} alt='statement'/>
                </div>
                <div className='section4-right'>
                <h2>ADVANTAGES</h2>
                    <ul className='custom-list'>
                        <li> 
                            High accuracy in computer vision tasks.
                        </li>
                        <li>
                            Improved training of deep networks.
                        </li>
                        <li>
                            Reduced computing requirements through transfer learning.
                        </li>
                        <li>
                            Optimized performance for mobile and CCTV systems.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='section4-footer'>
                <p>
                ResNet50 has been shown to <b>produce high accuracy in various computer vision tasks</b>,
                 including image classification, object detection, and segmentation. Its architecture,
                  based on residual blocks and skip connections, makes it easier to train deeper networks 
                  without encountering the vanishing gradient problem or degradation in accuracy.
                </p>
            </div>

            <h1 className='section5-header'>What is this ideal for?</h1>
            <div className='section5-container'>
                <div className='section5-left'>
                    <p>
                    This app is ideal for <b>gardens, cemeteries, warehouses, outdoor areas, plantations, 
                    forest areas</b>, and similar properties.
                    </p>
                    <p>
                    Fire sensors have to detect a certain amount of temperature to be triggered. 
                    They are also limited by battery capacity.
                    </p>
                    <p>
                    This means that cameras can detect fire faster than sensors can detect hot air,
                     making them <b>ideal</b> for the properties and places above.
                    </p>
                    <p>
                    Every second counts. The detection time difference may only be in seconds, but quick responses matters.
                    </p>
                </div>
                <div className='spacer'></div>
                <div className='section5-right'>
                    <img src={systems} alt='systems'/>
                </div>
            </div>

            <h1 className='section6-header'>What about <br/> 
            conventional alarms and detectors?</h1>
            <div className='section6-container'>
                <div className='section6-left'>
                    <h2>This mini-project aims to explore image recognition as an <b>alternative.</b></h2>
                    <p>
                    it is not meant to discount the ability of conventional sensors. 
                    In a large (and open) area, multiple conventional detectors need to 
                    be spread out throughout the place.
                    </p>
                    <p>
                    Light (and therefore, video footage) travels faster than hot air. 
                    Cameras (depending on the quality) can cover a wider area <b>with less devices</b>, 
                    and they can detect fire <b>from a longer distance.</b>
                    </p>
                </div>
                <div className='spacer'></div>
                <div className='section6-right'>
                    <img src={landscape} alt='landscape'></img>
                </div>
            </div>
            
            <h1 className='section7-header'>Join and Support Us!</h1>
            <div className='section7-container'>
                <p>
                Join us on our groundbreaking journey at Team Wangan as we advance fire detection 
                and prevention through cutting-edge technology. Our web-based mini-project software, 
                currently supporting image analysis, represents a vital step in our ongoing research.
                </p>
                <p>
                While it holds tremendous potential, our ultimate goal is to <b>leverage live video footage,</b>  
                as well as <b>smoke detection,</b> for even more robust fire recognition capabilities.
                </p>
                <img src={teamwangan} alt='teamwangan'/>
                <p>
                We are <b>Team Wangan</b>, and we are constantly pushing the boundaries of fire detection research. 
                </p>
                <p>
                With a vision to harness live video footage in our app, 
                we strive to unlock even greater potential in real-time fire recognition. 
                <br></br>
                <b> Be a part of our journey </b>as we shape the future of fire safety!
                </p>
            </div>
        </div>
        </>
    );
};

export default Home;