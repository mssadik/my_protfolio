import SkillProgressBar from "./SkillProgressBar";
import './SkillProgressBar.css';

const Skills = () => {
    return (
        <div id="skills" className="bg-[#2A2C39]">

            <div className="py-16 md:grid md:grid-cols-4 items-center w-10/12 mx-auto">
                <div className="">
                    <p className="text-xs mb-10 ">|| My Skills</p>
                    <h1 className="text-2xl mb-5  md:text-4xl Roboto_Slab">My Special Skill <br /> Field Here.</h1>
                    <p></p>
                </div>
                <div className="SkillProgressBar">
                    <SkillProgressBar skill="HTML 5 = 95%" percent={95} />
                    <SkillProgressBar skill="CSS 3 = 90%" percent={90} />
                    <SkillProgressBar skill="Tailwind CSS = 90%" percent={90} />
                    <SkillProgressBar skill="Bootstrap = 98%" percent={98} />

                </div>
                <div className="SkillProgressBar">
                    <SkillProgressBar skill="JavaScript = 75%" percent={75} />
                    <SkillProgressBar skill="React.js = 80%" percent={80} />
                    <SkillProgressBar skill="Node.js = 40%" percent={40} />
                    <SkillProgressBar skill="Express.js. = 40%" percent={40} />
                </div>
                <div className="SkillProgressBar">
                    <SkillProgressBar skill="Mongo DB = 45%" percent={45} />
                    <SkillProgressBar skill="Firebase = 60%" percent={60} />
                    <SkillProgressBar skill="GitHub = 70%" percent={70} />
                    <SkillProgressBar skill="Vercel = 45%" percent={45} />
                </div>
            </div>
        </div>
    );
};

export default Skills;