$(document).ready(function () {
    $('#aiForm').on('submit', function (e) {
      e.preventDefault(); // Impede o recarregamento da página
  
      const prompt = $('#prompt').val(); // Pega o valor do input
  
      // Faz a requisição para o backend
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/generate-content', // URL do backend
        data: JSON.stringify({ prompt: prompt }), // Envia o prompt no corpo da requisição
        contentType: 'application/json',
        success: function (response) {
          console.log(response.response); // Exibe o conteúdo gerado no console do navegador
        },
        error: function (err) {
          console.error('Erro ao gerar conteúdo:', err);
        }
      });
    });
  });
  