import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";
import API from "../../../services/index"

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    // Method memamnggil API dari Global services
    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }

    // Method untuk memanggil ketika data dihapus
    /* getPostAPI() {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    } */

    // Method untuk mempost dari Global Service
    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI()
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                },
            })
        })
    }

    // Method untuk meyimpan data
    /* postDataToAPI = () => {
        axios.post('http://localhost:3004/posts',
            this.state.formBlogPost)
            .then((res) => {
                console.log(res)
                // Memanggil data setelah di save
                this.getPostAPI()
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    },
                })
            }, (err) => {
                console.log("error", err)
            })
    } */

    //Method untuk merubah data dari Global Service
    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            this.getPostAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                }
            })
        })
    }

    // Method untuk merubah data
    /* putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
            console.log(res)
            this.getPostAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                },
            })
        })
    } */

    // Method untuk menghapus
    handleDelete = (data) => {
        API.deleteNewsBlog(data).then((res) => {
            this.getPostAPI()
        })
    }
    // Fuction untuk menghapus data
    /* handleDelete = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getPostAPI()
            })
    } */

    // Function untuk mengupdate data
    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    // Function untuk menerima inputan
    handleFormChange = (event) => {
        const formBlogPostNew = { ...this.state.formBlogPost }
        const timeStamp = new Date().getTime()
        if (!this.state.isUpdate) {
            formBlogPostNew["id"] = timeStamp
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // Function untuk button simpan
    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        // Pemanggilan API Json menggunakan fetch
        /* fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            }) */

        // Pemanggilan API Json menggunakan Axios
        /* axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    post: res.data
                })
            }) */

        // Pemanggilan Fake API 
        /* axios.get('http://localhost:3004/posts')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    post: res.data
                })
            }) */

        // Pemanggilan API yang sudah dirubah
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <p>Halaman BlogPost</p>
                <hr />
                <p className="section-title">BlogPost</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"
                        placeholder="add title"
                        value={this.state.formBlogPost.title}
                        onChange={this.handleFormChange} />

                    <label htmlFor="body">Blog Content</label>

                    <textarea name="body" id="body"
                        cols="30" rows="10" placeholder="add blog content"
                        value={this.state.formBlogPost.body}
                        onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id}
                            data={post} delete={this.handleDelete}
                            update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;