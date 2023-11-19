// agentDetails.js

function loadAgentDetails(agentUUID) {
  const apiUrl = `https://valorant-api.com/v1/agents/${agentUUID}?language=pt-BR`;

  // Faz uma requisição AJAX para a API
  $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
          // Exibe os dados na div com a class "desc"
          const descDiv = $(".desc");
          descDiv.empty(); // Limpa o conteúdo anterior

          const agentData = data.data;
          const agentName = agentData.displayName;
          const agentDescription = agentData.description;

          // Adiciona os elementos HTML para exibir os dados
          const agentNameElement = $("<h2>").text(agentName);
          const agentDescriptionElement = $("<p>").text(agentDescription);

          // Adiciona os elementos à div "desc"
          descDiv.append(agentNameElement, agentDescriptionElement);

          // Adiciona as imagens das habilidades à div "desc"
          const abilitiesDiv = $("<div>").addClass("abilities");

          // Loop através das habilidades e adiciona as imagens
          agentData.abilities.forEach((ability) => {
              const abilityImage = $("<img>")
                  .attr("src", ability.displayIcon)
                  .css({
                    "max-width": "50px", // Define o tamanho máximo de 50px
                    "margin-right": "10px"
                });

              abilitiesDiv.append(abilityImage);
          });

          descDiv.append(abilitiesDiv);

          // Adicione aqui a lógica específica para cada agente
          if (agentUUID === "e370fa57-4757-3604-3648-499e1f642d3f") {
              // Código específico para o agente com UUID "e370fa57-4757-3604-3648-499e1f642d3f"
              console.log("Detalhes do Agente Mestre");
              // Adicione aqui o código específico que você deseja executar para o agente mestre
          } else {
              // Código padrão para outros agentes
              console.log("Detalhes do Agente");
              // Adicione aqui o código padrão que você deseja executar para outros agentes
          }
      },
      error: function (error) {
          console.error("Erro ao carregar dados do agente:", error);
      }
  });
}

// Função para lidar com o hover na imagem do agente
$(".fotinha").on("mouseenter", function () {
  // Obtém o UUID do agente do atributo "alt" da imagem
  const agentUuid = $(this).attr("alt");

  // Carrega os dados do agente
  loadAgentDetails(agentUuid);
});

// Função para lidar com o mouse saindo da imagem do agente
$(".fotinha").on("mouseleave", function () {
  // Limpa os detalhes do agente ao retirar o mouse da imagem
  const descDiv = $(".desc");
  descDiv.empty();
});