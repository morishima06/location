import Header from '@/Components/organisms/Header';
import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Show = (props) => {
  const { shopInfo } = props;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <>
      <Header />
      <Head title="店舗一覧" />

                    <AuthenticatedLayout
              auth={props.auth}
      errors={props.errors}

        />



      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      id
                    </th>
                    <th
                      scope="col"
                      className="flex justify-center whitespace-nowrap px-6 py-4"
                    >
                      編集
                    </th>

                    <th scope="col" className="whitespace-nowrap px-6 py-4 ">
                      店舗名
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      zipcode
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      都道府県
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      市町村
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      住所
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      tel
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      エリア名
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      エリアコード
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      取り扱いブランド
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      最寄駅
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      店舗種類
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      営業時間
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shopInfo.map((info) => (
                    <tr
                      key={info.id}
                      className=" border-b text-xs ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4">{info.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          href={route('ShopInfo.edit', { id: info.id })}
                          method="get"
                        >
                          <button className="rounded-lg bg-blue-600 px-2 py-1 text-white">
                            編集する
                          </button>
                        </Link>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        {info.name}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.zip}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.state}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.city}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.address}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.tel}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.area_name}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.area_code}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.brand_name}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.station}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.sort}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {info.business_hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Show;
