import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost())
    }, [])
    const posts = useSelector(state => state.posts)
    const navigate = useNavigate()
    function editclick(item){
        navigate("/updatepost",{state:item})
    }
    return (
        <div className="m-4">
            <div className="row">
                <h2 className="col-8">Post</h2>
                <div className="col-4">
                    <button className="btn btn-success col-2" onClick={() => { navigate("/addnewpost") }}>Add new Post</button>
                </div>

            </div>
            <div>
                {posts.map((item, index) =>
                    <div className="row mt-5" key={index}>
                        <div className="col-8">
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary col-2" onClick={()=>editclick(item)}>Edit</button>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
export default Home;