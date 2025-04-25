import './ScoreCardButton.css';

function ScoreCardButton(props) {
    const { scoreCount } = props;
  return (
    <div className="score-container">
      <div className="score">
        <button className="score-button" onClick={scoreCount}>+1</button>
      </div>
    </div>
  );
}
export default ScoreCardButton;