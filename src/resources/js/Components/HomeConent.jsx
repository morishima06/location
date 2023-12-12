// import { useEffect, useRef, useState } from 'react';
// import { router } from '@inertiajs/react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useCookies } from 'react-cookie';
// import TopContent from './organisms/TopContent';

// const HomeContent = ({ brands, form_address }) => {
//   const [values, setValues] = useState({
//     keyword: '',
//     brand: '',
//     address: '',
//   });
//   console.log(values);

//   // キーワードフォームに関する処理
//   const [cookies, setCookie, removeCookie] = useCookies();
//   const [adKeyword, setAdKeyword] = useState('');
//   const [KeywordFormActive, setKeywordFormActive] = useState(false);
//   const keyword_ref1 = useRef(null);
//   const keyword_ref2 = useRef(null);

//   function handleKeywordForm(e) {
//     const key = e.target.id;
//     const value = e.target.getAttribute('data-name');

//     setValues((values) => ({
//       ...values,
//       [key]: value,
//     }));

//     setAdKeyword(value);
//     setKeywordFormActive(false);
//   }

//   function handleKeyword(e) {
//     const key = e.target.id;
//     const value = e.target.value;
//     console.log(key);
//     setAdKeyword(value);

//     setValues((values) => ({
//       ...values,
//       [key]: value,
//     }));

//     console.log(values);
//   }

//   function openKeywordModal(event) {
//     setKeywordFormActive(!KeywordFormActive);
//     setIsBrandActive(false);
//     setIsAddressActive(false);
//     document.addEventListener('click', closeKeywordModal);
//     event.stopPropagation();
//   }

//   const closeKeywordModal = () => {
//     setKeywordFormActive(false);
//     document.removeEventListener('click', closeKeywordModal);
//   };

//   useEffect(() => {
//     if (KeywordFormActive === true) {
//       keyword_ref2.current.focus();
//     }
//   }, [KeywordFormActive]);

//   const clearKeyword = () => {
//     setAdKeyword('');
//     setValues((values) => ({
//       ...values,
//       ['keyword']: '',
//     }));
//   };

//   function handleKeywordFocus(e) {
//     if (e.target.value !== '') {
//       setKeywordFormActive(true);

//       let search_word = e.target.value;
//       var regexp = new RegExp(search_word, 'i');

//       const selectedBrandNames = brands.filter((v) => {
//         return v.name.match(regexp);
//       });
//       setBrandNames(selectedBrandNames);
//     }
//   }

//   function clearCookie() {
//     removeCookie('name');
//   }

//   const keyRef = useRef(null);

//   //ブランドフォーム関する処理
//   const [brandNames, setBrandNames] = useState(brands);
//   const brand_ref1 = useRef(null);
//   const brand_ref2 = useRef(null);
//   const [adBrand, setAdBrand] = useState('');

//   const [isBrandActive, setIsBrandActive] = useState(false);

//   function openBrandModal(event) {
//     setIsBrandActive(!isBrandActive);
//     setKeywordFormActive(false);
//     setIsAddressActive(false);

//     document.addEventListener('click', closeBrandModal);
//     event.stopPropagation();
//   }

//   const closeBrandModal = () => {
//     setIsBrandActive(false);
//     document.removeEventListener('click', closeBrandModal);
//   };

//   useEffect(() => {
//     if (isBrandActive === true) {
//       brand_ref2.current.focus();
//     }
//   }, [isBrandActive]);

//   const clearBrand = () => {
//     setAdBrand('');

//     setValues((values) => ({
//       ...values,
//       ['brand']: '',
//     }));
//   };

//   function handleBrandForm(e) {
//     const key = e.target.id;
//     const value = e.target.getAttribute('data-name');
//     console.log(222);

//     setValues((values) => ({
//       ...values,
//       [key]: value,
//     }));
//     console.log(value);

//     setAdBrand(value);

//     setIsBrandActive(false);
//     console.log(isBrandActive);
//   }

//   function handleBrand(e) {
//     const key = e.target.id;
//     const value = e.target.value;
//     console.log(key);
//     setAdBrand(value);

//     setValues((values) => ({
//       ...values,
//       [key]: value,
//     }));

//     let search_word = e.target.value;
//     var regexp = new RegExp(search_word, 'i');

//     const selectedBrandNames = brands.filter((v) => {
//       return v.name.match(regexp);
//     });
//     setBrandNames(selectedBrandNames);
//     console.log(values);
//   }

