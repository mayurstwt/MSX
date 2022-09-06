import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Aut distinctio nisi harum maiores illum totam, reiciendis sapiente reprehenderit!</Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>


          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque odit officia cupiditate earum veritatis natus accusantium esse, assumenda nihil quae rem libero alias quia? Eius iure, excepturi recusandae odio asperiores fugiat assumenda atque ab.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos totam, magnam cupiditate, hic illo alias temporibus officia dolorem recusandae unde nisi blanditiis doloribus earum? Omnis?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusamus assumenda ad ea voluptates voluptatem.
            </p>

          </div>
        </div>
      </section>






      <section className='about__Vision'>
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque odit officia cupiditate earum veritatis natus accusantium esse, assumenda nihil quae rem libero alias quia? Eius iure, excepturi recusandae odio asperiores fugiat assumenda atque ab.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos totam, magnam cupiditate, hic illo alias temporibus officia dolorem recusandae unde nisi blanditiis doloribus earum? Omnis?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>




      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission" />
          </div>


          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque odit officia cupiditate earum veritatis natus accusantium esse, assumenda nihil quae rem libero alias quia? Eius iure, excepturi recusandae odio asperiores fugiat assumenda atque ab.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos totam, magnam cupiditate, hic illo alias temporibus officia dolorem recusandae unde nisi blanditiis doloribus earum? Omnis?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusamus assumenda ad ea voluptates voluptatem.
            </p>

          </div>
        </div>
      </section>
    </>

  )
}

export default About