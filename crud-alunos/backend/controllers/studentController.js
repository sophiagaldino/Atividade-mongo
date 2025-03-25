const Student = require("../models/student");

// Cria um novo aluno
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: "Aluno cadastrado com sucesso!", student });
    } catch (error) {
        res.status(400).json({ message: "Erro ao cadastrar aluno", error });
    }
};

// Lista todos os alunos
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar alunos", error });
    }
};

// Buscar um aluno por ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar aluno", error });
    }
};

// (atualização parcial)
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, // Atualiza apenas os campos enviados
            { new: true, runValidators: true } // Retorna o documento atualizado e valida os campos
        );

        if (!student) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }

        res.status(200).json({ message: "Aluno atualizado com sucesso!", student });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar aluno", error });
    }
};

// Exclui aluno
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        res.status(200).json({ message: "Aluno excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir aluno", error });
    }
};
