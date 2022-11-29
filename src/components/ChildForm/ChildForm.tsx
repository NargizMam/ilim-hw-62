import React from 'react';
import './Form.css';


const ChildForm = () => {
    return (
        <>
            <form >
                <h4>Add new Dish</h4>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           className="form-control"

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Surname</label>
                    <textarea
                        name="surname"
                        id="surname"
                        className="form-control"

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Photo</label>
                    <input type="url"
                           id="image"
                           name="image"
                           className="form-group"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Birthday</label>
                    <input type="number"
                           id="birthday"
                           name="birthday"
                           className="form-control"

                    />
                </div>
                <button type="submit"
                        className="btn btn-primary"
                >Create</button>
            </form>
        </>
    );
};

export default ChildForm;
