# Randoms
Ejercicio de microservicios para docker compose.
El contenido de las carpetas es:

- **randoms**: aplicación React que consume los microservicios que generan números al azar.
- **ex**: generador Express de números al azar.
- **ph**: generador PHP de números al azar.
- **py**: generador Python de números al azar.

Todos los generadores de números ofrecen sus servicios a través de http://localhost pero en diferentes puertos y de diferentes formas de acuerdo a la naturaleza del lenguaje.

La aplicacion React debe configurarse con los puertos apropiados para que pueda consultar. 
Deshabilitar CORS para probarla.

