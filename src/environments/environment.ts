// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  /*urlListarTonelaje: 'http://localhost:8080/transporte/tonelaje/listar-tonelaje',
    urlCrearTonelaje: 'http://localhost:8080/transporte/tonelaje/crear-tonelaje',
    urlEliminarTonelaje: 'http://localhost:8080/transporte/tonelaje/eliminar-tonelaje'
    http://localhost:8080/transporte/tonelaje/editar-tonelaje
  */
 //Tonelaje
    urlListarTonelaje: '/transporte/tonelaje/listar-tonelaje',
    urlCrearTonelaje: '/transporte/tonelaje/crear-tonelaje',
    urlEliminarTonelaje: '/transporte/tonelaje/eliminar-tonelaje',
    urlBuscarTonelajePorId: '/transporte/tonelaje/buscar-tonelaje-id',
    urlActualizarTonelaje:  '/transporte/tonelaje/editar-tonelaje',

    //Vehículo
    urlListarVehiculo: '/transporte/vehiculo/listar-vehiculo',
    urlAgregarVehiculo: '/transporte/vehiculo/crear-vehiculo',
    urlBuscarVehiculoPorId: '/transporte/vehiculo/buscar-vehiculo-id',
    urlActualizarVehiculo:  '/transporte/vehiculo/editar-vehiculo',
    urlEliminarVehiculo: '/transporte/vehiculo/eliminar-vehiculo'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
