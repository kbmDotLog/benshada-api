import React from 'react';

import PropTypes from 'prop-types';

class Price extends React.Component {
  static propTypes = {
    price: PropTypes.number,
    discount: PropTypes.number
  };

  render = () => {
    const productPrice = this.props.price;

    if (productPrice === undefined) return false;

    return this.props.discount > 0 ? (
      <>
        <span className="font-weight-bold lead mb-0 pb-0">&#x20A6; {productPrice * (1 - this.props.discount / 100)}</span>
        <br />
        <small className="font-weight-lighter m-0 p-0">
          <strike>&#x20A6; {productPrice}</strike><br />
          <span className="bg-warning p-1 m-0 rounded">{`- ${this.props.discount}%`}</span>
        </small>
      </>
    ) : (
      <span className="font-weight-bold lead">&#x20A6; {productPrice}</span>
    );
  };
}

export default Price;
