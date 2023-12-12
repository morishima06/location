import { LuSearch } from 'react-icons/lu';

const MobileForm = ({ keywords }) => {
  return (
    <div className="flex w-full items-center overflow-auto px-2">
      <div className="pr-2">
        <LuSearch />
      </div>
      {!keywords.keyword && !keywords.brand && !keywords.address.name && (
        <div className="w-full">
          <p className="text-sm">キーワード•条件を指定する</p>
        </div>
      )}

      <div className="flex items-center">
        {keywords.keyword && (
          <div className=" mr-1 shrink-0 " style={{ fontSize: '0' }}>
            <p className="mb-0.5 w-16 text-xs font-semibold text-black">
              キーワード
            </p>
            <p className=" inline-block  bg-black px-1 py-0.5 text-xs  font-semibold leading-none text-white">
              {keywords.keyword}
            </p>
          </div>
        )}

        {keywords.brand && (
          <div className="mr-1 shrink-0" style={{ fontSize: '0' }}>
            <p className="mb-0.5 text-xs font-semibold text-black">ブランド</p>
            <p className="alig leading inline-block bg-black px-1 text-xs font-semibold text-white">
              {keywords.brand}
            </p>
          </div>
        )}

        {keywords.address.name && (
          <div className="shrink-0" style={{ fontSize: '0' }}>
            <p className="mb-0.5 text-xs font-semibold text-black">エリア</p>
            <p className="inline-block bg-black px-1 py-0.5 text-xs font-semibold leading-none text-white">
              {keywords.address.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MobileForm;
