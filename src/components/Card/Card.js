import React, { Component } from 'react'
import '../Slider/slider.css'
import { SRLWrapper } from 'simple-react-lightbox'


    
export default class Card extends Component {
  
  render(){
    return (
      <>
                  <div className="card">
                    <div className="card_header">
                      <img src="images/face.png" alt="face" className="card_avatar"/>
                      <span className="card_name">Наталия Полянская</span>
                    </div>
                    <div className="card_desc">
                      <h3 className="card_desc-title">
                        <span className='highlight'>Барселона</span> — О городе: </h3>
                      <p className="card_desc-text">Барселона — моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...</p>
                    </div>
                    <div className="tumbs_gallery">
                      <SRLWrapper>
                      <a data-attribute='images12' href='images/paris-1.jpg' data-caption='Caption #1'>
                        <img src="images/paris-1.jpg" alt="paris-1" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/paris-2.jpg' data-caption='Caption #2'>
                        <img src="images/paris-2.jpg" alt="paris-2" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/paris-3.jpg' data-caption='Caption #3'>
                        <img src="images/paris-3.jpg" alt="paris-3" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/paris-4.jpg' data-caption='Caption #4'>
                        <img src="images/paris-4.jpg" alt="paris-4" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/venice-1.jpg' data-caption='Caption #5'>
                        <img src="images/venice-1.jpg" alt="venice-1" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/venice-2.jpg' data-caption='Caption #6'>
                        <img src="images/venice-2.jpg" alt="venice-2" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/venice-3.jpg' data-caption='Caption #7'>
                        <img src="images/venice-3.jpg" alt='venice-3' className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/venice-4.jpg' data-caption='Caption #8'>
                        <img src="images/venice-4.jpg" alt="venice-4" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/venice-5.jpg' data-caption='Caption #9'>
                        <img src="images/venice-5.jpg" alt="venice-5" className="tumbnail"/>
                      </a>
                      <a data-attribute='images12' href='images/venice-6.jpg' data-caption='Caption #10'>
                        <img src="images/venice-6.jpg" alt="venice-6" className="tumbnail"/>
                      </a>
                      </SRLWrapper>
                    </div>
                    <div className="card_footer">
                      <span className="add_date">около 1 года назад</span>
                      <span className="dot"> . </span>
                      <span className="comments"><span>9</span> комментариев</span>
                      <div className="likes">
                        <img src="images/like.png" className='like' alt='like' />
                        <span className="likes_num">9</span>
                      </div>
                    </div>
                  </div>
    </>
    )
  }
}
