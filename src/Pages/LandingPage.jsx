import React, { Component } from 'react';
import VegeImg from '../Supports/Asset/vege.jpg';
import FruitImg from '../Supports/Asset/fruit.jpg';
import MeatImg from '../Supports/Asset/meat1.jpg';
import FishImg from '../Supports/Asset/fish1.jpeg';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 card">
            <img src={VegeImg} alt="Vegetable in basket" />
          </div>
          <div className="col-6 card">
            <img src={FruitImg} alt="" />
          </div>
          <div className="col-12">
            <h1>Meat💚Vagetable💚Fruit💚Fish</h1>
          </div>
          <div className="col-6 card">
            <img src={MeatImg} alt="" />
          </div>
          <div className="col-6 card">
            <img src={FishImg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
