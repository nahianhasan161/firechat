import { Button,Input } from '@material-ui/core'
import { DB,auth } from '../firebase'
import React,{useState} from 'react'
import firebase from 'firebase'
function SendMessage({scroll}) {
    const [msg,setMsg] = useState('')
    async function sendMessage(e){
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser
        await DB.collection('messages').add({
            text : msg,
            uid,
            photoURL,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
        <form onSubmit={sendMessage}>
                <div className="sendMsg">
                <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value ={msg} onChange={(e)=>{setMsg(e.target.value)}}></Input>
                <Button  style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}}  type = "submit"> Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
