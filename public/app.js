(function(){
	'use strict';

	var app = {
		
		urlCrm: '/crm.json',

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
			var crmData = crm.customers;
			for(var i = 0; i < crmData.length; i++){
				$("#crm").append("<ul id="+i+"></ul>");
				for(var k in crmData[i]){
					$("#"+i).append("<li>"+k+ ':' + ' ' +crmData[i][k]+"</li>");
				}
			}
		},

		//Envoie du formulaire
		listener: function(){
			$("#send").on('click', this.form.bind(this));
		},

		//Récupération des données du formulaire
		form: function(event){
			event.preventDefault();
			var firstName = $("#firstName").val();
			var lastName = $("#lastName").val();
			var phone = $("#phone").val();
			var mail = $("#mail").val();
			var description = $("textarea").val();
			app.ajaxForm({first_name: firstName, last_name: lastName, phone: phone, mail: mail, description: description});
		},

		//Envoie au serveur des données du formulaire
		ajaxForm: function(data){
			$.ajax({
				type: "POST",
				url: $("#form").attr("action"),
				data: data,
				success: this.success
			});
		},

		//Si réussi affiche une swal
		success: function(){
			swal({
				title: "Envoyé !",
				text: "Merci de nous avoir fourni vos données",
				type: "success",
				confirmButtonText: "Back"
			});
			$("#form").trigger("reset");
		}
	}

	$(document).ready(function(){
		app.init();
	});
})();