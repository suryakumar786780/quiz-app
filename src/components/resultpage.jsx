import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ResultPage = () => {
    const state = useSelector(state => { return { random: state.random_qus, selected_ans: state.selected_answers, answers: state.original_answers } })
    let total = 0;
    state.random.forEach((e, index) => {
        if(state.selected_ans[index] === state.answers[index]) {
            total++;
            console.log(total);
        }
    })
    console.log(state, total);
    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                <div className='fs-3 fw-bold'>Your Answer's Submitted</div>
                <div className='fs-2 fw-bold bg-warning mt-3'>Total Marks - {total} Out of 15</div>
            </div>
            {/* 
            {
                state.selected_ans.length > 0 && state.random.map((e, index) => {
                    return <div className="answers mt-5">
                        <div className='fs-3 fw-bold'>{e.question}</div>
                        <div className='d-flex justify-content-around mt-4'>
                            <div className="options border border-2">Total options</div>
                            <div className="user-options">user answer</div>
                            <div>correct answer</div>
                        </div>
                    </div>
                })
            } 
            */}
            <Table responsive="lg" bordered className=''>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Question</th>
                        <th>Total Options</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // state.selected_ans.length > 0 &&
                        state.random.map((e, index) => {
                            if(state.selected_ans[index] === state.answers[index]) {
                                total++;
                                console.log(total);
                                // setMarks(total);
                            }
                            // if(index === 14) setMarks(total)
                            return <tr>
                                <td className='text-break'>{index + 1}</td>
                                <td className='text-break'>{e.question}</td>
                                <td className='text-break p-0'>{e.options.map((o, pos) => {
                                    return <><p className={`p-1 w-100 ${pos === 3 ? '' : 'border-bottom'}`}>{o}</p></>
                                })}</td>
                                <td className={`text-break text-light fw-bold bg-${state.selected_ans[index] === state.answers[index] ? 'success' : 'danger'}`}>{e.options[state.selected_ans[index]-1]}</td>
                                <td className='text-break fw-bold'>{e.options[state.answers[index]-1]}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default ResultPage