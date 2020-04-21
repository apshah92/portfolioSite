import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Wrapper} from './style';
import Container from 'gatsby-theme-portfolio/src/components/common/Container';
import './refineTimeline.css';


export default class Works extends React.Component {
    render(){
        return (
            <Wrapper as={Container} id="works"> 
                <h2>My Works</h2>
                <VerticalTimeline layout={ '1-column' }>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', border: "2px solid", boxShadow:"2px 5px 5px grey"  }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0)' }}                        
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fluz - New York, NY</h4>
                        <p>
                            •   Fluz is a fintech startup in NYC featuring cashback and cryptocurrency applications.<br/>
                            •	Developed CMS front end using React, Redux, GraphQL, SCSS, Styled Components.<br/>
                            •	Developed UI/UX on mobile platform using React-Native, GraphQL, REST apis.<br/>
                            •	Successfully implemented DevOps solutions in AWS, BitRise and Git environments.
                            
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', border: "2px solid", boxShadow:"2px 5px 5px grey"  }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0)' }} 
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Freelance Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">New Jersey</h4>
                        <p>
                        •	Developed investment guide website for a financial industry client using Gatsby, React, React UI frameworks.<br/>
                        •	Optimized UX using react hooks with GraphQL to transform static data and React lazy loading.<br/>
                        •	Implemented responsive designs using Media queries, Grid layout and React UI frameworks like Material UI.<br/>
                        •	Developed web crawler applications 50,000+ datapoints from web resources using Python, Selenium, Pandas, Beautiful Soup.

                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', border: "2px solid", boxShadow:"2px 5px 5px grey"  }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0)' }} 
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
                        <p>
                        •	Developed product website front end using ReactJS, JavaScript, CSS3.<br/>
                        •	Implemented animation and visual effects featuring products using CSS animation and JavaScript.<br/>
                        •	Participated in daily scrum meetings and feature planning meetings. Familiar with Agile methodologies.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', border: "2px solid", boxShadow:"2px 5px 5px grey"  }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0)' }} 
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ahmedabad, India</h4>
                        <p>
                        •	Developed Client side web applications using HTML, CSS, JavaScript, jQuery.<br/>
                        •	Implemented Server side response handling, authentication and routing using Node.jS +Express + MYSQL.<br/>
                        •	Optimized bundling, loading and code splitting using webpack.<br/>
                        </p>
                    </VerticalTimelineElement>                   
                </VerticalTimeline>
            </Wrapper>
        );
    }
}