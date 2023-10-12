const column1 = [
    'Supervisor',
    'Asociado',
    'Ejecutivo',
    'Enlace',
    'Oficial',
    'Gerente',
    'Ingeniero',
    'Especialista',
    'Director',
    'Coordinador',
    'Administrador',
    'Arquitecto',
    'Analista',
    'Diseñador',
    'Planificador',
    'sinérgico',
    'orquestador',
    'Técnico',
    'Desarrollador',
    'Productor',
    'Consultor',
    'Asistente',
    'Facilitador',
    'Agente',
    'Representante',
    'Estratega',
]

const column2 = [
    'Director',
    'Sénior',
    'Dinámica',
    'Futuro',
    'Producto',
    'Nacional',
    'Regional',
    'Distrito',
    'Central',
    'Global',
    'Relacional',
    'Cliente',
    'Inversor',
    'Dinámica',
    'Internacional',
    'Legado',
    'Adelante',
    'Interactivo',
    'Interno',
    'Humano',
    'Jefe',
    'Principal',
]

const column3 = [
    'Soluciones',
    'Programa',
    'Marca',
    'Seguridad',
    'Investigación',
    'Marketing',
    'Directivas',
    'Implementación',
    'Integración',
    'Funcionalidad',
    'Respuesta',
    'Paradigma',
    'Táctica',
    'Identidad',
    'Mercados',
    'Grupo',
    'Resonancia',
    'Aplicaciones',
    'Mejoramiento',
    'Operaciones',
    'Infraestructura',
    'Intranet',
    'Comunicaciones',
    'Web',
    'Marca',
    'Calidad',
    'Garantía',
    'Impacto',
    'Movilidad',
    'Ideación',
    'Datos',
    'Creativo',
    'Configuración',
    'Responsabilidad',
    'Interacciones',
    'Factores',
    'Usabilidad',
    'Métrica',
    'Equipo',
]


function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function generateJobTitle() {
    let element = document.getElementById('job-title');
    let new_job_title = "⛄ ";
    new_job_title += getRandomElementFromArray(column1) + " ";
    new_job_title += getRandomElementFromArray(column2) + " de ";
    new_job_title += getRandomElementFromArray(column3) + " ⛄";
    element.innerHTML = new_job_title;
    element.style.visibility = 'visible';
}

