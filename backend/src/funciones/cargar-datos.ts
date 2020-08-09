import * as fs from 'fs';

export function cargarDatos(
  path,
  servicio,
) {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        err ? reject(err) : resolve(servicio.crear(JSON.parse(data)));
      });
    });
  } catch (e) {
    console.error({
      mensaje: 'Error cargando datos de inicio',
      error: e,
    });
  }
}
