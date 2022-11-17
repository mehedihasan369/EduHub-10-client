import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Category = () => {

    const [categories,setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
             {categories.map(categories => <p key={categories.id}>
                        <Link to={`/category/${categories.id}`} className="bg-dark text-light m-0 d-block w-100 p-0">{categories.name}</Link>
                    </p>)}
            
        </div>
    );
};

export default Category;