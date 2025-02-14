import React from 'react'
import './map.scss'

const Map = () => {
  return (
    <div className='map-info-container'>
        <div className="content">
        <div className="map">
        <iframe className='map-tag' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716061.8904937445!2d10.930709838867188!3d32.85363394278486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a893ffc8d1254d%3A0xfae3dd1bbde19635!2z2LTYsdmD2Kkg2K_Yp9mB2YrYqiDZhNmE2LTYrdmG!5e0!3m2!1sen!2sly!4v1734623668378!5m2!1sen!2sly" width="530" height="390" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="info">
            <h1>تواصل</h1>
            <p>لمعرفة معلومات أكثر يمكنكم التواصل معنا عبر رقم الهاتف بالأسفل او الإيميل. </p>
            <p>رقم الهاتف المدار: 0913523246</p>
            <p>رقم الهاتف ليبيانا : 0920000000</p>
            <p>shatshat900@gmail.com : E-mail</p>
        </div>
        </div>
    </div>
  )
}

export default Map