const number = {
  digit: "+88 1928968789",
};
function ContactNumber({hidden}) {
  return (
    <div className={`flex items-center ${hidden} justify-center bg-[#222] text-white my-[130px]`}>
      <h1 className="text-4xl px-78 py-[96px] text-center">Call uS :{number.digit}</h1>
    </div>
  );
}

export default ContactNumber;
