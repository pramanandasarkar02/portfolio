import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1>contact</h1>
      <div className="">
        <div>
          <div>
            Email:
            <span>pramanandasarkar02@gmail.com</span>
          </div>
          <div>
            Linkdin:
            <span>https://www.linkedin.com/in/pramanandasarkar02/</span>
          </div>
          <div>
            Phone:
            <span>+8801814160814</span>
          </div>
          <div>
            Address:
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
        <div>
          <div>
            Email
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            Message
            <textarea placeholder="write your message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
