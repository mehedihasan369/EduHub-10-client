import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css' ;

const Home = () => {
    return (
        <div>
           <div className='d-flex  banner'>
            <div className='w-50 p-5'>
                <h1>SetSkill</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eos ducimus cumque ipsa voluptate ipsam quidem omnis obcaecati quasi, enim fugit consequatur cupiditate libero, alias consequuntur dolorum eius? Vitae, quas.</p>
                <Link className='btn btn-outline-primary text-light fw-bold'>SignUp</Link>
            </div>
            <img src="./Code typing-pana.png " alt="" className='w-50 p-5'/>
           </div>

           
        </div>
    );
};

export default Home;