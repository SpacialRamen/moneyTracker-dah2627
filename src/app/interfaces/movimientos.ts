// Dentro de src/app/interfaces/movimientos.interface.ts
export interface Movimientos {
    id: number;
    titulo: string;
    razon: string;
    cantidad: number;
    pagado: boolean;
    tipo: 'ingreso' | 'gasto'; 
}
