import "./Collaborator.css"

const Collaborator = () => {
    return (
        <div className="container__card">
            <div className="card__header">
                <img src="https://github.com/lipeplima.png" alt="Imagem do Colaborador" />
            </div>
            <div className="card__footer">
                <h4>Felipe Lima</h4>
                <h5>Desenvolvedor Front-End</h5>
            </div>
        </div>
    )
}

export default Collaborator;