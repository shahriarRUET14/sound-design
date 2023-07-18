import "./Testimonial.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
const Testimonial = () => {
  return (
    <section id="testimonial" className="dark-gray">
      <div className="wrapper">
        <h2>What our student says?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt="" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Red. Digital </div>
              <div className="review">I got learn a lit about react </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial3} alt="" />
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Apple</div>
              <div className="review">Awesome, it were awesome</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
