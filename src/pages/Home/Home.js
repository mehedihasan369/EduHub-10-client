import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css' ;
import Accordion from 'react-bootstrap/Accordion';

const Home = () => {
    return (
        <div>
           <div className='d-flex  banner'>
            <div className='w-50 p-5'>
                <h1>EduHub</h1>
                <p>It is said that the students are the future of our country.We not only talk about the learner but also their parents and teachers as they provide a continuous support system. The candidates who have learning skills, behavioural skills and career skills are more likely to get success in their professional life. Let us know more about these skills through our blog!</p>
                <Link to='/blogs'  className='btn btn-outline-dark text-light fw-bold'>Blogs</Link>
            </div>
            <img src="./Code typing-pana.png " alt="" className='w-50 p-5'/>
           </div>

           <div className='d-flex  align-items-center'>
           <img src="https://www.aihr.com/wp-content/uploads/learning-vs-training-cover.png " alt="" className='w-50 p-5'/>
            <div className='w-50 p-5 text-dark'>
                <h1>EduHub</h1>
                <h4>Freedom to learn</h4>
            
                <h4>Everywhere, always</h4>
            
            </div>
           </div>




           <div className='d-flex  align-items-center'>

            <div className='w-50 p-5 text-dark'>
                <h1>Frequently asked Questions..</h1>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How to Improve your Learning Skills?</Accordion.Header>
        <Accordion.Body>
        The above learning skills are very integral in everyday life. However, are people just born with these skills? No, you need to constantly inculcate and improve upon these learning skills. Following are a few methods in which you can do this:
        <ol>
            <li>Determine Areas of Weakness: The first step to becoming an overall better human being is to identify areas of improvement within yourself. </li>
            <li>Hone Better Daily Habits: Better Daily Habits simply mean clear communication, setting realistic goals, meeting deadlines, etc. </li>
            <li>Take Community Courses: Community Courses will help you in understanding a perspective o the world outside your life. It brings into focus the importance of impromptu conversation skills. </li>
            <li>Engage in Volunteering: Volunteering Opportunities are a great way of honing management skills, communication and further developing learning skills. </li>
        </ol>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to Highlight your Learning Skills?</Accordion.Header>
        <Accordion.Body>
        Engage in utilising your learning skills properly by highlighting the most relevant ones within your job application in your resume, cover letter and job interview as well. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Learning Skills for your Resume</Accordion.Header>
        <Accordion.Body>
        The learning skills which are most relevant to the job you are applying to can be included in your resume. They could be added as a summary of yourself or with objective statements. You could also add them along with your interpersonal skills. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
            </div>
                       <img src="./Questions-pana.png" alt="" className='w-50 p-5'/>
           </div>




        </div>
    );
};

export default Home;