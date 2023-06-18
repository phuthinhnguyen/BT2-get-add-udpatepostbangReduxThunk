import { useNavigate } from "react-router-dom";
import { ADD_NEW_POST_SUCCESS, FETCH_POST_SUCCESS, UPDATE_POST_SUCCESS } from "./action";

const initialState = {
  posts:[]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return { ...state, posts: action.payload};
    case ADD_NEW_POST_SUCCESS:
      return { ...state, posts: [{ ...state.posts, id: Math.floor(Math.random() * 200), title: action.payload.title, body: action.payload.content }] }
    case UPDATE_POST_SUCCESS:
      return {...state,posts:[{...state.posts,id:action.payload.id,title:action.payload.title,body:action.payload.body}]}
      default:
      return state;
  }

};

export default rootReducer;