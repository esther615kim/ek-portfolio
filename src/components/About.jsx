import React from 'react';
import { StyledImage } from '../styles/Element.styled';
import { stacks } from './../static/data/stacks';

function about() {
  return (
    <div>
      <div
        style={{
          border: '1px solid #eee',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          background:
            'linear-gradient(187deg, rgba(255,255,255,1) 49%, rgba(245,245,245,1) 100%)',
        }}
      >
        <h3>Interested in React development environment</h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          perferendis animi reiciendis consectetur error asperiores harum qui,
          vitae architecto obcaecati placeat quo in maxime dolorum et ratione
          veritatis iste laboriosam.
        </h4>
        <div style={{ padding: 15, display: 'flex', flexWrap: 'wrap' }}>
          {stacks.map((item) => {
            return (
              <div key={item}>
                <StyledImage width={50} src={item.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default about;
