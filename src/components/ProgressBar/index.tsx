const ProgressBar = ({ pourcent }: { pourcent: number }) => {
  return (
    <div className="progressbar_container">
      <div className="progressbar_bar-container">
        <div className="progressbar_bar-fill" style={{ width: `${pourcent}%` }}></div>
      </div>
      <span className="progressbar-completion-count">{pourcent}%</span>
    </div>
  );
};

export default ProgressBar;
