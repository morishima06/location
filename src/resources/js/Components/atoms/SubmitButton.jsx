const SubmitButton = ({ handleSubmit }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center"
        id="form1"
      >
        <button
          type="submit"
          className=" block  h-[40px]  w-full  cursor-pointer py-2 text-sm font-semibold text-white sm:h-[45px]"
        >
          {' '}
          検索
        </button>
      </form>
    </>
  );
};
export default SubmitButton;
