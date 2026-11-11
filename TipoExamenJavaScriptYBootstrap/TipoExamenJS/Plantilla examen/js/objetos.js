"use strict";
// Codificar aquí las clases
class Libro {
    #idlibro;
    #idgenero;
    #titulo;
    #autor;
    #descripcion;
    #imagen;
    constructor(idlibro, idgenero, titulo, autor, descripcion, imagen) {
        this.#idlibro = idlibro;
        this.#idgenero = idgenero;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
    }
    get idlibro() {
        return this.#idlibro;
    }
    set idlibro(value) {
        this.#idlibro = value;
    }
    get idgenero() {
        return this.#idgenero;
    }
    set idgenero(value) {
        this.#idgenero = value;
    }
    get titulo() {
        return this.#titulo;
    }
    set titulo(value) {
        this.#titulo = value;
    }
    get autor() {
        return this.#autor;
    }
    set autor(value) {
        this.#autor = value;
    }
    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(value) {
        this.#descripcion = value;
    }
    get imagen() {
        return this.#imagen;
    }
    set imagen(value) {
        this.#imagen = value;
    }
    toJSON() {
        return {
            idlibro: this.#idlibro,
            idgenero: this.#idgenero,
            titulo: this.#titulo,
            autor: this.#autor,
            descripcion: this.#descripcion,
            imagen: this.#imagen
        }
    }
}
class Genero {
    #idgenero;
    #genero;
    constructor(idgenero, genero) {
        this.#idgenero
        this.#genero
    }
    get genero() {
        return this.#genero;
    }
    set genero(value) {
        this.#genero = value;
    }
    get idgenero() {
        return this.#idgenero;
    }
    set idgenero(value) {
        this.#idgenero = value;
    }
    toJSON() {
        return {
            idgenero: this.#idgenero,
            genero: this.#genero
        }
    }
}
class GestorNotas{
    async crearLibro(oLibro) {
    let datos = new FormData();

    // Se podría pasar campo a campo al servidor
    // pero en esta ocasión vamos a pasar todos los datos
    // en un solo parámetro cuyos datos van en formato JSON
    datos.append("libro", JSON.stringify(oLibro));

    let respuesta = await peticionPOST("crear_libro.php", datos);

    return respuesta;
  }
}