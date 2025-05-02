import PopupTemplate from "@arcgis/core/PopupTemplate.js";

export default new PopupTemplate({
  outFields: ["CITY_NAME, POP"],
  title: "{CITY_NAME}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "POP",
          label: "Population",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
  ],
});
