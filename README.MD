## Ponderada de UX: Auditoria Histórica de Crédito (Simplex)

## 1. Introdução à Proposta
A proposta consiste em uma ferramenta de **análise retrospectiva**. Diferente de ferramentas de configuração manual, esta interface foca no conceito de **"Exploração de Dados Confiáveis"**.

O sistema utiliza a lógica do **Método Simplex** para demonstrar como diferentes políticas de risco ($r2$) e taxas de interchange impactaram a carteira de clientes em períodos passados (Safras). A intenção é permitir que o usuário entenda a lógica de aprovação/negação do algoritmo comparando cenários de sucesso e cautela de forma visual e intuitiva.

---

## 2. Rascunhos Iniciais
O design foi focado em três pilares fundamentais:
* **Navegação Lateral:** Organização cronológica das safras para identificação rápida de cenários.
* **Decisão Algorítmica Visível:** Uso de cores contrastantes para status de aprovação.
* **Continuidade Visual:** Animações fluidas para demonstrar o ajuste de limites em tempo real.

![Espaço reservado para a imagem do seu rascunho/wireframe](rascunho.png)

---

## 3. Registro do Resultado Obtido
O protótipo final, desenvolvido em **p5.js**, atingiu um alto nível de interatividade e clareza:

* **Interatividade de Seleção:** Ao clicar em qualquer card da barra lateral, o gráfico à direita é reconstruído instantaneamente com os parâmetros daquela safra específica.
* **Feedback de Performance:** O lucro total e os parâmetros de risco são destacados no topo da tela, servindo como a conclusão da análise do cenário selecionado.
* **Visualização de Capacidade:** As barras de fundo (opacas) mostram o limite potencial do cliente (Capacidade), enquanto as barras sólidas mostram o que o algoritmo realmente liberou, evidenciando as restrições impostas pelo Simplex.
* **Animação de Transição:** Implementação de interpolação (`lerp`) para que a mudança entre safras seja percebida como um processo de ajuste dinâmico.

---
**Atividade Ponderada de UX - Maio de 2026**