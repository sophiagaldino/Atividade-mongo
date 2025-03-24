document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("student-form");
    const studentsList = document.getElementById("students-list");

    // Cadastrar aluno
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const aluno = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                curso: document.getElementById("curso").value,
                periodo: document.getElementById("periodo").value,
                turma: document.getElementById("turma").value,
                turno: document.getElementById("turno").value,
                endereco: document.getElementById("endereco").value,
                telefone: document.getElementById("telefone").value
            };

            fetch("http://localhost:5000/api/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(aluno)
            })
                .then(response => response.json())
                .then(data => {
                    alert("Aluno cadastrado com sucesso!");
                    window.location.href = "index.html";
                })
                .catch(error => console.error("Erro ao cadastrar aluno:", error));
        });
    }

    // Listar alunos
    if (studentsList) {
        fetch("http://localhost:5000/api/students")
            .then(response => response.json())
            .then(data => {
                data.forEach(aluno => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${aluno.nome}</td>
                        <td>${aluno.email}</td>
                        <td>${aluno.curso}</td>
                        <td><button onclick="deletarAluno('${aluno._id}')">Excluir</button></td>
                    `;
                    studentsList.appendChild(row);
                });
            })
            .catch(error => console.error("Erro ao carregar alunos:", error));
    }
});

// Excluir aluno
function deletarAluno(id) {
    if (confirm("Tem certeza que deseja excluir este aluno?")) {
        fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" })
            .then(() => {
                alert("Aluno excluído!");
                window.location.reload();
            })
            .catch(error => console.error("Erro ao excluir aluno:", error));
    }
}
