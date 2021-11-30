import React from 'react'
import './ComponentA.css'
import pic from '../Image/happybirthday.png'
import { useHistory } from 'react-router-dom'

const ComponentA = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/componentb')
    }

    return (
        <div className='ComponentA'>
            <h1>Momochan-Happy.Birthday!!</h1>
            <img src={pic} alt="happybirthday" />
            <h3>ももちゃん誕生日おめでとう！！</h3>
            <p>20代最後の歳、一緒に良い歳にしよ！何より最高な歳にしてください！！</p>
            誕生日プレゼントを用意しています！🎁🎁<br />
            <p>ここからはクイズだよ！！全問正解でプレゼント渡すよ！笑</p>
            <h5>準備はできましたか？</h5>
            <button onClick={handleClick}>start</button>
        </div>
    )
}

export default ComponentA
