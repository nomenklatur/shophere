import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import LeafletMap from '@/Components/LeafletMap';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />
                <div className='py-5'>
                    <LeafletMap />
                </div>
        </AuthenticatedLayout>
    );
}
