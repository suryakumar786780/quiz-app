import { RANDOM_QUESTIONS, ANSWERS, SELECTED_ANSWERS } from "./action_type";
import { Questions } from "../utilities/data/questions";
export const initial_values = {
    allQuestions: Questions,
    random_qus : [],
    original_answers: [],
    selected_answers : []
}

export const reducer = (state = initial_values, action) => {

    switch (action.type) {

        case RANDOM_QUESTIONS: {
            return { ...state, random_qus: action.payload }
        }
        case ANSWERS: {
            return { ...state, original_answers: action.payload }
        }
        case SELECTED_ANSWERS: {
            return { ...state, selected_answers: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}