import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import { useEffect } from "react";
import citiesPopupTemplate from "../config/citiesPopupTemplate";
import welcomePopup from "../config/welcomePopupTemplate";
import { worldCitiesUrl } from "../services/links";

const useInitMap = () => {
  useEffect(() => {
    const map = new Map({
      basemap: "osm",
      layers: [
        new FeatureLayer({
          url: worldCitiesUrl,
          popupEnabled: true,
          popupTemplate: citiesPopupTemplate,
        }),
      ],
    });

    const mapView = new MapView({
      container: "viewDiv",
      map,
      center: [34.7699, 32.045],
      zoom: 10,
      ui: {
        components: ["attribution"], // remove default top-left zoom widget
      },
    });
    // in real-life enterprise applications I would store mapView reference in a context
    // or in a state management library like zustand for easier access through the app
    // but for this demo let's keep it simple

    mapView.ui.add("zoom", "bottom-right"); // UX friendly zoom location

    mapView.when(() =>
      mapView
        .openPopup(welcomePopup) // display welcome popup after the map has loaded
        .catch((e) => console.error("welcome popup error:", e))
    );

    return () => mapView.destroy(); // cleanup mapView on unmount
  }, []);
};

export default useInitMap;
