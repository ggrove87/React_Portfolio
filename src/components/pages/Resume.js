import React from 'react';
import resume from '../../assets/Gene-Grove-Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={resume} target="_blank"><p>Link to Resume download</p></a>
      <h2>Technical Skills</h2>
      <ul>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Mongo</li>
      </ul>

    </div>
  );
}
