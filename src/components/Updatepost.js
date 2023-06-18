import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPost, updatepost } from "../redux/action";

function Updatepost() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form,setForm] = useState(state);
    function submitform(e){
        e.preventDefault();
        dispatch(updatepost(form));
    }
    return (
        <div className="m-4">
            <div className="row">
                <h2 className="col-6">New Post</h2>
                <button className="btn btn-success col-1" onClick={() => navigate("/")}>Back</button>
            </div>
            <form className="mt-5" onSubmit={(e) => submitform(e)}>
                <h6>Title</h6>
                <input size={98} onChange={(e) => setForm({ ...form, title: e.target.value })} value={form.title}></input>
                <h6 className="mt-4">Content</h6>
                <textarea cols={100} rows={8} style={{ resize: "none" }} onChange={(e) => setForm({ ...form, body: e.target.value })} value={form.body}></textarea><br></br>
                <button type="submit" className="btn btn-success mt-5">Edit</button>
            </form>
        </div>
    )
}
export default Updatepost;