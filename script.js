// Pegando elementos checados.

var btn = document.getElementById('div-botao')

// Primeira Seção
var s1_seg = document.getElementById('s1-seg')
var s1_ter = document.getElementById('s1-ter')
var s1_qua = document.getElementById('s1-qua')
var s1_qui = document.getElementById('s1-qui')
var s1_sex = document.getElementById('s1-sex')
var s1_sab = document.getElementById('s1-sab')
var s1_dom = document.getElementById('s1-dom')
// Fim da Primeira Seção

// Segunda Seção
var s2_seg = document.getElementById('s2-seg')
var s2_ter = document.getElementById('s2-ter')
var s2_qua = document.getElementById('s2-qua')
var s2_qui = document.getElementById('s2-qui')
var s2_sex = document.getElementById('s2-sex')
var s2_sab = document.getElementById('s2-sab')
var s2_dom = document.getElementById('s2-dom')
// Fim da Segunda seção

// Terceira Seção
var s3_seg = document.getElementById('s3-seg')
var s3_ter = document.getElementById('s3-ter')
var s3_qua = document.getElementById('s3-qua')
var s3_qui = document.getElementById('s3-qui')
var s3_sex = document.getElementById('s3-sex')
var s3_sab = document.getElementById('s3-sab')
var s3_dom = document.getElementById('s3-dom')
// Fim terceira seção

// Quarta Seção
var s4_seg = document.getElementById('s4-seg')
var s4_ter = document.getElementById('s4-ter')
var s4_qua = document.getElementById('s4-qua')
var s4_qui = document.getElementById('s4-qui')
var s4_sex = document.getElementById('s4-sex')
var s4_sab = document.getElementById('s4-sab')
var s4_dom = document.getElementById('s4-dom')
// Fim Quarta seção

// Quinta seção
var s5_seg = document.getElementById('s5-seg')
var s5_ter = document.getElementById('s5-ter')
var s5_qua = document.getElementById('s5-qua')
var s5_qui = document.getElementById('s5-qui')
var s5_sex = document.getElementById('s5-sex')
var s5_sab = document.getElementById('s5-sab')
var s5_dom = document.getElementById('s5-dom')
//Fim quinta seção


// Seção Semana
var sem1 = document.getElementById('semana-1')
var sem2 = document.getElementById('semana-2')
var sem3 = document.getElementById('semana-3')
var sem4 = document.getElementById('semana-4')
// Fim seção semana

//Verificação da Primeira Semana
s1_seg.addEventListener('click', verificar)
s2_seg.addEventListener('click', verificar)
s3_seg.addEventListener('click', verificar)
s4_seg.addEventListener('click', verificar)
s5_seg.addEventListener('click', verificar)
//Fim

// Verificação da segundo dia
s1_ter.addEventListener('click', verificar2)
s2_ter.addEventListener('click', verificar2)
s3_ter.addEventListener('click', verificar2)
s4_ter.addEventListener('click', verificar2)
s5_ter.addEventListener('click', verificar2)

// Verfificação terceiro dia
s1_qua.addEventListener('click', verificar3)
s2_qua.addEventListener('click', verificar3)
s3_qua.addEventListener('click', verificar3)
s4_qua.addEventListener('click', verificar3)
s5_qua.addEventListener('click', verificar3)

// Verificação quarto dia
s1_qui.addEventListener('click', verificar4)
s2_qui.addEventListener('click', verificar4)
s3_qui.addEventListener('click', verificar4)
s4_qui.addEventListener('click', verificar4)
s5_qui.addEventListener('click', verificar4)

// verificação quinto dia
s1_sex.addEventListener('click', verificar5)
s2_sex.addEventListener('click', verificar5)
s3_sex.addEventListener('click', verificar5)
s4_sex.addEventListener('click', verificar5)
s5_sex.addEventListener('click', verificar5)

// verificação sexto dia
s1_sab.addEventListener('click', verificar6)
s2_sab.addEventListener('click', verificar6)
s3_sab.addEventListener('click', verificar6)
s4_sab.addEventListener('click', verificar6)
s5_sab.addEventListener('click', verificar6)

//Setimo dia
s1_dom.addEventListener('click', verificar7)
s2_dom.addEventListener('click', verificar7)
s3_dom.addEventListener('click', verificar7)
s4_dom.addEventListener('click', verificar7)
s5_dom.addEventListener('click', verificar7)

btn.addEventListener('click', resetar)
function resetar() {
    btn.window.location.reload();
}

function verificar() {
    if (s1_seg.checked && s2_seg.checked && s3_seg.checked && s4_seg.checked && s5_seg.checked) {
        window.alert('Parabéns, Primeiro dia Concluído')
    }
}

function verificar2() {
    if (s1_ter.checked && s2_ter.checked && s3_ter.checked && s4_ter.checked && s5_ter.checked) {
        window.alert('Parabéns, Segundo dia Concluído')
    }
}

function verificar3() {
    if (s1_qua.checked && s2_qua.checked && s3_qua.checked && s4_qua.checked && s5_qua.checked) {
        window.alert('Parabéns, Terceiro dia Concluído')
    }
}

function verificar4() {
    if (s1_qui.checked && s2_qui.checked && s3_qui.checked && s4_qui.checked && s5_qui.checked) {
        window.alert('Parabéns, Quarto dia Concluído')
    }
}

function verificar5() {
    if (s1_sex.checked && s2_sex.checked && s3_sex.checked && s4_sex.checked && s5_sex.checked) {
        window.alert('Parabéns, Quinto dia Concluído')
    }
}

function verificar6() {
    if (s1_sab.checked && s2_sab.checked && s3_sab.checked && s4_sab.checked && s5_sab.checked) {
        window.alert('Parabéns, Sexto dia Concluído')
    }
}

function verificar7() {
    if (s1_dom.checked && s2_dom.checked && s3_dom.checked && s4_dom.checked && s5_dom.checked) {
        window.alert('Parabéns, Setimo dia Concluído')
    }
}