//   function handleBrandFocus(e) {
//     if (e.target.value !== '') {
//       setIsBrandActive(true);
//       console.log(9);

//       let search_word = e.target.value;
//       var regexp = new RegExp(search_word, 'i');

//       const selectedBrandNames = brands.filter((v) => {
//         return v.name.match(regexp);
//       });
//       setBrandNames(selectedBrandNames);
//     }
//   }

//   //addressフォームに関する処理

//   const [adValue, setAdValue] = useState('');
//   const addressRef = useRef(null);
//   const [isOpen, setIsOpen] = useState({ 0: false });
//   const handleAddressForm2 = (index) => {
//     console.log(index);
//     setIsOpen((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const clearAddress = () => {
//     setValues((values) => ({
//       ...values,
//       ['address']: '',
//     }));
//     setAdValue('');
//   };

//   const [isAddressActive, setIsAddressActive] = useState(false);

//   function openAddressModal(event) {
//     setIsAddressActive(!isAddressActive);
//     setKeywordFormActive(false);
//     setIsBrandActive(false);

//     document.addEventListener('click', closeAddressModal);
//     event.stopPropagation();
//   }

//   const closeAddressModal = () => {
//     setIsAddressActive(false);

//     document.removeEventListener('click', closeAddressModal);
//   };

//   const handleAddressFormIN = (e) => {
//     const value = e.target.getAttribute('data-adname');
//     const code = e.target.getAttribute('data-ad_code');
//     const key = e.target.id;

//     setValues((values) => ({
//       ...values,
//       [key]: code,
//     }));

//     setAdValue(value);
//     setIsAddressActive(false);
//   };
//   // 検索時に関する処理
//   function handleSubmit(e) {
//     e.preventDefault();
//     const val = keyword_ref2.current.value;

//     if (cookies.name == undefined) {
//       const value = [val];

//       setCookie('name', value);
//     } else {
//       const values = [...cookies.name, val];
//       setCookie('name', values);
//     }
//     router.get('/search', values);
//   }
//   console.log(999)

//   return (
//     <div className="w-full max-w-[1280px] bg-[url('./images/center_03.jpg')] bg-no-repeat bg-center  h-[400px] sm:h-[437px] flex items-center justify-center   ">
//       <div className="w-full sm:max-w-[800px] px-1 sm:px-0 ">
//         <TopContent />
//         <div className="    w-full  flex justify-center pb-3 pt-2 sm:pt-4">
//           <div className=" sm:flex   justify-center sm:h-[45px] w-full ">
//             {/* キーワード */}
//             <div
//               className=" sm:relative w-full sm:w-1/3  mb-1 sm:mb-0 h-[40px] sm:h-[45px] rounded-lg sm:rounded-r-none flex items-center bg-white overflow-hidden sm:overflow-visible"
//               onClick={(event) => {
//                 openKeywordModal(event);
//               }}
//             >
//               <div className=" w-full  flex items-center  ">
//                 <div className="flex items-center w-full ">
//                   <div className="w-full pl-4">
//                     <input
//                       form="form1"
//                       id="keyword"
//                       name="keyword"
//                       readOnly
//                       placeholder="店舗名・キーワード"
//                       value={adKeyword}
//                       ref={keyword_ref1}
//                       className="font-semibold leading-none block outline-0 text-sm  placeholder:justify-center placeholder-slate-400 placeholder:font-semibold"
//                     />
//                   </div>
//                 </div>

//                 <div className="  ml-auto mr-2">
//                   {adKeyword && (
//                     <img
//                       src="./images/button.svg"
//                       alt=""
//                       className="w-5 cursor-pointer "
//                       onClick={(event) => {
//                         clearKeyword();
//                         event.stopPropagation();
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* キーワード表示 */}
//                 <div
//                   className="left-0 pb-1 fixed sm:absolute w-full h-screen sm:h-auto bg-white top-0 sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
//                   onClick={(event) => {
//                     event.stopPropagation();
//                   }}
//                   style={
//                     KeywordFormActive
//                       ? { display: 'block' }
//                       : { visibility: 'hidden' }
//                   }
//                 >
//                   <div className="">
//                     <div className="w-full flex justify-end sm:hidden  ">
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setKeywordFormActive(false);
//                         }}
//                         className="flex justify-center rounded-sm items-center h-6 w-6 hover:bg-slate-300 mr-1 mt-2"
//                       >
//                         <AiOutlineClose />
//                       </button>
//                     </div>
//                     <div className="flex items-center  h-[46px]">
//                       <input
//                         form="form1"
//                         id="keyword"
//                         type=" block"
//                         placeholder="店舗名・キーワード"
//                         autoComplete="off"
//                         className="block w-full px-4   outline-0 text-lg sm:text-sm font-semibold placeholder:text-slate-400"
//                         value={adKeyword}
//                         ref={keyword_ref2}
//                         onFocus={handleKeywordFocus}
//                         onChange={handleKeyword}
//                       />
//                     </div>
//                     {!cookies.name && (
//                       <div className="border-b sm:hidden"></div>
//                     )}

