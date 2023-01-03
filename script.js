function back() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function scroll_cubo() {
    window.scrollTo({
        top: 450,
        behavior: "smooth",
    });
}

function scroll_piramide() {
    window.scroll({
        top: 1000,
        behavior: "smooth",
    });
}

function scroll_cone() {
    window.scroll({
        top: 1550,
        behavior: "smooth",
    });
}

function scroll_prisma() {
    window.scroll({
        top: 2125,
        behavior: "smooth",
    });
}

function scroll_esfera() {
    window.scroll({
        top: 2670,
        behavior: "smooth",
    });
}

function cubo() {
    var cube_a = parseInt(document.getElementById("cube").value)
    if(isNaN(cube_a)){
        alert("Valor invalido, digite todos os termos")
    }
    cube_op1 = cube_a ** 3

    document.getElementById("valor_cube").innerText = "Volume = " + cube_op1 + "cm³"
}

function piramide() {
    var pir_base = parseInt(document.getElementById("pir_base").value)
    if(isNaN(pir_base)){
        alert("Valor invalido, digite todos os termos")
    }
    var pir_alt = parseInt(document.getElementById("pir_alt").value)
    if(isNaN(pir_alt)){
        alert("Valor invalido, digite todos os termos")
    }
    pir_op1 = pir_base * pir_alt
    pir_op2 = pir_op1 / 3

    document.getElementById("valor_pir").innerText = "Volume = " + pir_op2 + "cm³"
}

function cone() {
    var cone_raio = parseInt(document.getElementById("cone_raio").value)
    if(isNaN(cone_raio)){
        alert("Valor invalido, digite todos os termos")
    }
    var cone_alt = parseInt(document.getElementById("cone_alt").value)
    if(isNaN(cone_alt)){
        alert("Valor invalido, digite todos os termos")
    }
    var cone_pi = parseInt(document.getElementById("cone_pi").value)
    if(isNaN(cone_pi)){
        alert("Valor invalido, digite todos os termos")
    }
    cone_op1 = cone_raio ** 2
    cone_op2 = cone_op1 * cone_alt * cone_pi
    cone_op3 = cone_op2 / 3

    document.getElementById("valor_cone").innerText = "Volume = " + cone_op3 + "cm³"
}

function prisma_tri() {
    var prism_lado = parseInt(document.getElementById("prism_lado").value)
    if(isNaN(prism_lado)){
        alert("Valor invalido, digite todos os termos")
    }
    var prism_alt = parseInt(document.getElementById("prism_alt").value)
    if(isNaN(prism_alt)){
        alert("Valor invalido, digite todos os termos")
    }
    prism_tri_op1 = prism_lado ** 2
    prism_tri_op2 = prism_tri_op1 * 1.73
    prism_tri_op3 = prism_tri_op2 / 4
    prism_tri_op4 = prism_tri_op3 * prism_alt

    document.getElementById("valor_prisma").innerText = "Volume = " + prism_tri_op4 + "cm³"
}

function prisma_hex() {
    var prism_lado = parseInt(document.getElementById("prism_lado").value)
    if(isNaN(prism_lado)){
        alert("Valor invalido, digite todos os termos")
    }
    var prism_alt = parseInt(document.getElementById("prism_alt").value)
    if(isNaN(prism_alt)){
        alert("Valor invalido, digite todos os termos")
    }
    prism_hex_op1 = prism_lado ** 2
    prism_hex_op2 = prism_hex_op1 * 1.73
    prism_hex_op3 = prism_hex_op2 / 4
    prism_hex_op4 = prism_hex_op3 * 6
    prism_hex_op5 = prism_hex_op4 * prism_alt

    document.getElementById("valor_prisma").innerText = "Volume = " + prism_hex_op5 + "cm³"
}

function esfera() {
    var esfera_raio = parseInt(document.getElementById("esfera_raio").value)
    if(isNaN(esfera_raio)){
        alert("Valor invalido, digite todos os termos")
    }
    var esfera_pi = parseInt(document.getElementById("esfera_pi").value)
    if(isNaN(esfera_pi)){
        alert("Valor invalido, digite todos os termos")
    }
    esfera_op1 = 4 * esfera_pi
    esfera_op2 = esfera_raio ** 3
    esfera_op3 = esfera_op1 * esfera_op2
    esfera_op4 = esfera_op3 / 3

    document.getElementById("valor_esfera").innerText = "Volume = " + esfera_op4 + "cm³"
}