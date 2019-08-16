import React from "react";
import Arrow from "./Arrow.jsx";
import Row from "./Row.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 4,
      table: [],
      numberArr: [],
      target: []
    };
    this.drop = this.drop.bind(this);
    this.createTable = this.createTable.bind(this);
    this.createnumberArr = this.createnumberArr.bind(this);
  }

  componentDidMount() {
    this.createTable(4);
    this.createnumberArr(4);
  }

  createnumberArr(num) {
    let numberArr = [];
    for (let i = 0; i < num; i++) {
      numberArr.push(i);
    }
    this.setState({
      numberArr: numberArr
    });
  }

  drop(num) {
    console.log("drop", num);
    let table = this.state.table;
    let target = [num];
    for (let i = this.state.number - 1; i >= 0; i--) {
      if (table[num][i][2] === false) {
        table[num][i][2] = true;
        target.push(i);
        break;
      }
    }
    this.setState(
      {
        table: table,
        target: target
      }
    );
  }

  createTable(num) {
    let table = [];
    for (let i = 0; i < num; i++) {
      let row = [];
      for (let j = 0; j < num; j++) {
        row.push([i, j, false]);
      }
      table.push(row);
    }

    this.setState({
      table: table
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.state.numberArr.map((ele, i) => (
              <th>
                <Arrow
                  number={this.state.number}
                  x={ele}
                  key={i}
                  drop={this.drop}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.state.numberArr.map((ele, i) => (
              <Row x={ele} key={i} numberArr={this.state.numberArr} target={this.state.target}/>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
