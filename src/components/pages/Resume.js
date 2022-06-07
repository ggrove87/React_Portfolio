import React from 'react';
import resume from '../../assets/Gene-Grove-Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={resume} target="_blank"><p>Link to Resume download</p></a>
    </div>
  );
}
