import React from "react";

export default class CarHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          className="CarPic"
          onClick={() => {
            this.props.selectCar(this.props.car.id);
          }}
        >
          <img
            src={this.props.car.picture}
            className="img-responsive"
            id="car-pic"
          />
          <div className="car-info">
            <div>
              <span className="span-spacer">{this.props.car.year}</span>
              <span className="span-spacer">{this.props.car.make}</span>
              <span className="span-spacer">{this.props.car.model}</span>
            </div>
            <div>Last Logged Mileage: {this.props.car.mileage}</div>
          </div>
        </div>
      </div>
    );
  }
}
