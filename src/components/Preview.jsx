export default function Preview({generalInfo, educationInfo, experienceInfo}) {
    function byPeriod(entryA, entryB) {
        const endA = entryA.end === "" ? Infinity : entryA.end;
        const endB = entryB.end === "" ? Infinity : entryB.end;

        if (endA < endB) return 1;
        if (endA > endB) return -1;

        if (entryA.start < entryB.start) return 1;
        if (entryA.start > entryB.start) return -1;

        return 0;
    }
    const experiences = experienceInfo.toSorted(byPeriod);
    const educations = educationInfo.toSorted(byPeriod);
    return (
        <div id="preview">
            <div className="previewCV">
                <section className="header">
                    <div>
                        <h2>{generalInfo.fullName.toUpperCase()}</h2>
                        <p id="profession">{generalInfo.profession}</p>
                    </div>
                    <div>
                        <p>{generalInfo.email}</p>
                        <p>{generalInfo.phone}</p>
                    </div>
                </section>
                <hr />
                <section>
                    <h3>PERSONAL PROFILE</h3>
                    <p>{generalInfo.aboutMe}</p>
                </section>
                <hr />
                <section>
                    <h3>WORK EXPERIENCE</h3>
                    {experiences.map((experience) => {
                        return <div key={experience.id} className="CVEntry">
                            <h4>{experience.position}</h4>
                            <div>
                                <p>{experience.company}</p>
                                <p>{experience.start} — {experience.end === "" ? "Present" : experience.end}</p>
                            </div>
                            <p>{experience.description}</p>
                        </div>
                    })}
                </section>
                <hr />
                <section>
                    <h3>EDUCATION</h3>
                    {educations.map((education) => {
                        return <div key={education.id} className="CVEntry">
                            <h4>{education.course}</h4>
                            <div>
                                <p>{education.school}</p>
                                <p>{education.start} — {education.end === "" ? "Present" : education.end}</p>
                            </div>
                            <p>{education.description}</p>
                        </div>
                    })}
                </section>
            </div>
        </div>
    )
}