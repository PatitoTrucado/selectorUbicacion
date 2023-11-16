const ciudadesPorPais = {
    Ar: ['Bariloche', 'Buenos Aires', 'Córdoba', 'Mendoza', 'Ushuaia'],
    Co: ['Barranquilla', 'Bogota', 'Monteria', 'Medellin', 'Pereira'],
    Ch: ['Bahía Inglesa','Las Capillas de Mármol', 'Santiago de Chile', 'Isla de Pascua', 'Valparaíso'],
    Mx: ['Cancún', 'Ciudad de México', 'Guadalajara', 'Playa Del Carmen', 'Veracruz'],
    Pe: ['Machu Picchu', 'Valle del Colca', 'Arequipa', 'Cusco', 'Lima']
}

const paises = document.getElementById('pais');
paises.addEventListener('change', selectEstados);

function selectEstados() {
    const paisSelecionado = this.value;

    const listaCiudades = document.getElementById('ciudad');

    listaCiudades.innerHTML = '<option value="seleccionar">Seleccionar</option>';

    ciudadesPorPais[paisSelecionado].forEach(ciudad => {
        listaCiudades.innerHTML += `<option value="${ciudad.toLowerCase()}">${ciudad}</option>`;
    });
}