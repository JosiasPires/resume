export default function ExperienceForm({ info, setInfo }) {
    function handleChange(e, id) {
        const {name, value} = e.target;

        setInfo(info.map(experience => {
            if (id === experience.id) return {...experience, [name]: value};
            return experience;
        }));
    }

    function addExperience() {
        const newInfo = [...info];
        newInfo.push({
            id: crypto.randomUUID(),
            company: "",
            position: "",
            description: "",
            start: '',
            end: ''
        });
        setInfo(newInfo);
    }

    function removeExperience(id) {
        setInfo(info.filter(experience => experience.id !== id));
    }

    return (
        <div>
            <h2>Experience</h2>
            {info.length > 0 && (
                info.map(experience => {
                    return <div key={experience.id} className="entry">
                        <button type="button" onClick={() => removeExperience(experience.id)}>Remove</button>
                        <label>
                            Company name: <input type="text" name="company" value={experience.company} onChange={e => handleChange(e, experience.id)} />
                        </label>
                        <label>
                            Position: <input type="text" name="position" value={experience.position} onChange={e => handleChange(e, experience.id)} />
                        </label>
                        <label>
                            Description: <textarea name="description" value={experience.description} onChange={e => handleChange(e, experience.id)} />
                        </label>
                        <label>
                            Start date: <input type="text" name="start" value={experience.start} onChange={e => handleChange(e, experience.id)} />
                        </label>
                        <label>
                            End date: <input type="text" name="end" value={experience.end} onChange={e => handleChange(e, experience.id)} />
                        </label>
                    </div>
                })
            )}
            <button type="button" onClick={addExperience}>Add Experience</button>
        </div>
    )
}