import React from "react";
import Card from "./Card";
// import * as firestore from 'firebase/firestore';
import { db } from '../firebase_setup/firebase'
import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";

import "./assets/Question.css";

// class Question extends React.Component {}
const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore
}) => {
  // const getNotes = async () => {
  //   const notesSnapshot = await getDocs(collection(db, "questions"));
  //   const notesList = notesSnapshot.docs.map((doc) => doc.data());
  //   this.setState({
  //       arr: notesList
  //   })
  //   console.log(notesList)
  //   return notesList;
// };
console.log(questions[questionIndex],questionIndex)
    const handleClick = (isCorrect) => {
        if (questionIndex < 9) {
            if (isCorrect){
                setScore((score) => (score +=100 ))
            }

            setQuestionIndex((prevIndex) => prevIndex + 1)
  
            
        } else {
            if (isCorrect){
                setScore((score) => (score +=100 ))
            }
            setShowQuestionsPage(false);
            setShowFinalPage(true)
        }
    };

  return (
    <Card>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, index) => (
          <div
            className="answer"
            key={index}
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex+1}</span>/10
      </p>
    </Card>
  );
};

export default Question;

//-------------
// import React from "react";
// import Card from "./Card";
// // import * as firestore from 'firebase/firestore';
// import { db } from '../firebase_setup/firebase'
// import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";

// // import "./Question.css";
// import "./assets/Question.css";

// const Question = ({
//   questionIndex,
//   setQuestionIndex,
//   questions,
//   setShowQuestionsPage,
//   setShowFinalPage,
//   score,
//   setScore
// }) => {

//     const handleClick = (isCorrect) => {
//         if (questionIndex < 9) {
//             if (isCorrect){
//                 setScore((score) => (score +=100 ))
//             }

//             setQuestionIndex((prevIndex) => prevIndex + 1)
  
            
//         } else {
//             if (isCorrect){
//                 setScore((score) => (score +=100 ))
//             }
//             setShowQuestionsPage(false);
//             setShowFinalPage(true)
//         }
//     };

//   return (
//     <Card>
//       <h1 className="question">{questions[questionIndex].questionText}</h1>

//       <div className="answers">
//         {questions[questionIndex].answers.map((answer, index) => (
//           <div
//             className="answer"
//             key={index}
//             onClick={() => handleClick(answer.correctAnswer)}
//           >
//             <p>{answer.answerText}</p>
//           </div>
//         ))}
//       </div>

//       <p className="score">
//         Score: <span>{score}</span>
//       </p>

//       <p className="question_number">
//         Question <span>{questionIndex+1}</span>/10
//       </p>
//     </Card>
//   );
// };

// export default Question;
