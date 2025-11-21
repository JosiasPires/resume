export default function GeneralForm( {info, setInfo} ) {

    function handleChange(e) {
        const {name, value} = e.target;
        setInfo({...info, [name]: value});
    }
    return (
        <div>
            <h2>Personal Information</h2>
            <label>
                Full Name: <input type="text" name="fullName" value={info.fullName} onChange={handleChange} />
            </label>
            <label>
                E-mail: <input type="email" name="email" value={info.email} onChange={handleChange} />
            </label>
            <label>
                Phone number: <input type="tel" name="phone" value={info.phone} onChange={handleChange} />
            </label>
            <label>
                Profession: <input type="text" name="profession" value={info.profession} onChange={handleChange} />
            </label>
            <label>
                Description: <input type="text" name="aboutMe" value={info.aboutMe} onChange={handleChange} />
            </label>
        </div>
    );
}