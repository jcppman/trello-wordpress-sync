import React from 'react';
import reactDomServer from 'react-dom/server';

function Calendar(props) {
  const { gigs } = props;
  return (
    <table>
      <thead>
        <tr>
          <th className="hide-on-small-screen"></th>
          <th className="date">Date</th>
          <th>Location</th>
          <th className="hide-on-small-screen">With</th>
        </tr>
      </thead>
      <tbody>
      {
        gigs.map(g => (
          <tr key={g.id} onClick={() => { console.log('yo');}}>
            <td className="hide-on-small-screen">
              <a href={g.poster}>
                <img
                  style={{
                    width: 'auto',
                    height: '100px',
                  }}
                  src={g.poster}
                />
              </a>
            </td>
            <td className="date">{g.date}</td>
            <td>{g.location}</td>
            <td className="hide-on-small-screen">{g.otherBands.join('/')}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

module.exports = reactDomServer.renderToStaticMarkup(
  <Calendar {...data} />
);
