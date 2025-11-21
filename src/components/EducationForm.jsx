export default function EducationForm({info, setInfo}) {
    function handleChange(e, id) {
        const {name, value} = e.target;

        setInfo(info.map(education => {
            if (id === education.id) return {...education, [name]: value};
            return education;
        }));
    }

    function addEducation() {
        const newInfo = [...info];
        newInfo.push({
            id: crypto.randomUUID(),
            school: "",
            course: "",
            start: '',
            end: ''
        });
        setInfo(newInfo);
    }

    function removeEducation(id) {
        setInfo(info.filter(education => education.id !== id));
    }

    return (
        <div>
            <h2>Education</h2>
            {info.length > 0 && (
                info.map(education => {
                    return <div key={education.id} className="entry">
                        <button type="button" onClick={() => removeEducation(education.id)}>Remove</button>
                        <label>
                            School name: <input type="text" name="school" value={education.school} onChange={e => handleChange(e, education.id)} />
                        </label>
                        <label>
                            Course: <input type="text" name="course" value={education.course} onChange={e => handleChange(e, education.id)} />
                        </label>
                        <label>
                            Start date: <input type="text" name="start" value={education.start} onChange={e => handleChange(e, education.id)} />
                        </label>
                        <label>
                            End date: <input type="text" name="end" value={education.end} onChange={e => handleChange(e, education.id)} />
                        </label>
                    </div>
                })
            )}
            <button type="button" onClick={addEducation}>Add Education</button>
        </div>
    )
}
