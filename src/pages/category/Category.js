import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Category = () => {

    const [categories,setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://my-edu-server.vercel.app/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
             {categories.map(categories => <p key={categories.id}>
                        <Link to={`/CourseDetails/${categories.id}`} className=" text-light w-100 btn btn-outline-info rounded-0">{categories.name}</Link>
                    </p>)}
            
        </div>
    );
};

export default Category;