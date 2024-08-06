import React, { useState, useEffect } from 'react';
import designImage from '../../assets/image/design.jpeg';
import avatar from '../../assets/image/avatar.jpg';
import heart from '../../assets/svg/heart.svg';  // assuming this is the empty heart
import filledHeart from '../../assets/svg/heart-filled.svg';
import comment from '../../assets/svg/comment-filled.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DesignCard = ({ onClick, design }) => {
    const host = 'http://localhost:5000/api/v1';
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('token');

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (design.likes.includes(userId)) {
            setLiked(true);
        }
    }, [design.likes, userId]);

    const handleUser = () => {
        navigate(`/profile/${design.createdBy}`);
    };

    const addLike = async () => {
        try {
            const response = await axios.post(
                `${host}/design/addLike`,
                { postId: design.id },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                setLiked(true);
                alert("Liked Successfully");
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const removeLike = async () => {
        try {
            const response = await axios.delete(
                `${host}/design/removeLike`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    data: { postId: design.id }
                }
            );

            if (response.data.success) {
                setLiked(false);
                alert("Like Removed Successfully");
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div className="card text-white" style={{ width: "20rem", padding: "0px", backgroundColor: "#414651" }}>
                <img onClick={onClick} src={design.image || designImage} className="card-img-top" alt="a design" />
                <div className="card-body">
                    <h5 className="card-title d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <img className='pe-auto avatar rounded-circle' src={avatar} alt="Avatar" />
                            <span className='fw-bold fs-5' onClick={handleUser} style={{ color: "#F4DF70", cursor: "pointer" }}>
                                {design.createdBy}
                            </span>
                        </div>
                    </h5>
                    <p className="card-text fs-6 fw-bold my-4">{design.title}</p>
                    <p className="card-text d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light">
                            <img className='avatar' src={liked ? filledHeart : heart} style={{ height: "4vh" }} onClick={liked ? removeLike : addLike} alt="Like" />
                            {design.likes.length} likes
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light">
                            <img className='avatar' src={comment} style={{ height: "4vh" }} alt="Comment" />
                            {design.comments.length} comments
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};

export default DesignCard;
