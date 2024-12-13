function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente.');
        return;
    }

    let fsex = document.getElementsByName('radsex');
    let idade = ano - Number(fano.value);
    let gênero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        gênero = 'Homem';
        if (idade < 10) {
            img.setAttribute('src', 'img/foto.bb.menino.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'img/foto.adolec.menino.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'img/foto.adult.homem.jpg');
        } else {
            img.setAttribute('src', 'img/foto.idoso.homem.png');
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher';
        if (idade < 10) {
            img.setAttribute('src', 'img/foto.bb.menina.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'img/foto.adolec.menina.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'img/foto.adult.mulher.jpg');
        } else {
            img.setAttribute('src', 'img/foto.idoso.mulher.png');
        }
    } else {
        alert('[ERRO] Selecione o gênero.');
        return;
    }

    res.style.textAlign = 'center';
        img.style.display = 'block';
        img.style.margin = '0 auto';
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
}