//                     {cookies.name && (
//                       <div>
//                         <div className="border-b"></div>
//                         <div>
//                           {cookies.name &&
//                             cookies.name.map((v) => (
//                               <p
//                                 className="bg-white hover:bg-slate-100 text-slate-800 text-sm cursor-pointer px-4 font-semibold py-2 "
//                                 id="keyword"
//                                 data-name={v}
//                                 onClick={handleKeywordForm}
                                
//                               >
//                                 {v}
//                               </p>
//                             ))}
//                         </div>
//                         <button
//                           type="button"
//                           className="pl-4 text-xs text-blue-600 cursor-pointer"
//                           onClick={clearCookie}
//                         >
//                           すべててクリア
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ブランド */}
//             <div
//               className="sm:relative w-full sm:w-1/3  mb-1 sm:mb-0 h-[40px] sm:h-[45px] rounded-lg sm:rounded-none flex items-center bg-white overflow-hidden sm:overflow-visible"
//               onClick={(event) => {
//                 openBrandModal(event);
//               }}
//             >
//               <div className="w-[1px] bg-slate-300 h-[calc(100%-16px)]  hidden sm:block"></div>
//               <div className=" w-full  flex items-center  ">
//                 <div className="flex items-center w-full pl-4">
//                   <div className="w-full">
//                     <input
//                       form="form1"
//                       id="brand"
//                       name="brand"
//                       readOnly
//                       placeholder="ブランド名"
//                       value={adBrand}
//                       ref={brand_ref1}
//                       className=" leading-none block outline-0 font-semibold text-sm placeholder:justify-center placeholder-slate-400 placeholder:font-semibold"
//                     />
//                   </div>
//                 </div>

//                 <div className="  ml-auto mr-2">
//                   {adBrand && (
//                     <img
//                       src="./images/button.svg"
//                       alt=""
//                       className="w-5 cursor-pointer "
//                       onClick={(event) => {
//                         clearBrand();
//                         event.stopPropagation();
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* ブランド表示 */}
//                 <div
//                   className="sm:mt-0 pb-1 left-0 overflow-hidden fixed sm:absolute w-full h-screen sm:h-auto bg-white top-0 sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
//                   onClick={(event) => {
//                     event.stopPropagation();
//                   }}
//                   style={
//                     isBrandActive
//                       ? { display: 'block' }
//                       : { visibility: 'hidden' }
//                   }
//                 >
//                   <div className="mr-1">
//                     <div className="w-full flex justify-end sm:hidden ">
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setIsBrandActive(false);
//                         }}
//                         className="flex justify-center rounded-sm items-center h-6 w-6 hover:bg-slate-300 mr-1 mt-2"
//                       >
//                         <AiOutlineClose />
//                       </button>
//                     </div>
//                     <div className="h-[46px] flex items-center">
//                       <input
//                         form="form1"
//                         id="brand"
//                         type=" block"
//                         placeholder="ブランド名"
//                         autoComplete="off"
//                         className="block w-full px-4 outline-0 text-lg sm:text-sm font-semibold placeholder-slate-400"
//                         value={adBrand}
//                         ref={brand_ref2}
//                         onFocus={handleBrandFocus}
//                         onChange={handleBrand}
//                       />
//                     </div>
//                     {brandNames.length > 0 && (
//                       <div>
//                         <div className="border-b"></div>

