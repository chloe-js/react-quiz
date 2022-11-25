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
        const getNotes = async () => {
            const notesSnapshot = await getDocs(collection(db, "results"));
            const notesList = notesSnapshot.docs.map((doc) => doc.data());
            this.setState({
                arr: notesList
            })
            return notesList;
        };
        // getNotes()
        return (
            <div>
                <h1>Username</h1>
                <h1>{this.state.arr.map((item, i) => (
                    <>
                        <p key={i}>{item.username}</p>
                    </>
                ))}</h1>
            </div>
        )
    }
}

export default GetResults