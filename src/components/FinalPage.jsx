import React from 'react'
import Card from './Card'
// import * as firestore from 'firebase/firestore';
import { db } from '../firebase_setup/firebase'
import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";

import './assets/FinalPage.css'

const FinalPage = ({
    score,
    setShowFinalPage,
    setShowStartingPage,
    topScore,
    setTopScore,
    setScore,
    username,
    setUsername,
}) => {
    const handleClick = () => {
        if (score > topScore){
            setTopScore(score)
        }

        setShowFinalPage(false);
        setShowStartingPage(true);
        setScore(0);
        setUsername('')

    }



  return (
    <Card>
        <h1 className="heading">You have finished the quiz, {username}!</h1>
        <h3 className="primary_text_final">Your final score is: </h3>
        <h3 className="final_score">{score}</h3>

        <button className="play_again_btn" onClick={handleClick}>Play Again</button>

    </Card>
  )
}

export default FinalPage

//------------------
// import React from 'react'
// import Card from './Card'
// // import * as firestore from 'firebase/firestore';
// import { db } from '../firebase_setup/firebase'
// import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";

// // import './FinalPage.css'
// import './assets/FinalPage.css'

// const FinalPage = ({
//     score,
//     setShowFinalPage,
//     setShowStartingPage,
//     topScore,
//     setTopScore,
//     setScore,
//     username,
//     setUsername,
// }) => {
//     const handleClick = async () => {
//         if (score > topScore){
//             setTopScore(score)
//         }
//         const id = Math.floor(Math.random() * 999999999) 
//         // Write to collection
//         await setDoc(collection(db, 'results', id), {score: "44",username: "Randy" })
//         await setDoc(collection())
        
//         setShowFinalPage(false);
//         setShowStartingPage(true);
//         setScore(0);
//         setUsername('')

//     }
//     // setDoc()


//   return (
//     <Card>
//         <h1 className="heading">You have finished the quiz, {username}!</h1>
//         <h3 className="primary_text">Your final score is: </h3>
//         <h3 className="final_score">{score}</h3>

//         <button className="play_again_btn" onClick={handleClick}>Save Score and Play Again</button>

//     </Card>
//   )
// }

// export default FinalPage