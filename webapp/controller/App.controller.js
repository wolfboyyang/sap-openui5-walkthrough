sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit() {
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }
    });
  }
);
