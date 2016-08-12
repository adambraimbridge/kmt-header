import React, { Component, PropTypes } from 'react';
import HeaderExtraActions from './../header-extra-actions';

class HeaderTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headerTitle } = this.props;

    return (
      <div className='o-header-services__top o-header-services__container'>

        {this.props.enableMobileMenu === true
          ? <div className='o--if-js o-header-services__hamburger'>
              <a className='o-header-services__hamburger-icon' href="#o-header-drawer" aria-controls="o-header-drawer"></a>
            </div>
          : ""
        }

        <div className='o-header-services__ftlogo'></div>

        <div className='o-header-services__title'>
          <h1 className='o-header-services__product-name'>{headerTitle.label}</h1>
          {headerTitle.summary
            ? <span className='o-header-subrand__product-tagline'>{headerTitle.summary}</span>
            : ""
          }
        </div>

        <HeaderExtraActions />

      </div>
    );
  }
};

import { headerTitleTypes } from "../../reducers/header-title";

HeaderTop.propTypes = {
  enableMobileMenu: PropTypes.bool,
  headerTitle: PropTypes.shape(headerTitleTypes).isRequired
};

HeaderTop.defaultProps = {
};

export default HeaderTop;
