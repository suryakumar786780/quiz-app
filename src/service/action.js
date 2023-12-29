import { QUESTIONS, RANDOM_QUESTIONS, ANSWERS, SELECTED_ANSWERS } from "./action_type";

export const questions = (payload) => {
    return {
        type: QUESTIONS,
        payload
    }
}
export const random_questions = (payload) => {
    return {
        type: RANDOM_QUESTIONS,
        payload
    }
}
export const answers = (payload) => {
    return {
        type: ANSWERS,
        payload
    }
}
export const selected_answers = (payload) => {
    return {
        type: SELECTED_ANSWERS,
        payload
    }
}