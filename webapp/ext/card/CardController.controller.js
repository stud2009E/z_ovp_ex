sap.ui.define([
	"sap/ovp/cards/generic/Card.controller"	
],function(Controller){
	"use strict";

	return Controller.extend("z.ovp.ex.ext.card.CardController", {

		onInit: function(){
			Controller.prototype.onInit.apply(this, arguments);
		},

		onBeforeRendering: function(){
			
		},

		onAfterRendering: function(){
			Controller.prototype.onAfterRendering.apply(this, arguments);
			var oCardPropertiesModel = this.getCardPropertiesModel();
			var oCard = this.oDashboardLayoutUtil.dashboardLayoutModel.getCardById(this.cardId);
			
			if(isNaN(oCardPropertiesModel.getProperty("/cardLayout/rowSpan"))){
				oCardPropertiesModel.setProperty("/cardLayout/rowSpan", 20);
			}

			var iRowSpan = Math.max(oCardPropertiesModel.getProperty("/cardLayout/rowSpan"), oCard.dashboardLayout.rowSpan) || 20;

			this._setWraperHeight(iRowSpan);
		},


		_setWraperHeight: function(iRowSpan){
			var oCard = this.oDashboardLayoutUtil.dashboardLayoutModel.getCardById(this.cardId);
			var iHeaderHeight = Math.max(oCard.dashboardLayout.headerHeight, this.getHeaderHeight());
			var sCardId = this.oDashboardLayoutUtil.getCardDomId(this.cardId);
			var element = document.getElementById(sCardId);
			element.getElementsByClassName('sapOvpWrapper')[0].style.height =
                            (iRowSpan * this.oDashboardLayoutUtil.ROW_HEIGHT_PX) - (iHeaderHeight + 2 * this.oDashboardLayoutUtil.CARD_BORDER_PX) + "px";
		},

		resizeCard: function(newCardLayout){
			var oCardPropertiesModel = this.getCardPropertiesModel();
			oCardPropertiesModel.setProperty("/cardLayout/rowSpan", newCardLayout.rowSpan);
			oCardPropertiesModel.setProperty("/cardLayout/colSpan", newCardLayout.colSpan);

			this._setWraperHeight(newCardLayout.rowSpan);
		}



	});

}, true);