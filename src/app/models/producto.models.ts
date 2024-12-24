export interface Producto {
    _id:            string;
    nombre:         string;
    descripcion:    string;
    categoria:      string[];
    imageUrl:       string[];
    precio_venta:   number;
    precio_regular: number;
    creado_en:      string;
    slug?:            Date;
    updated_at?:      Date;
}