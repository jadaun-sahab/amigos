import React, { useState } from 'react';


export default function About() {
          const [value, setValue] = useState('1');
        
          const handleChange = (newValue) => {
            setValue(newValue);
          };
        
          return (
            <div className="tabs-container">
              <div className="tab-list">
                <div
                  className={`tab ${value === '1' ? 'active' : ''}`}
                  onClick={() => handleChange('1')}
                >
                  Item One
                </div>
                <div
                  className={`tab ${value === '2' ? 'active' : ''}`}
                  onClick={() => handleChange('2')}
                >
                  Item Two
                </div>
                <div
                  className={`tab ${value === '3' ? 'active' : ''}`}
                  onClick={() => handleChange('3')}
                >
                  Item Three
                </div>
              </div>
              <div className="tab-content">
                <div className={`tab-panel ${value === '1' ? 'active' : ''}`}>
                  Item One Content
                </div>
                <div className={`tab-panel ${value === '2' ? 'active' : ''}`}>
                  Item Two Content
                </div>
                <div className={`tab-panel ${value === '3' ? 'active' : ''}`}>
                  Item Three Content
                </div>
              </div>
            </div>
          );
        }