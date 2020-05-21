import React, { Component } from 'react'
import './slider.css'
import Card from '../Card/Card'
import SimpleReactLightbox from 'simple-react-lightbox'



export default class Slider extends Component {
  constructor(props){
    super(props)
    this.prevClick = this.prevClick.bind(this)
    this.nextClick = this.nextClick.bind(this)

    this.state = {
      width: 300,
      count: 2,
      position: 0,
      activeMark: 1
    }
  }
  

  prevClick(){
    this.setState({
      position: this.state.position + this.state.width * this.state.count,
      activeMark: this.state.activeMark - 1
    })
  }
  nextClick(){
    this.setState({
      position: this.state.position - this.state.width * this.state.count,
      activeMark: this.state.activeMark + 1
    })
  }
  render() {
    const {position, activeMark} = this.state
    return (
      <div className="container">
        <div className="about">
            <h2 className="title">Отзывы о Барселоне</h2>
            <div className="carousel">
            {position < 0 ? <button className="arrow prev" onClick={this.prevClick}></button> : null }
            <div className='gallery'>
              <ul
                className='cards'
                style={{marginLeft: this.state.position}}
              >
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                 </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
                <li>
                  <SimpleReactLightbox>
                    <Card />
                  </SimpleReactLightbox>
                </li>
              </ul>
            </div>
            {position > -3000 ? <button className="arrow next" onClick={this.nextClick}></button> : null }
          </div>
          <div className="about_footer">
            <button className="show_all">Все отзывы</button>
              <div className="marks">
                <div className={`mark ${activeMark === 1 ? 'active' : '' }`}></div>
                <div className={`mark ${activeMark === 2 ? 'active' : '' }`}></div>
                <div className={`mark ${activeMark === 3 ? 'active' : '' }`}></div>
                <div className={`mark ${activeMark === 4 ? 'active' : '' }`}></div>
                <div className={`mark ${activeMark === 5 ? 'active' : '' }`}></div>
                <div className={`mark ${activeMark === 6 ? 'active' : '' }`}></div>
              </div>
            </div>
      </div>
    </div>
      
    )
  }
}
