/**
 * user support page
 */

import React, { Component } from "react";
import support from "../../config/data/support.json";
import { Card } from "../../components";
import "./styles.css";
class Support extends Component {
  render() {
    let props = {
      styleClassName: "dashboard-card",
      activeClassName: "active-dashboard-card"
    };
    return (
      <div className="dashboard-page">
        <h1>Support</h1>
        <div className="support-container">
          <div className="support-description">
            {/* <p>
              We are sorry to hear that you having issues with our website.
              Checkout these commonly occured issues bellow. If you are still
              having difficulties then, please reach out to us throught our{' '}
              <a className='links' href='https://discord.gg/upefiu'>
                Discord Server
              </a>{' '}
              or email us at{' '}
              <a className='links' href='mailto: upe@fiu.edu'>
                {' '}
                upe@fiu.edu
              </a>
              .
            </p> */}
          </div>
          <div style={{ width: "100%" }}>
            {support.map(data => {
              const { title, description } = data;
              return (
                <Card
                  description={description}
                  title={title}
                  isMarkdown={true}
                  {...props}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Support;
