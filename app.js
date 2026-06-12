const metasODS = {

    1:["1.1 Erradicar la pobreza extrema","1.2 Reducir la pobreza"],

    2:["2.1 Poner fin al hambre","2.2 Eliminar la malnutrición"],

    3:["3.1 Reducir mortalidad materna","3.2 Mejorar salud infantil"],

    4:["4.1 Educación primaria y secundaria","4.2 Acceso a educación de calidad"],

    5:["5.1 Eliminar discriminación","5.2 Igualdad de género"],

    6:["6.1 Agua potable","6.2 Saneamiento"],

    7:["7.1 Acceso a energía","7.2 Energías renovables"],

    8:["8.1 Crecimiento económico","8.2 Empleo digno"],

    9:["9.1 Infraestructura sostenible","9.2 Innovación"],

    10:["10.1 Inclusión social","10.2 Reducir desigualdades"],

    11:["11.1 Vivienda segura","11.2 Transporte sostenible"],

    12:["12.1 Consumo responsable","12.2 Gestión sostenible"],

    13:["13.1 Adaptación climática","13.2 Cambio climático"],

    14:["14.1 Reducir contaminación marina","14.2 Ecosistemas marinos"],

    15:["15.1 Ecosistemas terrestres","15.2 Biodiversidad"],

    16:["16.1 Reducir violencia","16.2 Instituciones eficaces"],

    17:["17.1 Cooperación internacional","17.2 Alianzas estratégicas"]
};

document.getElementById("ods").addEventListener("change", function(){

    const meta = document.getElementById("metaOds");

    meta.innerHTML =
    '<option value="">Seleccione una meta</option>';

    const lista = metasODS[this.value];

    if(lista){

        lista.forEach(function(item){

            const opcion =
            document.createElement("option");

            opcion.value = item;
            opcion.textContent = item;

            meta.appendChild(opcion);

        });

    }

});

document.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    try{

        let nombre =
        document.getElementById("nombreProyecto").value.trim();

        let sede =
        document.getElementById("sede").value;

        let departamento =
        document.getElementById("departamento").value;

        let plazo =
        document.getElementById("plazo").value.trim();

        let fechaInicio =
        document.getElementById("fechaInicio").value;

        let fechaFin =
        document.getElementById("fechaFin").value;

        let ambito =
        document.getElementById("ambito").value;

        let ods =
        document.getElementById("ods").value;

        let metaOds =
        document.getElementById("metaOds").value;

        if(nombre==="")
            throw new Error("Ingrese el nombre del proyecto");

        if(sede==="")
            throw new Error("Seleccione una sede");

        if(departamento==="")
            throw new Error("Seleccione un departamento");

        if(plazo==="")
            throw new Error("Ingrese el plazo");

        if(fechaInicio==="" || fechaFin==="")
            throw new Error("Ingrese las fechas");

        if(new Date(fechaFin)<=new Date(fechaInicio))
            throw new Error("La fecha final debe ser posterior");

        let cobertura =
        document.querySelectorAll(
        'input[name="cobertura"]:checked');

        if(cobertura.length===0)
            throw new Error("Seleccione una cobertura");

        let sector =
        document.querySelectorAll(
        'input[name="sector"]:checked');

        if(sector.length===0)
            throw new Error("Seleccione un sector beneficiario");

        if(ambito==="")
            throw new Error("Seleccione un ámbito prioritario");

        if(ods==="")
            throw new Error("Seleccione un ODS");

        if(metaOds==="")
            throw new Error("Seleccione una meta ODS");

        let coberturas =
        [...cobertura].map(c=>c.value).join(", ");

        let sectores =
        [...sector].map(s=>s.value).join(", ");

        document.getElementById("resumen").innerHTML = `
            <h2>Resumen del Registro</h2>

            <p><strong>Proyecto:</strong> ${nombre}</p>

            <p><strong>Sede:</strong> ${sede}</p>

            <p><strong>Departamento:</strong> ${departamento}</p>

            <p><strong>Plazo:</strong> ${plazo}</p>

            <p><strong>Cobertura:</strong> ${coberturas}</p>

            <p><strong>Sector Beneficiario:</strong> ${sectores}</p>

            <p><strong>ODS:</strong> ${document.getElementById("ods").options[document.getElementById("ods").selectedIndex].text}</p>

            <p><strong>Meta ODS:</strong> ${metaOds}</p>
        `;

    }
    catch(error){
        alert(error.message);
    }

});