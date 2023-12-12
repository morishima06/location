import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashbo
        </h2>
      }
    ></AuthenticatedLayout>
  );
}
