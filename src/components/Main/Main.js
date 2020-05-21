import React, { Component } from 'react'
import Slider from '../Slider/Slider'
import './index.css'


export default class Main extends Component {
    constructor(props){
    super(props)
    this.onChangeAdmin = this.onChangeAdmin.bind(this)
    this.onChangeUser = this.onChangeUser.bind(this)
    this.onMessageSendUser = this.onMessageSendUser.bind(this)
    this.onMessageSendAdmin = this.onMessageSendAdmin.bind(this)

    this.state = {
        adminText: '',
        userText: '',
        messages: [
            {
                from: null,
                text: null,
                timestamp: null,
                bg: null
            }
        ]
    }
    
}

onChangeAdmin(e) {
   this.setState({
       adminText: e.target.value
   })
}
onChangeUser(e) {
    this.setState({
        userText: e.target.value
    })
 }
onMessageSendAdmin(e){
    let time = new Date().toLocaleString()
    let newMessage = {
        text: this.state.adminText,
        bg: e.target.title,
        from: e.target.name,
        timestamp: time
    }
    this.setState({
        messages: [...this.state.messages, newMessage],
        adminText: ''
    })
}
onMessageSendUser(e){
    let time = new Date().toLocaleString()
    let newMessage = {
        text: this.state.userText,
        bg: e.target.title,
        from: e.target.name,
        timestamp: time
    }
    this.setState({
        messages: [...this.state.messages, newMessage],
        userText: ''
    })
}
  render() {
      const { messages, adminText, userText } = this.state
      const mess = 
      <div>{messages.map(message => (
            message.text ? 
            <div
                className="message" key={message.timestamp}
                style={{backgroundColor: message.bg}}
            >
                <img
                    src={ message.from === 'admin' ? "images/face2.png" :  "images/face.png"}
                    alt="face" className="message_avatar"/>
                <div
                    className="message_text"
                >
                    <p>
                        {message.text}
                    </p>
                    <span className="date">{message.timestamp}</span>
                </div>
            </div> : null
            ))}
        
    </div>
    return (
        <>
        <div className="container">
        <div className="flex">
            <img src="images/barsa.png" alt="" className="main_image"/>
            <div className="description">
                <h1 className="title">Барселона — обзор города</h1>
                <p className="text">Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...</p>
                <a href="#" className="read_more">Читать дальше</a>
            </div>
        </div>
    </div>
    <Slider />
    <div className="container">
        <div className="flex chats">
            <div className="chat br">
                <h2 className="title">Чат с пользователем</h2>
                <div className="chat_card">
                    <div className="chat_card-header">
                        <img src="images/face.png" alt="" className="chart_card-avatar"/>
                        <div className="user">
                            <h4 className="user_name">Наталия Полянская</h4>
                            <div className="prof">
                                <img src="images/flag.png" alt="" className='flag'/>
                                <span className="user_prof">Гид по Баварии, фотограф</span>
                            </div>

                        </div>
                        <div className="rank">
                            <img src="images/star.png" alt=""/>
                            <img src="images/star.png" alt=""/>
                            <img src="images/star.png" alt=""/>
                            <img src="images/star.png" alt=""/>
                            <img src="images/star1.png" alt=""/>
                        </div>
                    </div>
                    <div className="chat_card-content">
                    {mess}
                    </div>

                </div>

                <div className="message_write">
                    <img src="images/face.png" alt="" className="message_avatar"/>
                    <textarea
                        placeholder="Напишите сообщение..."
                        className="message_write-input"
                        onChange={this.onChangeUser}
                        value={userText}/>
                    <button
                        className='send'
                        onClick={this.onMessageSendUser}>
                        <img src="images/letter.png" 
                        name='user'
                        title='#fff'/>
                    </button>
                </div>
            </div>
            <div className="chat adm">
                <h2 className="title ml23">Чат с администратором</h2>
                <div className="chat_card ml23">
                    <div className="chat_card-header">
                        <img src="images/face2.png" alt="face2" className="chart_card-avatar"/>
                        <div className="user">
                            <h4 className="user_name">Администратор</h4>
                            <div className="prof">
                                <img src="images/flag.png" alt=""/>
                                <span className="user_prof">TravelAsk</span>
                            </div>

                        </div>
                    </div>
                    <div className="chat_card-content">
                        {mess}
                    </div>

                </div>
                <div className="message_write">
                    <img src="images/face2.png" alt="" className="message_avatar ml49"/>
                    <textarea
                        placeholder="Напишите сообщение..."
                        className="message_write-input"
                        onChange={this.onChangeAdmin}
                        value={adminText}/>
                    <button
                        className='send'
                        onClick={this.onMessageSendAdmin}>
                        <img src="images/letter.png" 
                        name='admin'
                        title='#F9F7F2'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
  }
}
