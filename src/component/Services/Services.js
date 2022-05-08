import React from 'react';
import './Services.css';



const Services = () => {
    return (
        // Showing answers
            <div>
                <div class="card-group">
  <div class="card">
   
    <div class="card-body m-4">
      <h5 class="card-title">Q1.Difference between javascript and <span className='text-danger'>nodejs</span>?</h5>
      <p class="card-text">JavaScript is a easy programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or walking surroundings for a JavaScript programming language that holds many excesses, it calls for libraries which could without difficulty be accessed from JavaScript programming for higher use.</p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Q2.When should you use nodejs and when should you use <span className='text-danger'> mongodb</span>?</h5>
      <p class="card-text">1 Nodejs may be a Javascript motor that you simply can compose any application you need with (by programming within the Javascript dialect). It runs your Javascript code. Most commonly, it is utilized to construct servers that can respond to web demands, in spite of the fact that it can be utilized for parts of other sorts of code too. MongoDB could be a database motor. Code inside a few application or server employments MongoDB to spare, inquiry or upgrade information in a database. There are numerous web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs inside a Nodejs application to allow you automatic get to to MongoDB so you'll be able make databases and after that include, inquiry, overhaul or erase information from the MongoDB database. MongoDB too has API libraries for other programming situations such as Python, Java, etc</p>
      
    </div>
  </div>
  <div class="card">
   
    <div class="card-body">
      <h5 class="card-title">Q3.Differences between sql and <span className='text-danger'> nosql databases</span>?</h5>
      <p class="card-text">SQL databases are vertically versatile, whereas NoSQL databases are evenly versatile. SQL databases are table-based, whereas NoSQL databases are record, key-value, chart, or wide-column stores. SQL databases are superior for multi-row exchanges, whereas NoSQL is superior for unstructured information like records or JSON.</p>
    </div>
  </div>
</div>
            </div>
    );
};

export default Services;