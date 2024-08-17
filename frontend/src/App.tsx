import React from 'react'
import Header from './Components/Header'

import aboutMe from './assets/aboutme.png'
import './App.css'

class App extends React.Component<{},{}> {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div id="home" className="home page first-page">
            <div className="main-content">
              <div className="text">
                <h1>Level up your grades</h1>
                <p>Hi, I'm Finley, a Mathematics student at the University of Cambridge, providing tutoring for a range of subjects at A-level and GCSE.</p>
              </div>
              <div className="image">
                <img src={aboutMe} alt="About Me" />
              </div>
            </div>
          </div>
          <div id="about" className="about-me page">
              <div className="about-me-content">
                <h1>About me</h1>
                <p>
                  A lot of the time tutoring feels intimidating and stressful on the student. My tutoring prevents this by keeping
                  my students engaged and give them an understanding of topics which allows the student to thrive on their own and
                  not be reliant on teachers or tutor to tell them what exactly to do. The exams which I'm preparing my tutees for
                  are still fresh in my mind, so I can bring a more relatable approach to the tutoring, whilst still keeping a high
                  level academic standard.
                </p>
                <h2>Qualifications</h2>
                <p>- Achieved eight grade 9s and two grade 8s at GCSE. (Equivalent to all A*.)</p>
                <p>- Achieved grades A*A*A*A*A* at A-level in Mathematics, Further Mathematics, Physics, Computer Science, and EPQ.</p>
                <p>- Achieved S1 in STEP (Cambridge Mathematics entrance exam), amongst the top 10% of Cambridge mathematics offer holders.</p>
                <p>- Top 20 national finalist in the Elite Oxford University Computing Challenge.</p>
                <p>- Top 100 in the British Physics Olympiad.</p>
                <h2>Experience</h2>
                <p>- Volunteered weekly to tutor stuggling GCSE Maths students at Gordano School.</p>
              </div>
          </div>
          <div id="subjects" className="subjects page">
            <div className="subjects-content">
              <h1>Subjects</h1>
              <h2>GCSE</h2>
              <div className='subject-list'>
                <div className='subject'>
                  <h2>Mathematics</h2>
                  <p>
                  </p>
                </div>
                <div className='subject'>
                  <h2>Computer Science</h2>
                  <p>
                  </p>
                </div>
                <div className='subject'>
                  <h2>Physics</h2>
                  <p>
                  </p>
                </div>
              </div>
              <br /><br />
              <h2>A-level</h2>
              <div className='subject-list'>
                <div className='subject'>
                  <h2>Further Mathematics</h2>
                  <p>
                  </p>
                </div>
                <div className='subject'>
                  <h2>Mathematics</h2>
                  <p>
                  </p>
                </div>
                <div className='subject'>
                  <h2>Computer Science</h2>
                  <p>
                  </p>
                </div>
                <div className='subject'>
                  <h2>Physics</h2>
                  <p>
                  </p>
                </div>
                <div className='subject'>
                  <h2>STEP, TMUA, MAT, AEA</h2>
                  <p>
                  </p>
                </div>
              </div>
              <p className="extra">Other subjects are available on request, feel free to <a className="link" href="#contact">contact me</a> for any queries</p>
            </div>
          </div>
          <div id="pricing" className="pricing page">
            <div className="pricing-content">
              <h1>Pricing</h1>
              <h2>Online (Zoom)</h2>
              <p>Pricing ranges between £20 and £25 per hour, depending on the subject and level.</p>
              <h2>In person (Portishead Only)</h2>
              <p>Only on personal request for now.</p>
            </div>

          </div>
          <div id="contact" className="contact-me page">
            <div className="contact-me-content">
              <h1>Contact me</h1>
              <p>If you're interested in tutoring, feel free to contact me via email or phone. I'm happy to answer any questions you have.</p>
              <div className="contact-details">
                <p>Email: finleycoop@icloud.com</p>
                <p>Whatsapp/Text: 07874 602131</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
