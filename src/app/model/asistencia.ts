export interface asistencia{
    alumnoId: number;
    nombre: string; // Nombre del alumno
    materia: string;
    fecha: string;
    estado: boolean; // Asistencia "presente"        
  
}

interface Materia {
    id: string;
    nombre: string;
    codigoQR: string;        // Código QR asociado a la materia
    asistencia: asistencia[];  // Lista de asistencias registradas para esta materia
  }