//                         {brandNames.map((v) => (
//                           <p
//                             className="bg-white hover:bg-slate-100 text-slate-800 text-sm cursor-pointer px-4 font-semibold py-2 "
//                             id="brand"
//                             data-name={v.name}
//                             onClick={handleBrandForm}
//                           >
//                             {v.name}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* エリア */}
//             <div
//               className="sm:relative w-full sm:w-1/3  mb-1 sm:mb-0 h-[40px] sm:h-[45px] rounded-lg sm:rounded-none flex items-center bg-white overflow-hidden sm:overflow-visible"
//               onClick={(event) => {
//                 openAddressModal(event);
//               }}
//             >
//               <div className="w-[1px] bg-slate-300 h-[calc(100%-16px)]  hidden sm:block"></div>
//               <div className=" w-full  flex items-center  ">
//                 <div className="flex items-center w-full pl-4">
//                   <div className="w-full">
//                     <input
//                       form="form1"
//                       id="address"
//                       readOnly
//                       className="block outline-0 text-sm placeholder-slate-400 font-semibold placeholder:font-semibold "
//                       name="address"
//                       value={adValue}
//                       ref={addressRef}
//                       placeholder="都道府県"
//                     />
//                   </div>
//                 </div>

//                 <div className="  ml-auto mr-2">
//                   {adValue && (
//                     <img
//                       src="./images/button.svg"
//                       alt=""
//                       className="w-5 cursor-pointer "
//                       onClick={(event) => {
//                         clearAddress();
//                         event.stopPropagation();
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* エリア表示 */}
//                 <div
//                   className="sm:mt-12 pb-1 left-0 overflow-hidden fixed sm:absolute w-full h-screen sm:h-auto bg-white top-0 sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
//                   onClick={(event) => {
//                     event.stopPropagation();
//                   }}
//                   style={
//                     isAddressActive
//                       ? { display: 'block' }
//                       : { visibility: 'hidden' }
//                   }
//                 >
//                   <div className="mr-1">
//                     <div className="w-full flex justify-end sm:hidden ">
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setIsAddressActive(false);
//                         }}
//                         className="flex justify-center rounded-sm items-center h-6 w-6 hover:bg-slate-300 mr-1 mt-2"
//                       >
//                         <AiOutlineClose />
//                       </button>
//                     </div>

//                     <p className="w-full flex justify-center pb-2 font-semibold border-b drop-shadow-sm border-slate-100 mb-2 sm:my-2">
//                       エリア一覧
//                     </p>
//                     {Object.keys(form_address).map((key, index) => (
//                       <>
//                         <div
//                           className="flex items-center  hover:bg-slate-100 cursor-pointer "
//                           data-state_code={form_address[key].state_code}
//                         >
//                           <div
//                             className=" flex hover:text-blue-500 py-1 pl-3 text-[15px]"
//                             onClick={handleAddressFormIN}
//                           >
//                             <p
//                               id="address"
//                               className="pr-[2px]"
//                               data-adname={form_address[key].state}
//                               data-ad_code={form_address[key].state_code}
//                             >
//                               {form_address[key].state}
//                               {'('}
//                               {form_address[key].count}
//                               {')'}
//                             </p>
//                           </div>
//                           <div
//                             className="flex grow justify-end pr-4"
//                             onClick={() => handleAddressForm2(index)}
//                           >
//                             <span className="  ">+</span>
//                           </div>
//                         </div>

//                         {isOpen[index] ? (
//                           <div className="py-[2px] ">
//                             {isOpen[index]
//                               ? form_address[key]['area'].map((k, index) => (
//                                   <>
//                                     <div
//                                       className=" hover:text-blue-500 cursor-pointer pl-3 py-[2px] text-[12px]   "
//                                       onClick={handleAddressFormIN}
//                                     >
//                                       <p
//                                         id="address"
//                                         data-adname={k.name}
//                                         data-ad_code={k.area_code}
//                                         className="pr-[3px]"
//                                       >
//                                         {k.name}
//                                         {'('}
//                                         {k.count}
//                                         {')'}
//                                       </p>
//                                     </div>
//                                   </>
//                                 ))
//                               : undefined}
//                           </div>
//                         ) : undefined}
//                       </>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="  sm:w-16 rounded-lg  mt-1 sm:mt-0 sm:rounded-l-none flex items-center bg-blue-700 px-3   sm:mr-0 ">
//               <form
//                 onSubmit={handleSubmit}
//                 className="w-full flex justify-center"
//                 id="form1"
//               >
//                 <button
//                   type="submit"
//                   className=" py-2  w-full  text-sm  block text-white cursor-pointer font-semibold h-[40px] sm:h-[45px]"
//                 >
//                   {' '}
//                   検索
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomeContent;
