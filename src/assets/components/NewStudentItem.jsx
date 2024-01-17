import "./NewStudentItem.css"

const NewStudentItem = () => {
    return (
        <form>
            <div>
                <div className="NewStudentContainer">
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="StudentInput">
                    <label>Surname</label>
                    <input type="text" />
                </div>
                <div className="StudentInput">
                    <label>Age</label>
                    <input type="number" min="0" max="100" step="1"/>
                </div>
            </div>
            <div className="SubmitButton">
                <button>Add Student</button>
            </div>
        </form>
    )
}

export default NewStudentItem;