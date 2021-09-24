sap.ui.define([
	"sap/ovp/cards/generic/Component"
], function (
	CardComponent
) {
	"use strict";

	return CardComponent.extend("z.ovp.ex.ext.card.Component", {

		metadata: {
			properties: {
				"contentFragment": {
					"type": "string",
					"defaultValue": "z.ovp.ex.ext.card.CardContent"
				},
				"controllerName": {
					"type": "string",
					"defaultValue": "z.ovp.ex.ext.card.CardController"
				},
				"annotationPath": {
					"type": "string",
					"defaultValue": "com.sap.vocabularies.UI.v1.LineItem"
				},
				"countHeaderFragment": {
					"type": "string",
					"defaultValue": "sap.ovp.cards.generic.CountHeader"
				},
				"headerExtensionFragment": {
					"type": "string",
					"defaultValue": "sap.ovp.cards.generic.KPIHeader"
				},
				"footerFragment": {
					type: "string",
					defaultValue: "z.ovp.ex.ext.card.Footer"
				}
			},

			version: "${version}",

			library: "sap.ovp",

			includes: [],

			dependencies: {
				libs: ["sap.suite.ui.microchart"],
				components: []
			},
			config: {}
		}
	});
}, true);