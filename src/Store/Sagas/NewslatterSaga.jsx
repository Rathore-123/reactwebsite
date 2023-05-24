import { takeEvery, put } from "redux-saga/effects"
import { createNewslatterAPI, deleteNewslatterAPI, getNewslatterAPI, updateNewslatterAPI } from "../Service"
import { ADD_NEWSLATTER, ADD_NEWSLATTER_RED, DELETE_NEWSLATTER, DELETE_NEWSLATTER_RED, GET_NEWSLATTER, GET_NEWSLATTER_RED, UPDATE_NEWSLATTER, UPDATE_NEWSLATTER_RED } from "../Constants"

function* createNewslattterSaga(action) {           //executer
    var response = yield createNewslatterAPI(action.payload)
    yield put({ type: ADD_NEWSLATTER_RED, data: response })
}
function* getNewslattterSaga() {           //executer
    var response = yield getNewslatterAPI()
    yield put({ type: GET_NEWSLATTER_RED, data: response })
}
function* deleteNewslattterSaga(action) {           //executer
    yield deleteNewslatterAPI(action.payload)
    yield put({ type: DELETE_NEWSLATTER_RED, data: action.payload })
}

export function* newslatterSaga() {        //watcher
    yield takeEvery(ADD_NEWSLATTER, createNewslattterSaga)
    yield takeEvery(GET_NEWSLATTER, getNewslattterSaga)
    yield takeEvery(DELETE_NEWSLATTER, deleteNewslattterSaga)
}