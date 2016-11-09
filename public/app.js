(function(){
	'use strict';

	var app = {
		
		urlCrm: '/crm.json',
		crmData: [],

		init: function(){
			this.ajaxCrm();
			this.listener();
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
			app.crmData = crm.customers;
			for(var i = 0; i < app.crmData.length; i++){
				$("#crm").append("<tr id="+i+"></tr>");
				$("select").append("<option value="+i+">"+app.crmData[i].first_name+ ' ' +app.crmData[i].last_name+"</option>");
				for(var k in app.crmData[i]){
					$("#"+i).append("<td>"+app.crmData[i][k]+"</td>");
				}
			}
		},

		//Click sur le select
		listener: function(){
			$("select").on("click", this.edit.bind(this));
		},

		//Récupération de la valeur du select et affichage du contenu de l'objet dans le formulaire edit
		edit: function(){
			var select = $("select").val();
			var crmSelect = this.crmData[select];
			$("#first_name").val(crmSelect.first_name);
			$("#last_name").val(crmSelect.last_name);
			$("#company").val(crmSelect.company);
			$("#role").val(crmSelect.role);
			$("#phone").val(crmSelect.phone);
			$("#email").val(crmSelect.email);
			$("#description").val(crmSelect.description);
		}
	}

	$(document).ready(function(){
		app.init();
	});
})();