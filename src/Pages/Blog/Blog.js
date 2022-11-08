import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='container'>
                <div className='blog-container'>
                    <h1 className='text-center py-4'>LATEST BLOGS</h1>
                    <div className="blog-content mb-4">
                        <h3>What is the difference betweenSQl and NoSQL?</h3>
                        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className="blog-content mb-4">
                        <h3>What is JWT and how does it works?</h3>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        </p>
                    </div>
                    <div className="blog-content mb-4">
                        <h3>What is the difference between JavaScript and Node Js?</h3>
                        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                    </div>
                    <div className="blog-content pb-4">
                        <h3>How does Node Js handle multiple request at the same time?</h3>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;