import axios from "axios";

export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const ADD_NEW_POST_SUCCESS = "ADD_NEW_POST_SUCCESS";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";


export const getPost = () => {
    return async dispatch => {
        const response = await axios.get(
            "https://648e53e52de8d0ea11e8ab7f.mockapi.io/posts"
        );
        dispatch({
            type: FETCH_POST_SUCCESS,
            payload: response.data
        });
    };
};

export const addnewpost = (form)=>{
    return async dispatch =>{
        const response = await axios.post(
            "https://648e53e52de8d0ea11e8ab7f.mockapi.io/posts",{
                title:form.title,
                body:form.content
            }
        )
        dispatch({
            type: ADD_NEW_POST_SUCCESS,
            payload:form
        })
    }
}

export const updatepost = (form)=>{
    return async dispatch =>{
        const response = await axios.put(
            `https://648e53e52de8d0ea11e8ab7f.mockapi.io/posts/${form.id}`,{
                title:form.title,
                body:form.body
            }
        )
        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload:form
        })
    }
}