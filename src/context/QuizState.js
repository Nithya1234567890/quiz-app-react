import React, { useEffect, useState } from 'react'
import QuizContext from './QuizContext'

const QuizState = (props) => {
    const [questions,setQuestions]=useState([]);
    const [score,setScore] = useState({'rightAnswers':0,'wrongAnswers':0});
    const [next,setNext] = useState(0);
    const [url,setUrl]=useState('');
    const [loading,setLoading] = useState(false);
    const len =questions.length;
    const [answerList,setAnswerList]=useState([]);

    const fetchQuestions= async(api)=>{
      const response= await fetch(api);
      const data= await response.json();
      let results= data.results;
      setQuestions(results);
      setLoading(false);
    }

    useEffect(()=>{
      fetchQuestions(url)
    },[url])

  return (
    <QuizContext.Provider value={{questions,setQuestions,score,setScore,next,setNext,url,setUrl,loading,setLoading,len,answerList,setAnswerList,fetchQuestions}}>
        {props.children}
    </QuizContext.Provider>
  )
}

export default QuizState
