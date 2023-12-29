import React, { useEffect, useState } from 'react'
import QuestionCard from './card';
import { useSelector, useDispatch } from 'react-redux';
import { random_questions, selected_answers, answers } from '../service/action';
import ResultPage from './resultpage';

const RandomQuestionGenerator = () => {
    const state = useSelector((state) => { return { all: state.allQuestions, random: state.random_qus, selected_ans: state.selected_answers } })
    const dispatch = useDispatch();
    const data = state.random;
    const [curr, setCurr] = useState(1);
    const [isSubmit, setIsSubmit] = useState(false);

    const prev = () => {
        setCurr(curr - 1);
    }
    const next = (v) => {
        if (state.selected_ans.length < curr) {
            dispatch(selected_answers([...state.selected_ans, +v]));
        } else {
            if (v !== state.selected_ans[curr - 1] && v!==0) {
                const ll = [];
                state.selected_ans.forEach(e => {
                    ll.push(e)
                })
                ll.splice(curr - 1, 1, +v)
                dispatch(selected_answers(ll));
                console.log("eee", state.selected_ans[curr - 1], ll);
            }
        }
        setCurr(curr + 1)
    }

    const submit = (v) => {
        dispatch(selected_answers([...state.selected_ans, +v]));
        setIsSubmit(true);
        console.log("submit", state.selected_ans);
    }

    useEffect(() => {
        const shuffled = state.all.sort(() => 0.5 - Math.random());
        dispatch(random_questions(shuffled.slice(0, 15)))
        dispatch(answers(shuffled.slice(0, 15).map((e) => e.answer)))
    }, [])

    return (
        <div style={{height:"100vh", display:'flex'}}>
            {data.length > 0 && !isSubmit ?
                <QuestionCard currqus={curr} question={data[curr - 1]} prevfunc={prev} nextfunc={curr < 15 ? next : submit} /> :
                <ResultPage />
            }
        </div>
    )
}

export default RandomQuestionGenerator