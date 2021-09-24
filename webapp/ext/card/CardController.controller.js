sap.ui.define([
	"sap/ovp/cards/generic/Card.controller"	
],function(Controller){
	"use strict";

	return Controller.extend("z.ovp.ex.ext.card.CardController", {

		onInit: function(){
			Controller.prototype.onInit.apply(this, arguments);
		},

		onBeforeRendering: function(){
			var oCardPropertiesModel = this.getCardPropertiesModel();
			oCardPropertiesModel.setProperty("/cardLayout/rowSpan", 30);
		},

		onAfterRendering: function(){
			Controller.prototype.onAfterRendering.apply(this, arguments);

			var oCard = this.oDashboardLayoutUtil.dashboardLayoutModel.getCardById(this.cardId);
			var iHeaderHeight = Math.max(oCard.dashboardLayout.headerHeight, this.getHeaderHeight());
			var sCardId = this.oDashboardLayoutUtil.getCardDomId(this.cardId);
			var element = document.getElementById(sCardId);

			element.getElementsByClassName('sapOvpWrapper')[0].style.height =
                            (oCard.dashboardLayout.rowSpan * this.oDashboardLayoutUtil.ROW_HEIGHT_PX) - (iHeaderHeight + 2 * this.oDashboardLayoutUtil.CARD_BORDER_PX) + "px";
		},


		resizeCard: function(newCardLayout){
			var oCardPropertiesModel = this.getCardPropertiesModel();
			oCardPropertiesModel.setProperty("/cardLayout/rowSpan", newCardLayout.rowSpan);
			oCardPropertiesModel.setProperty("/cardLayout/colSpan", newCardLayout.colSpan);

			var oContainer = this.getOwnerComponent().oContainer;
			var oHeader = this.byId("ovpCardHeader");
			var oContent = this.byId("ovpCardContentContainer");
			var oFooter = this.byId("ovpCardFooterContent");

			var iHeader = $(oHeader.$()).outerHeight();
			var iContent = $(oContent.$()).outerHeight();
			var iFooter = $(oFooter.$()).outerHeight();
			var iContainer = $(oContainer.$()).outerHeight();

			var iContent = iContainer - ( iFooter + iHeader );

			if(iContent > 0){
				iContent = Math.floor( iContent / 16 ) * 16;
			}

			oContent.$().css({height: iContent + "px"});
		}



	});

}, true);