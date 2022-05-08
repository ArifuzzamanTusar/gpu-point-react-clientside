import React from 'react';
import { Container } from 'react-bootstrap';
import Pagetitle from '../../Global/Pageheader/Pagetitle';

const Blog = () => {
    return (
        <div>
            <Pagetitle title="BLOG" subtitle="Assignments Questions and answers"></Pagetitle>
            <Container className='py-5'>

                <div className="qa_Wrapper p-4 my-4 shadow">
                    <h4 className="question ">
                        Q1: Differences between sql and nosql databases.
                    </h4>
                    <hr></hr>
                    <div className="answers ">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead><tr><th>SQL Database</th><th>NOSQL Database</th></tr></thead>
                                <tbody>
                                    <tr><td>SQL full form is Structured Query Language.</td><td>NOSQL full form is Not Only SQL.</td></tr>
                                    <tr><td>SQL database is horizontally scalable database.</td><td> NoSQL database is vertically scalable database.</td></tr>
                                    <tr><td>SQL database is basically table based database</td><td>NoSQL database is document based database.</td></tr>
                                    <tr><td>Example: <b> MySQL, Microsoft SQL Server, Oracle Database, PostgreSQL</b></td><td>Example: <b>MongoDB</b></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="qa_Wrapper p-4 my-4 shadow">
                    <h4 className="question">
                        Q2: Difference between javascript and nodejs
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <div class="table-responsive"><table class="table table-bordered"><thead><tr><th>Javascript</th><th>Nodejs</th></tr></thead><tbody><tr><td>JavaScript is a  programming language that runs in browser.</td><td>Node JS is a javascript programming language interpreter or running environment.</td></tr><tr><td>JavaScript is used for any client-side activity of a web application.</td><td> Nodejs is used for non-blocking operation of a operating system.</td></tr><tr><td>JavaScript can run on many engines like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome)</td><td>NodeJs can run in only V8(used by google chrome browser) engine.</td></tr></tbody></table></div>
                    </div>
                </div>
                <div className="qa_Wrapper p-4 my-4 shadow">
                    <h4 className="question">
                        Q3: What is the purpose of jwt and how does it work
                    </h4>
                    <hr></hr>
                    <div className="answers">

                        <p>Jwt's main purpose is to transmit security information between two application parties. Json object is contained in jwt token. The cryto algorithm is used by jwt sign to ensure that no one can make a false claim. After issuing a jwt token, the clain cannot be changed.
                        </p>
                    </div>
                </div>
                <div className="qa_Wrapper p-4 my-4 shadow">
                    <h4 className="question">
                        Q2: When should you use nodejs and when should you use mongodb
                    </h4>
                    <hr></hr>
                    <div className="answers">



                        <ul>
                            <li> Nodejs is a tool for creating non-blocking event-driven servers. Nodejs is primarily used in real-time applications such as online games and chat services. It's used to make RestAPI for websites.</li>
                            <li>MongoDB is a database that is not stored in a relational database. So its said to be a NOSQL database. It's used to store information in the form of documents, such as json. This database is best for data that doesn't fit into a relational database schema.</li>
                        </ul>

                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Blog;