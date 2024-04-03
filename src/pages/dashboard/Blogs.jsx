import "./blogs.css";

import { CiCirclePlus } from "react-icons/ci";

import { DELETE_BLOG, GET_ALL_BLOGS } from "../../utils/constants"
import { Link, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Blogs = () => {

    const adminInfo = useSelector(store => store.admin.adminInfo)
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        try {
            const response = await fetch(GET_ALL_BLOGS);
            const blogsdata = await response.json();
            if (blogsdata?.success) {
                setBlogs(blogsdata?.data);
            } else {
                console.log(blogsdata.error);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const handleEdit = (id) => {
        redirect(`/dashboard/blogs/edit/${id}`);
    };

    const deleteBlog = async (id) => {
        let isDelete = window.confirm("Do you want to delete this blog?");
        if (isDelete === true) {
            try {
                const response = await fetch(`${DELETE_BLOG}${id}`, {
                    method: "DELETE",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${adminInfo?.accessToken}`,
                    },
                });
                const responseData = await response.json();
                console.log(responseData);
            } catch (error) {
                console.error("Error deleting blog:", error);
            }
        } else {
            console.log("Delete canceled");
        }
    };



    return (
        <div>
            <div className="panel-heading">
                <h2>all Blogs</h2>
                <Link className="add-btn" to="/dashboard/blogs/create" ><CiCirclePlus /> Add Blog</Link>
            </div>
            <table className="blogTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs && blogs?.map((blog) => (
                        <tr key={blog?._id}>
                            <td>{blog?.title}</td>
                            <td>{blog?.status}</td>
                            <td>
                                <span onClick={() => deleteBlog(blog?._id)}>Delete</span> |{" "}
                                <span onClick={() => handleEdit(blog?._id)}>Edit</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Blogs;