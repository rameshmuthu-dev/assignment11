import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

function User() {
    const { id } = useParams(); // Current user ID from URL
    const navigate = useNavigate(); // Hook for programmatic navigation

    const [user, setUser] = useState(null);
    const [allUserIds, setAllUserIds] = useState([]); // To store all user IDs for navigation
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingAllUsers, setLoadingAllUsers] = useState(true);
    const [error, setError] = useState(null);

    // Effect to fetch the current user's data
    useEffect(() => {
        if (id) {
            setLoadingUser(true);
            setError(null);
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {
                    setUser(res.data);
                    setLoadingUser(false);
                })
                .catch(err => {
                    console.error("Error fetching user:", err);
                    setError("Failed to load user details.");
                    setUser(null); // Clear user data on error
                    setLoadingUser(false);
                });
        }
    }, [id]); // Re-run when 'id' changes

    // Effect to fetch all user IDs (only once or when component mounts/unmounts)
    useEffect(() => {
        setLoadingAllUsers(true);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const ids = res.data.map(u => u.id).sort((a, b) => a - b); // Get and sort IDs
                setAllUserIds(ids);
                setLoadingAllUsers(false);
            })
            .catch(err => {
                console.error("Error fetching all user IDs:", err);
                setLoadingAllUsers(false);
            });
    }, []); // Empty dependency array means this runs only once on mount

    const currentIndex = allUserIds.indexOf(parseInt(id)); // Convert id to number for comparison
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < allUserIds.length - 1;

    const handlePrevious = () => {
        if (hasPrevious) {
            const prevId = allUserIds[currentIndex - 1];
            navigate(`/users/${prevId}`); // Navigate to previous user
        }
    };

    const handleNext = () => {
        if (hasNext) {
            const nextId = allUserIds[currentIndex + 1];
            navigate(`/users/${nextId}`); // Navigate to next user
        }
    };

    if (loadingUser || loadingAllUsers) {
        return <div className='text-center text-xl p-5'>Loading user details...</div>;
    }

    if (error) {
        return <div className='text-center text-xl p-5 text-red-600'>{error}</div>;
    }

    if (!user) {
        return <div className='text-center text-xl p-5'>User not found.</div>;
    }

    return (
        <div className='flex flex-col w-full max-w-lg  mx-auto bg-amber-200 shadow-md rounded-lg p-4 sm:p-6'>
            <h1 className='text-center font-semibold text-4xl p-5'>User Details</h1>

            <div className='bg-amber-500 rounded-xl p-5 m-3 text-blue-800'>
                <h2 className='text-2xl font-bold mb-2'>{user.name}</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline">{user.website}</a></p>
                <p><strong>Company:</strong> {user.company?.name}</p>
                <p><strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</p>
            </div>

            <div className='flex justify-between mt-4 p-3'>
                <button
                    onClick={handlePrevious}
                    disabled={!hasPrevious}
                    className={`px-4 py-2 rounded-lg ${hasPrevious ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                >
                    &larr; Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className={`px-4 py-2 rounded-lg ${hasNext ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
}

export default User;