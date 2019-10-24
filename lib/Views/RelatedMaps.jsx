import React from "react";
import PropTypes from "prop-types";

import MenuPanel from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx";
import PanelStyles from "terriajs/lib/ReactViews/Map/Panels/panel.scss";
import Styles from "./related-maps.scss";
import classNames from "classnames";

function RelatedMaps(props) {
  const dropdownTheme = {
    inner: Styles.dropdownInner,
    icon: "gallery"
  };

  return (
    <MenuPanel
      theme={dropdownTheme}
      btnText="Related Maps"
      smallScreen={props.smallScreen}
      viewState={props.viewState}
      btnTitle="See related maps"
    >
      <div className={classNames(PanelStyles.header)}>
        <label className={PanelStyles.heading}>Related Maps</label>
      </div>

      <p>Clicking on a map below will open it in a separate window or tab.</p>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="http://nationalmap.gov.au/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/nationalmap.png")}
            alt="NationalMap"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="http://nationalmap.gov.au/"
        >
          NationalMap
        </a>

        <p>
          The NationalMap is a website for map-based access to spatial data from
          Australian government agencies. It has been developed by Data61
          working closely with the Department of the Prime Minister and Cabinet,
          Geoscience Australia and other government agencies.
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://maps.digitalearth.africa/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/DigitalEarthAfrica.png")}
            alt="Digital Earth Africa"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://maps.digitalearth.africa/"
        >
          Digital Earth Africa
        </a>

        <p>
          Digital Earth Africa is leveraging international Earth Observation
          (EO) data and science to produce new information and services that
          benefit African countries.{" "}
          <a
            target="_blank"
            className={Styles.link}
            href="https://maps.digitalearth.africa/"
          >
            https://maps.digitalearth.africa/
          </a>
          .
        </p>
      </div>
    </MenuPanel>
  );
}

RelatedMaps.propTypes = {
  viewState: PropTypes.object.isRequired,
  smallScreen: PropTypes.bool
};

export default RelatedMaps;
