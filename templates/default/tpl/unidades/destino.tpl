<table cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td>
			<!-- BEGIN tRiqueza -->
			<div class="misionPlanetaRiqueza">{PLANETARIQ} %</div>
			<!-- END tRiqueza -->
			<div><img src="{PLANETAIMG}" class="imagenPlanetaNor" alt="{PLANETANOM}" /></div>
		</td>
		<td>{PLANETANOM}</td>
		<td>
			<div>{PLANETAUSR} {PLANETAALZ}</div>
		</td>
		<td>
			<div>{_TIPOMISION}:</div>
			<div>
				<select name="unidadSelMisiones" id="unidadSelMisiones" class="lstRecursos">
					<option value="0" selected="selected">{_SELECCIONATIPOMISION}...</option>
					<!-- BEGIN tDesplegar -->
					<option value="2">{_DESPLEGAR}</option>
					<!-- END tDesplegar -->
					<!-- BEGIN tAtacar -->
					<option value="1">{_ATACAR}</option>
					<!-- END tAtacar -->
					<!-- BEGIN tRecolectar -->
					<option value="3">{_RECOLECTAR}</option>
					<!-- END tRecolectar -->
					<!-- BEGIN tExplorar -->
					<option value="4" id="unidadOptExplorar">{_EXPLORAR}</option>
					<!-- END tExplorar -->
					<!-- BEGIN tConquistar -->
					<option value="5">{_CONQUISTAR}</option>
					<!-- END tConquistar -->
					<!-- BEGIN tContratacar -->
					<option value="6">{_CONTRATACAR}</option>
					<!-- END tContratacar -->
					<!-- BEGIN tEstablecer -->
					<option value="7">{_ESTABLECERBASE}</option>
					<!-- END tEstablecer -->
				</select>
			</div>
			<div>{_VELOCIDAD}:</div>
			<div>
				<select name="unidadSelVelocidad" id="unidadSelVelocidad" class="lstRecursos">
					<option value="100" selected="selected">100%</option>
					<option value="90">90%</option>
					<option value="80">80%</option>
					<option value="70">70%</option>
					<option value="60">60%</option>
					<option value="50">50%</option>
					<option value="40">40%</option>
					<option value="30">30%</option>
					<option value="20">20%</option>
					<option value="10">10%</option>
				</select>
			</div>
		</td>
	</tr>
</table>
<div id="unidadDivTiempo"></div>