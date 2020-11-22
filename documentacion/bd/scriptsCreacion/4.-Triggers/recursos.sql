DROP TRIGGER IF EXISTS tipoRecursoUsuario_BU;

DELIMITER |

CREATE TRIGGER tipoRecursoUsuario_BU
BEFORE UPDATE ON tipoRecursoUsuario
FOR EACH ROW
BEGIN
	IF NEW.cantidad < 0 THEN
		CALL NOHAYUFICIENTESRECURSOS;
	END IF;
END;
|

DELIMITER ;