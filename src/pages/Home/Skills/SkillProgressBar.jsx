
const SkillProgressBar = ({ skill, percent }) => {
  return (
    <div className="skill-progress  w-3/4 mx-auto  p-5 bg-[#252734] ">
      <div className="skill-name">{skill}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
