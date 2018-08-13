import React, { PureComponent } from "react";

class Courses extends PureComponent {
  state = {
    courses: [
      {
        id: 0,
        name: "Curso de prueba 1"
      },
      {
        id: 1,
        name: "Curso de prueba 2"
      }
    ]
  };

  renderRows = () => {
    const { courses } = this.state;
    return courses.map(d => (
      <li key={d.name}>
        {d.name}
      </li>
));
  };

  render() {
    return (
      <div>
        <h2>
Pokemon List
        </h2>
        <p>
Esta es una lista de pokemons
        </p>
        {this.renderRows()}
      </div>
    );
  }
}

export default Courses;
