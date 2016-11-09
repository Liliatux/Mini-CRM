(function(){
	'use strict';

	var app = {
		
		urlCrm: '/crm.json',

		init: function(){
			this.ajaxCrm();
		},

		//Récupération des données du crm.json
		ajaxCrm : function(){
			$.ajax(this.urlCrm)
			.done(this.ajaxDoneCrm)
			.fail()
			.always();
		},

		//Affichage des données du crm
		ajaxDoneCrm: function(crm){
			var crmData = crm.customers;
			for(var i = 0; i < crmData.length; i++){
				$("#crm").append("<tr id="+i+"></tr>");
				$("select").append("<option value="+i+">"+crmData[i].first_name+ ' ' +crmData[i].last_name+"</option>");
				for(var k in crmData[i]){
					$("#"+i).append("<td>"+crmData[i][k]+"</td>");
				}
			}
		}
	}

	$(document).ready(function(){
		app.init();
	});
})();