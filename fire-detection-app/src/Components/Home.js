import React from 'react';
import './css/home.css';
import image from './images/FireApp_Image.jpg';
import overview from './images/overview.jpg';
import resnet from './images/resnet50.gif';
import statement from './images/statement.gif';

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
                    Our machine-learning algorithms are constantly trained with data analyzed and gathered
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
                        Detection of fire and smoke in CCTV systems 
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
                        processes of this mini-project. Here, the model being used here is ResNet-50.
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

            <h1 className='section3-header'>The Power of the Convolutional Neural Network</h1>
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
        </div>
        </>
    );
};

export default Home;