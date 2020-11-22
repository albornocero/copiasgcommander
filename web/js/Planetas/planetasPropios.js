//Limpiamos los modulos cargados anteriormente
garbage.clean();

//A�adimos la nota del planeta
garbage.regInstance(
	new Tips('.tooltip',{
	    showDelay: 0,
	    hideDelay: 0,
	    className: 'tip-container',
	    fixed:false,
	    offsets: {'x': 5, 'y': 5}
	})
);

$$('.tooltip').store('tip:text', '');	//Limpiamos la URL del tip

//Array de botones de eliminar
$$('.btnEliminar').each(function(item, index){
	item.removeEvents();
    item.addEvent('click', function(e) {
		cargarSeccion('?controlador=Planetas&accion=eliminar&idGalaxia='+item.getParent().getNext('.idGalaxia').get('value')+'&idPlaneta='+item.getParent().getNext('.idPlaneta').get('value')+'&accionRecargar=planetasPropios', $('morphPanelWrap').getFirst('div'), 'jspestana','Planetas','planetasPropios');
    });
});

//Array de botones de anadir
$$('.btnAnadir').each(function(item, index){
	item.removeEvents();
    item.addEvent('click', function(e) {
    	cargarSeccion('?controlador=Planetas&accion=anadir&idGalaxia='+item.getParent().getNext('.idGalaxia').get('value')+'&idPlaneta='+item.getParent().getNext('.idPlaneta').get('value')+'&accionRecargar=planetasPropios', $('morphPanelWrap').getFirst('div'), 'jspestana','Planetas','planetasPropios');
    });
});

//Array de botones de Ver planeta
$$('.btnVerPlaneta').each(function(item, index){
	item.addEvent('click', function(e) {
		galaxiasGalaxiaSel=item.getParent().getParent().getFirst('.idGalaxia').value;
		galaxiasSectorSel=item.getParent().getParent().getFirst('.idSector').value;
		galaxiasCuadranteSel=item.getParent().getParent().getFirst('.idCuadrante').value;
	
		cargarSeccion('?controlador=Galaxias&accion=galaxias&idGalaxia='+galaxiasGalaxiaSel+'&idSector='+galaxiasSectorSel+'&idCuadrante='+galaxiasCuadranteSel, $('indexDivCentro'), 'jsmodulo','','');
			
		e.stop();
	});
});

//Array de botones de abandonar
$$('.btnAbandonar').each(function(item, index){
	item.removeEvents();
    item.addEvent('click', function(e) {
    	var idGalaxia=item.getParent().getNext('.idGalaxia').get('value');
    	var idPlaneta=item.getParent().getNext('.idPlaneta').get('value');
		Alerta.confirm($('planetasLblConfirmacionAbandonar').get('value'), {
			onComplete: 
				function(returnvalue) { 
		            if(returnvalue){
				    	//Creamos la peticion
						var req = new Request({
							url: '?controlador=Planetas&accion=abandonar&idGalaxia='+idGalaxia+'&idPlaneta='+idPlaneta,
							method: 'post',
							evalScripts: true,
							onRequest: function(){
								//Mostramos la precarga
								$('preloader').setStyle('display', 'inline');
							},
							onComplete: function(html){
								//Ocultamos el mensaje de precarga
								$('preloader').setStyle('display', 'none');
								
								//Metemos el html en la alerta
								Alerta.info(html);
								
								//Recargamos la seccion
								cargarSeccion('?controlador=Planetas&accion=planetasPropios', $('morphPanelWrap').getFirst('div'), 'jspestana','Planetas','planetasPropios');
							},
							onFailure: function(){
								//Ocultamos el mensaje de carga
								$('preloader').setStyle('display', 'none');
							}
						});
						//Enviamos la peticion
						req.send();
		            }
				}
		});
    });
});