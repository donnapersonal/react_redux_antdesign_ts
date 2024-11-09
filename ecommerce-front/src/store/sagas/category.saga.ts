import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { API } from "../../config";
import { GET_CATEGORY, GetCategoryAction, getCategorySuccess } from "../actions/category.actions";
import { Category } from "../models/category";

function* handleGetCategory(action: GetCategoryAction) {
  let res = yield axios.get<Category[]>(`${API}/categories`);
  yield put(getCategorySuccess(res.data));
}

// function* handleSignin(action: SigninAction) {
//   try {
//     let res = yield axios.post(`${API}/signin`, action.payload);
//     localStorage.setItem("jwt", JSON.stringify(res.data));
//     yield put(signinSuccess());
//   } catch (error) {
//     yield put(signinFail(error.response.data.error))
//   }
// }

export default function* categorySaga() {
  // 获取分类列表
  yield takeEvery(GET_CATEGORY, handleGetCategory);
  // 登录
  // yield takeEvery(SIGNIN, handleSignin);
}