import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Home Page</Link>
        <Link to="/create">Create Expense Page</Link>
        <Link to="">Edit Page</Link>
        <Link to="">Help Page</Link>
    </div>
);

export default NotFoundPage;