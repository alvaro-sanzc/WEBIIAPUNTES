# DISEÑO DE UN SERVICIO WEB BASADO EN REST

MOVIE
 - GET /movies -> Ver todas las películas -> 200 OK
 - GET /movies/id -> Ver los detalles de cada película -> 200 OK 404 Not Found 
 - POST /movies  -> Añadir películas -> 201 Created
 - PUT /movies/id -> Actualizar la inf de las películas -> 200 OK, 400 Bad Request
 - DELETE /movies/id -> Eliminar una película del sistema -> 204 No Content

SESSIONS
- GET /sessions -> Ver toda la inf de las sessiones -> 200 OK
- GET /sessions/id -> Ver los detalles de la sessión -> 200 OK 404 Not Found
 

BOOKINGS
- GET /bookings -> Ver todas las reservas disponibles -> 200 OK
- GET /bookings/id -> Obtener las reservas de una película
- POST /bookings -> Crear una nueva reserva -> 201 Created
- DELETE /bookings/id -> Cancelar la reserva

STATS
- GET /stats/movies -> Película más vistas -> 200 OK
- GET /stats/sales -> Recaudación total -> 200 OK

RECOMENDATIONS
- GET /recomendations?usuario=email -> Recomendaciones para el usuario -> 200 OK 404 Not Found

USERS
- POST /user -> Registrar un usuario -> 201 created 400 Bad Request
- GET /user/id -> Ver la inf del usuario -> 200 OK
- PUT /user/id -> Actualizar los datos del usuario -> 200 OK 404 Not Found
- DELETE /user/id -> Eliminar la cuenta -> 204 No Content
- GET /user/vip/id -> Ver el estado VIP del usuario y ver sus ventajas -> 200 OK 404 Not Found
- POST /user/vip -> Convertirse a VIP -> 200 OK 404 Not Found
- DELETE /usuarios/vip/id -> Cancelar VIP