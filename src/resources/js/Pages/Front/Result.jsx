import MainLayout from '@/Layouts/MainLayput';
import SearchContent from '@/Components/templates/SearchContent';
import { Head } from '@inertiajs/react';
const Result = (props) => {
  const { keywords, brands, prefuctures, info } = props;

  const { keyword, brand, address } = keywords;

  const title = `「${keyword ? ' ' + keyword : ''}${brand ? ' ' + brand : ''}${
    address.name ? ' ' + address.name : ''
  }」検索結果`;

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <SearchContent
        brands={brands}
        prefuctures={prefuctures}
        keywords={keywords}
        info={info}
      />
    </MainLayout>
  );
};
export default Result;
