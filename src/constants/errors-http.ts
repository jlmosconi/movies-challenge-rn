export const DEFAULT_HTTP_ERRORS: Readonly<Record<number, string>> = {
  0: 'No se pudo conectar con el servidor',
  500: 'Ha ocurrido un error, por favor intente de nuevo',
  404: 'Recurso no encontrado',
  400: 'Petición invalida',
  401: 'No autorizado',
  403: 'Acceso prohibido',
  409: 'Conflicto',
  422: 'Entidad no procesable',
  429: 'Demasiadas solicitudes',
  503: 'Servicio no disponible',
  518: 'Error de conexión',
};
