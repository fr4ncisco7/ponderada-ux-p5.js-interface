let historico = [
  { id: "SAFRA_JAN", lucro: 1250.50, r2: 0.02, taxa: 0.0175, ativos: 2, descricao: "Estratégia Conservadora" },
  { id: "SAFRA_FEV", lucro: 2840.00, r2: 0.05, taxa: 0.0175, ativos: 4, descricao: "Expansão de Mercado" },
  { id: "SAFRA_MAR", lucro: 1950.20, r2: 0.03, taxa: 0.0175, ativos: 3, descricao: "Ajuste de Risco Médio" },
  { id: "SAFRA_ABR", lucro: 3100.75, r2: 0.08, taxa: 0.0175, ativos: 5, descricao: "Apetite Agressivo" }
];

let clientes = [
  { nome: "Cli A", pd: 0.01, cap: 4500, cor: '#00d4ff' },
  { nome: "Cli B", pd: 0.025, cap: 3800, cor: '#0095ff' },
  { nome: "Cli C", pd: 0.075, cap: 5000, cor: '#ff4b5c' },
  { nome: "Cli D", pd: 0.005, cap: 6500, cor: '#00ffcc' },
  { nome: "Cli E", pd: 0.045, cap: 2500, cor: '#5e81ff' }
];

let cenarioSelecionado = null;
let limitesAnimados = [0, 0, 0, 0, 0];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(12, 18, 30);
  
  desenharMenuLateral();
  
  if (cenarioSelecionado) {
    desenharDetalhesCenario();
    desenharGraficoBarras();
  } else {
    fill(255, 100);
    textAlign(CENTER);
    textSize(20);
    text("SELECIONE UMA SAFRA NO MENU PARA ANALISAR", 520, height/2);
  }
}

function desenharMenuLateral() {
  // Painel Lateral
  fill(20, 28, 45);
  noStroke();
  rect(0, 0, 250, height);
  
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text("HISTÓRICO DE SAFRAS", 120, 40);
  textStyle(NORMAL);
  
  // Renderizar Botões do Histórico
  for (let i = 0; i < historico.length; i++) {
    let item = historico[i];
    let y = 70 + (i * 80);
    
    // Detectar Mouse
    let isHover = mouseX > 10 && mouseX < 240 && mouseY > y && mouseY < y + 70;
    fill(isHover ? (cenarioSelecionado === item ? '#00d4ff' : '#304560') : (cenarioSelecionado === item ? '#00d4ff' : '#253045'));
    
    rect(10, y, 230, 70, 8);
    

    fill(cenarioSelecionado === item ? 10 : 255);
    textSize(14);
    textStyle(BOLD);
    text(item.id, 70, y + 25);
    textStyle(NORMAL);
    textSize(11);
    text(item.descricao, 87, y + 45);
    text("Lucro: R$ " + item.lucro.toFixed(2), 87, y + 60);
  }
}

function mousePressed() {
  // Verificar clique nos cards do menu
  for (let i = 0; i < historico.length; i++) {
    let y = 70 + (i * 80);
    if (mouseX > 10 && mouseX < 240 && mouseY > y && mouseY < y + 70) {
      cenarioSelecionado = historico[i];
    }
  }
}

function desenharDetalhesCenario() {
  push();
  translate(280, 40);
  

  fill(30, 45, 80);
  rect(0, 0, 490, 80, 12);
  
  
  fill(255);
  textSize(22);
  text("Lucro Total: R$ " + cenarioSelecionado.lucro.toFixed(2), 150, 30);
  
  fill(200);
  textSize(12);
  text(`Risco (r2): ${(cenarioSelecionado.r2 * 100).toFixed(1)}%   |   Taxa Interchange: ${(cenarioSelecionado.taxa * 100).toFixed(2)}%`, 250, 60);
  pop();
}

function desenharGraficoBarras() {
  let spacing = 100;
  let r2 = cenarioSelecionado.r2;
  
  for (let i = 0; i < clientes.length; i++) {
    let x = 330 + (i * spacing);
    let yBase = height - 100;
    

    let targetH = (clientes[i].pd <= r2) ? clientes[i].cap / 25 : 5;
    limitesAnimados[i] = lerp(limitesAnimados[i], targetH, 0.1);
    

    fill(255, 10);
    rect(x - 30, yBase, 60, -clientes[i].cap / 25, 5);
    

    fill(clientes[i].pd <= r2 ? clientes[i].cor : '#442222');
    rect(x - 30, yBase, 60, -limitesAnimados[i], 5);
    

    fill(255);
    textAlign(CENTER);
    textSize(11);
    text(clientes[i].nome, x, yBase + 20);
    fill(255, 120);
    text("PD: " + (clientes[i].pd * 100).toFixed(1) + "%", x, yBase + 35);
    
    if (limitesAnimados[i] > 10) {
      fill(255);
      text("APROVADO", x, yBase - limitesAnimados[i] - 10);
    } else {
      fill(255, 50, 50);
      text("NEGADO", x, yBase - 15);
    }
  }
}