import React, { Component } from "react";
// import * as firestore from 'firebase/firestore';
import { db } from '../firebase_setup/firebase'
import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";

import { useState } from "react";


class GetResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = { arr: [1], x: 'one' }
    }
    render() {
        const getQuestions = async () => {
            const questionsSnapshot = await getDocs(collection(db, "questions"));
            const questionsList = questionsSnapshot.docs.map((doc) => doc.data());
            this.setState({
                arr: questionsList
            })
            console.log(questionsList)
            return questionsList;
        };
        return (
            <div>
                <button onClick={getQuestions}>X</button>
                <h1>Questions</h1>
                {/* <h1>{this.state.arr.map((item, i) => (
                    <>
                        <p key={i}>{item.question}</p>
                    </>
                ))}</h1> */}
            </div>
        )
    }
}

export default GetResults