$(document).ready(function() {
    carregarTarefas();

    // Adicionar tarefa
    $('#addTarefaBtn').on('click', function() {
        var tarefaText = $('#tarefaInput').val();
        if (tarefaText.length > 0) {
            addTarefa(tarefaText);
            salvarTarefas();
            $('#tarefaInput').val('');
        }
    });

    // Função para adicionar tarefas
    function addTarefa(text) {
        $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>');
    }

    // Marcar e desmarcar tarefa como concluída
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
        salvarTarefas();
    });

    // Remover tarefa
    $(document).on('click', 'span', function(e) {
        e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
            salvarTarefas();
        });
    });

    // Função para salvar tarefas localmente
    function salvarTarefas() {
        var tarefas = $('#tarefaList').html();
        localStorage.setItem('tarefas', tarefas);
    }

    // Função para carregar tarefas salvas localmente
    function carregarTarefas() {
        var tarefas = localStorage.getItem('tarefas');
        if (tarefas) {
            $('#tarefaList').html(tarefas);
        }
    }
});
