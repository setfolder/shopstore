import './Contacts.css'

export default function Contacts() {
    return (
        <main className='contacts'>
            <h2>Contacts</h2>
            <img src="pic/map.jpg" alt="Map" className='map' />
            <div className="address">
                <p>Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at elit erat, vitae rutrum lectus.</p>
                <p>ph: +1 (234) 23456785</p>
                <p>email: asd@ased.com</p>
                <p>Curabitur eu risus vitae felis facilisis malesuada quis nec mauris. Donec sit amet leo lobortis libero sollicitudin rutrum non at enim. Sed suscipit, felis bibendum malesuada cursus, odio lorem convallis orci, sit amet dictum nibh diam vitae sapien. Ut sed lobortis ipsum. Nam adipiscing, eros fringilla condimentum sodales, leo dui hendrerit metus, sed blandit lorem nunc vel nunc. Aliquam a tincidunt quam. Sed consectetur molestie elit, at consectetur arcu vehicula ut. Ut ante nibh, vehicula quis volutpat ut, lacinia eu tortor.</p>
            </div>
            <div className="social">
                <a href="https://www.facebook.com"><img src="/pic/facebook.png" alt="facebook" /></a>
                <a href="https://www.instagram.com"><img src="/pic/instagram.png" alt="instagram" /></a>
                <a href="https://www.linkedin.com"><img src="/pic/linkedin.png" alt="linkedin" /></a>
                <a href="https://www.pinterest.com/"><img src="/pic/pinterest.png" alt="pinterest" /></a>
                <a href="https://x.com/"><img src="/pic/twitter.png" alt="twitter" /></a>
                <a href="https://www.youtube.com/"><img src="/pic/youtube.png" alt="youtube" /></a>
            </div>
        </main>
    )
}
