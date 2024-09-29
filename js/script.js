$(document).ready(function () {
    $('#aiForm').on('submit', function (e) {
      e.preventDefault(); // Impede o recarregamento da página
      
      const humor = $('#prompt-humor').val();// Pega o valor do input
      const tempo = $('#prompt-tempo').val();
      const atividade = $('#prompt-atividade').val();
      const orcamento = $('#prompt-orcamento').val()

      //Cria uma história concatenando com o Tema (assunto)
      const prompt =  'Chat, imagine que você seja um psicólogo. Então descreva para mim o dia perfeito de forma muito breve pois estou com o humor '+humor+'. O tempo que eu tenho para o dia de hoje é '+tempo+'. A atividade que gosto de fazer é '+atividade+'e meu orçamento para hoje é '+orcamento;
  
      // Faz a requisição para o backend utilizando Ajax
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/generate-content', // URL do backend
        data: JSON.stringify({ prompt: prompt }), // Envia o prompt no corpo da requisição
        contentType: 'application/json',
        success: function (response) {
          $('#msg-body').html(response.response); // Exibe o conteúdo na tag <p>
        },
        error: function (err) {
          console.error('Erro ao gerar conteúdo:', err);
        }
      });
    });
  });
  