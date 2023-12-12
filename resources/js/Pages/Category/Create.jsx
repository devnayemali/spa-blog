import Breadcrumb from '@/Components/Breadcrumb';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Create from './Partials/Create/CreateForm';
import CreateCategory from './Partials/Create/CreateForm';
import CreateForm from './Partials/Create/CreateForm';

export default function Index({ auth, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Category</h2>}
        >
            <Head title="Category" />

            <div className="content-wrapper py-5">
                {/* <Breadcrumb /> */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <CreateForm status={status} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
