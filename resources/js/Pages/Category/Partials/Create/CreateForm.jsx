import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import React from 'react';

const CreateForm = ({status}) => {
    console.log(status);
    return (
        <div className="card card-primary card-outline">
            <div className="card-header">
                <h5 className="m-0">Add new category</h5>
            </div>
            <div className="card-body">
                <form action="#">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <TextInput
                                    id="name"
                                    defaultValue={'aaa'}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <InputLabel htmlFor="slug">Slug</InputLabel>
                                <TextInput
                                    id="slug"
                                    defaultValue={'aaa'}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <InputLabel htmlFor="status">Status</InputLabel>
                                <SelectInput
                                    id="status"
                                    // data={[status}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default CreateForm;