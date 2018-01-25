import React from 'react';
import { Link } from "./StyledComponents";

const MAIL_TO_LINK = "mailto:stefanbahnson@gmail.com?Subject=Insert%20Coin"
const TEL_LINK = "tel:0046707790938"

const BodyTextContact = () => (
  <div>
    <h1>This is my contact info</h1>
    <p>
      <small>Mobile:</small>
      <Link href={TEL_LINK}>070 779 09 38</Link>
    </p>
    <p>
      <small>E-mail:</small>
      <Link href={MAIL_TO_LINK}>stefanbahnson@gmail.com</Link></p>
  </div>
);

export default BodyTextContact;