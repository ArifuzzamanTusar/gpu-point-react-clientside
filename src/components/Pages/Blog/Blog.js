import React from 'react';
import { Container } from 'react-bootstrap';
import Pagetitle from '../../Global/Pageheader/Pagetitle';

const Blog = () => {
    return (
        <div>
            <Pagetitle title="BLOG" subtitle="Assignments Questions and answers"></Pagetitle>
            <Container className='py-5'>

                <div className="qa_Wrapper">
                    <h4 className="question ">
                        Q1: Difference between javascript and nodejs
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <p>The Context API is a React structure that allows you to exchange unique details and helps in prop-drilling resolution from all levels of your application.</p>
                        <p>The React Context API allows a React app to generate global variables that can be passed around. This is an alternative to "prop drilling," which involves passing props from grandparent to child to parent, and so on. Context is also marketed as a simpler, lighter approach to Redux state management.</p>
                    </div>
                </div>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        Q2: Differences between sql and nosql databases.
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <p>A semantic element's defining feature is that it clearly communicated its meaning to both the developer and the browser. These elements define its content really very clearly.</p>
                        <p>Example of some,

                            <ul>
                                <li> header: It defines a header for a web page.</li>
                                <li>nav: It defines a container for navigation links.</li>
                                <li>section: This defines a section in a web page.</li>
                                <li>article: This element contains the main part, containing information about the web page.</li>
                                <li>aside: The aside content is often placed as a sidebar in a document.</li>
                                <li>footer: It defines a footer for a document or a section.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        Q3: What is the purpose of jwt and how does it work
                    </h4>
                    <hr></hr>
                    <div className="answers">

                        <p>Jwt's main purpose is to transmit security information between two application parties. Json object is contained in jwt token. The cryto algorithm is used by jwt sign to ensure that no one can make a false claim. After issuing a jwt token, the clain cannot be changed.
                        </p>
                    </div>
                </div>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        Q2: When should you use nodejs and when should you use mongodb
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <p>A semantic element's defining feature is that it clearly communicated its meaning to both the developer and the browser. These elements define its content really very clearly.</p>
                        <p>Example of some,

                            <ul>
                                <li> header: It defines a header for a web page.</li>
                                <li>nav: It defines a container for navigation links.</li>
                                <li>section: This defines a section in a web page.</li>
                                <li>article: This element contains the main part, containing information about the web page.</li>
                                <li>aside: The aside content is often placed as a sidebar in a document.</li>
                                <li>footer: It defines a footer for a document or a section.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Blog;