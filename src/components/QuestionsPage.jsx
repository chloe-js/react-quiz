import React from "react";
import { useState, useEffect } from 'react';
import Question from "./Question";
// import * as firestore from 'firebase/firestore';
import { db } from '../firebase_setup/firebase'
import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";
import {getQuestions} from "../questions"
const QuestionsPage = ({
  score,
  setScore,
  setShowQuestionsPage,
  setShowFinalPage,
}) => {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(getQuestions())
  useEffect(() => {
    const getQuestions = async () => {
      const questionsSnapshot = await getDocs(collection(db, "questions"));
      const questionsList = questionsSnapshot.docs.map((doc) => doc.data())
      return questionsList;
    };
    if (questions.length === 0) {
      setQuestions( getQuestions())
      console.log(questions)
    }
  }, [questions])


  return (
    <>
      <Question
        questionIndex={questionIndex}
        questions={questions}
        setQuestionIndex={setQuestionIndex}
        setShowQuestionsPage={setShowQuestionsPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default QuestionsPage;
