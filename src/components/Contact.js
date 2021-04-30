import React from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_8ggkn5v",
        "template_aryhsuw",
        e.target,
        "user_Nyy6O3P541OsVvhKgO0DC"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <Container>
      <FormContainer>
        <FormHeader>Get in touch with me</FormHeader>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                row="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;
  background-color: black;
`

const FormContainer = styled.div`
  padding-top: 6rem;
  background-color: white;
  border-radius: 10px;
  max-width: 1000px;
  padding-bottom: 5rem;
`

const FormHeader = styled.h1`
  text-align: center;
  color: grey;
  font-size: clamp(1.5rem, 4vw, 3rem);
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`
