/*global QUnit*/

sap.ui.define([
	"sap.ui.demo.walkthrough/controller/HelloPanel.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HelloPanel Controller");

	QUnit.test("I should test the HelloPanel controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
