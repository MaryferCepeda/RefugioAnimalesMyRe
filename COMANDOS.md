php artisan make:migration add_google_id_to_users_table --table=users(crear tabla de google) (crear tabla de google)

php artisan make:migration create_productos_table  (crea la tabla productos)

php artisan db:seed --class=ProductosSeeder   (ingresar todos los productos generados en database/seeders/ProductosSeeder.php a mysql)

php artisan migrate (confirmar cambios/conexion a la db)

npm run build (empaquetador de cambios en los archivos)

php artisan serve (levantar servidor local)

php artisan cache:clear (limpia archvios que no se utilizan)

composer require mercadopago/dx-php:3.0.8 (instalar sdk version 3.0.8 de mercado pago)

npm install @mercadopago/sdk-react --legacy-peer-deps

php artisan db:seed --class=ProductosSeede (crea el modelo en app/Models/Producto.php para los campos de la base de datos) 

composer require srmklive/paypal  (descargar el sdk de paypal)


