import Point from "@arcgis/core/geometry/Point.js";

const popupContent = `<b>This is a small demo of the React-based GIS web-application using ArcGIS Maps SDK for JavaScript</b>
    <br/>
    Featuring:
        <ul class="list-disc pl-6">
            <li>Custom default extent</li>
            <li>
                <a class="text-blue-500 underline" href="https://www.arcgis.com/home/item.html?id=d9677f2ef1d547c29fc30e628596f0c0" target="_blank" rel="noopener noreferrer">
                    World National Capital Cities Feature Layer
                </a>
            </li>
            <li>
                Custom popup template for the cities layer
            </li>
        </ul>
    <br/>
    Thanks for checking it out! :)
    `;

const welcomePopup: __esri.PopupViewOpenPopupOptions = {
  title: "Hi!",
  content: popupContent,
  location: new Point({
    // could be done with arcgis autocast without Point class, but kept it for typescript safety
    x: 3870578.3962356057,
    y: 3769219.5512452563,
    spatialReference: {
      wkid: 102100,
    },
  }),
};

export default welcomePopup;
