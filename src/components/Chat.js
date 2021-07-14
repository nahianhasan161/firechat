import React, { useState, useEffect,useRef } from 'react'
import { DB,auth } from '../firebase'
import Logout from './Logout'
import SendMessage from './SendMessage'

function Chat() {
    const scroll = useRef()
    const [messages,setMessages] = useState([])
    useEffect(()=>{
        DB.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])
    return (
        <div className="msgs">
            <Logout/>
           
            {messages.map(({id,text,photoURL,uid})=>{
               return (
                   <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <img src={photoURL} alt="Profile Pic"/>
                {/* {console.log(photoURL)} */}
                   <p>
                   {text}
                       </p> 
                    </div>
                    </div>
               ) 
            })}
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
