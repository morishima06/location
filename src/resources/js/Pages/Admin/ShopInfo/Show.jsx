import Header from '@/Components/organisms/Header';
import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Dropdown from '@/Components/atoms/Dropdown';
import ResponsiveNavLink from '@/Components/atoms/ResponsiveNavLink';

const Show = (props) => {
  const { shopInfo } = props;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <>
      <Header />
      <Head title="店舗一覧" />

      <nav className="border-b border-gray-100  bg-white  ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center"></div>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative ml-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                      >
                        <svg
                          className="-mr-0.5 ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('dashboard')}>
                      ダッシュボード
                    </Dropdown.Link>
                    <Dropdown.Link href={route('profile.edit')}>
                      プロフィール
                    </Dropdown.Link>
                    <Dropdown.Link href={route('ShopInfo.show')}>
                      店舗一覧
                    </Dropdown.Link>
                    <Dropdown.Link href={route('ShopInfo.create')}>
                      店舗作成
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route('logout')}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState,
                  )
                }
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
          }
        >
          <div className="space-y-1 pb-3 pt-2">
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Dashboard
            </ResponsiveNavLink>
          </div>

          <div className="border-t border-gray-200 pb-1 pt-4">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800"></div>
              <div className="text-sm font-medium text-gray-500"></div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route('profile.edit')}>
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink href={route('ShopInfo.show')}>
                店舗一覧
              </ResponsiveNavLink>
              <ResponsiveNavLink href={route('ShopInfo.create')}>
                店舗作成
              </ResponsiveNavLink>
              <ResponsiveNavLink
                method="post"
                href={route('logout')}
                as="button"
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

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
