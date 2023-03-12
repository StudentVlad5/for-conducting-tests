import happyMan from "../images/happy-bearded-young-man.jpg";
import happyexcitedMan from "../images/portrait-happy-excited-man-holding-laptop-computer.png";

export default function Home() {
  return (
    <section
      className="hero"
    >
      <div className="container">
               <div className="hero-title-wrap">
                <div>
                  <img
                    src={happyMan}
                    className="avatar-image"
                    alt=""
                  />
                  </div>
                  <h1>Hello friend!</h1>
                  <h2>I’m available for freelance work.</h2>
              </div>
              <div class="hero-image-wrap">
                <h2>...and you have the opportunity to test your knowledge</h2>
            <img src={happyexcitedMan} class="hero-image img-fluid" alt="" />
            </div>
          
            </div>
            
    </section>
  );
}
