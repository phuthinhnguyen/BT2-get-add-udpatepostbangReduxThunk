import { useState } from "react";
import { useDispatch } from "react-redux";
import { addnewpost } from "../redux/action";
import { useNavigate } from "react-router-dom";

function Addnewpost() {
    const [form, setForm] = useState({ title: "", content: "" });
    const dispatch = useDispatch()
    const navigate = useNavigate();
    function submitform(e) {
        e.preventDefault();
        dispatch(addnewpost(form));
        setForm({ title: "", content: "" });
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
                <textarea cols={100} rows={8} style={{ resize: "none" }} onChange={(e) => setForm({ ...form, content: e.target.value })} value={form.content}></textarea><br></br>
                <button type="submit" className="btn btn-success mt-5">Add</button>
            </form>
        </div>
    )
}
export default Addnewpost;