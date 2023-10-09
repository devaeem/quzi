import React, { useState } from "react";
import { Row, Col, Card } from "antd";

const question = () => {


  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [showscore,setShowScore] = useState(0)


  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const handleAnswer = (isCorrect) => {
    console.log(isCorrect);
    if(isCorrect){
      setScore(score+1)
    }
    const nextQuestion = currentQuestion + 1 
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true)

    }
  
  }

  console.log(score);

 const handleRe = ()=>{
  setShowScore(false)
  setShowScore(0)
  setCurrentQuestion(0)
 } 

  return (
    <>
<h1>คำถามทดสอบ</h1>



      <Col  style={{textAlign:'center'}}>
        <Card className="quiz-card">
{

showscore ? <Row>
  <Col  className="question" span={12}>
<div className="question">
           You Score : {score} /{questions.length}<br />
         <button onClick={handleRe}>Re-Question</button>  
         </div>
  </Col>
</Row>
:(

  <Row>
            <Col span={12}>
            <div className="question">
                
               que {currentQuestion} /{questions.length}
                
                </div> 
              <div className="question">

                {questions[currentQuestion].questionText}
                
                </div> 
              
            </Col>
            <Col span={12}>
              <div className="answer">
                {questions[currentQuestion].answerOptions.map((item,index) => (
                  <button className="answer-button" key={index} onClick={()=>handleAnswer(item.isCorrect)}>{item.answerText}</button>
                ))}
              </div>
            </Col>
          </Row>
)
}
        

        </Card>
      </Col>
    </>
  );
};

export default question;
