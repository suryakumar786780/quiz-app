import { useEffect, useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function QuestionCard({ currqus, question, prevfunc, nextfunc }) {
    const state = useSelector((state) => { return { selected_ans: state.selected_answers } })
    const [isprev, setIsPrev] = useState(false);
    const [error, setError] = useState(false);
    const isdisable = currqus === 1 ? true : false;
    const [check, setCheck] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    });
    
    const [radioval, setRadioVal] = useState(0);

    const changeValue = (e) => {
        setCheck(() => ({
            1: false,
            2: false,
            3: false,
            4: false,
            [e]: true
        }))
    }

    const nextBtn = () => {
        if (radioval || state.selected_ans[currqus - 1]) {
            setError(false);
            nextfunc(radioval)
            state.selected_ans.length <= currqus && setIsPrev(false)
        } else setError(true)

    }

    useEffect(() => {
        setRadioVal(0);
        setCheck({
            1: false,
            2: false,
            3: false,
            4: false
        })
        if (state.selected_ans[currqus - 1] && isprev) {
            setError(false);
            const pos = state.selected_ans[currqus - 1];
            setCheck(prev => {
                const nextState = {}
                Object.keys(prev).forEach(key => {
                    if (+key === pos)
                        nextState[key] = true
                    else nextState[key] = false
                })
                return nextState
            })
        }
    }, [currqus]);
    return (
        <>
            <Card style={{ width: '60%', margin: 'auto' }} className='shadow-lg p-5'>
                <Card.Body className='border-bottom-none' style={{ height: '25vh' }}>
                    <Card.Title>Simple Quiz Application</Card.Title>
                    <Card.Text>
                        Question No. {currqus} of 15
                        <ProgressBar variant="warning" animated now={(16 - currqus) * 6.66} style={{ height: '7px', marginTop: '1rem', marginBottom: '1rem' }} />
                    </Card.Text>
                    <Card.Text className='fs-5 fw-bold mt-5'>{question.question}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush p-2 border-top-0 border-bottom-0">
                    <Form style={{ width: 'auto', margin: 'auto', padding: "1rem", flex: 'start' }} className=''>
                        {
                            question.options.map((e, index) => {
                                return <div key={index} className="mb-3 checkBox d-flex text-start" >
                                    <Form.Check
                                        name={question.id}
                                        type='radio'
                                        id={index + 1}
                                        label={e}
                                        value={index + 1}
                                        checked={check[index + 1]}
                                        onChange={(e) => { setRadioVal(e.target.value); changeValue(e.target.value); setError(false) }}
                                    />
                                </div>
                            })
                        }
                    </Form>
                    <div className='text-danger fw-bold'>{error ? "Select any One option" : ''}</div>
                </ListGroup>
                <Card.Body className='d-flex justify-content-center h-auto'>
                    <Button variant="outline-info" className='h-auto fw-bold me-3' disabled={isdisable} onClick={() => { prevfunc(currqus - 1); setIsPrev(true) }}>Previous</Button>
                    {
                        <Button variant="outline-success" className='fw-bold' onClick={() => nextBtn(radioval)} >{currqus < 15 ? 'Next' : 'Submit'}</Button>
                    }

                </Card.Body>
            </Card>
        </>

    );
}

export default QuestionCard;