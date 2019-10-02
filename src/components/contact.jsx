import React from "react";

const Contact = () => {
  return (
    <div className="b pa3 black-80 br3 ba dark-gray b--black-30 mv5 w-100 w-50-m w-50-l mw6 center shadow-5">
      <form
        action="mailto:alistair111@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <div className="flex justify-between pv2">
          <label for="exampleFormControlInput1">Name</label>
          <input type="name" id="exampleFormControlInput1" placeholder="name" />
        </div>
        <div className="flex justify-between pv2">
          <label className="pr2" for="exampleFormControlInput1">
            Email address
          </label>
          <input
            type="email"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label className="f6 b db mb2" for="exampleFormControlTextarea1">
            Message
          </label>
          <textarea
            className="db border-box hover-black w-100 measure-wide ba b--black-20 pa2 br2 mb2"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <input
          className="f6 link dim br3 ba ph3 pv2 mb2 dib black"
          type="submit"
          name=""
        />
      </form>
    </div>
  );
};

export default Contact;
