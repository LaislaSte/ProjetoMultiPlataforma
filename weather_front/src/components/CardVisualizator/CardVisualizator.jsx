import './card_visualizator.scss';

const CardVisualizator = ({ item }) => {
  return (
    <div className="card">
      <div className="card__column">
        <div className="card__line">
          <p>
            <strong>Temperatura: </strong> {item?.temperature}
          </p>
          <p>
            <strong>Humidade: </strong> {item?.humidity}
          </p>
        </div>
        <div className="card__line">
          <p>
            <strong>Data: </strong> {item?.date}
          </p>
          <p>
            <strong>Hora: </strong> {item?.hour}
          </p>
        </div>
      </div>
      <div className="card__img">
        <img src={item?.icon} alt="icone de temperatura atual" />
      </div>
    </div>
  );
};

export default CardVisualizator;
