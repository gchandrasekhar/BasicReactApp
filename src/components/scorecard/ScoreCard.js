import './ScoreCard.css';

function ScoreCard(props) {
    const { score } = props;
  return (
    <div className="score">
        <h1>{score}</h1>
      </div>
  );
}
export default ScoreCard;