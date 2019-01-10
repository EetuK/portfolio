import React, { Component } from "react";
import "./Tabs.css";

class Tabs extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedTab: 0
    };
  }

  changeTab = key => {
    this.setState({ selectedTab: key });
  };

  render() {
    const { selectedTab } = this.state;
    const { tabsData } = this.props;
    return (
      <div>
        <div className="mt-4">
          <ul className="nav nav-pills nav-justified">
            {tabsData.map((dat, i) => {
              return (
                <li className="nav-item" key={i}>
                  <h2
                    className={
                      selectedTab === i ? "nav-link active" : "nav-link"
                    }
                    onClick={() => this.changeTab(i)}
                  >
                    {dat.title}
                  </h2>
                </li>
              );
            })}
          </ul>
        </div>
        <div>{tabsData[selectedTab].content}</div>
      </div>
    );
  }
}
export default Tabs;
