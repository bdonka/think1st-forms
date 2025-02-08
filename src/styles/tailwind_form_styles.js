const formStyles = {
  container: "bg-[#F0EAF8] min-h-screen flex flex-col items-center py-10",
  form: "w-full max-w-lg p-8",
  heading: "text-2xl font-medium text-[#000853] mb-6",
  fieldContainer: "mb-4",
  label: "block text-base font-normal text-[#000853]",
  input: "mt-1 w-full px-4 py-2 text-[#000853] border rounded-md focus:ring-2 focus:ring-[#CBB6E5] focus:outline-none",
  inputCalendar: "appearance-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8A4FFF] focus:outline-none text-gray-700 bg-white shadow-sm cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-datetime-edit]:pr-2",
  inputError: "border-[#ED4545] text-[#000853] focus:ring-[#ED4545] bg-[#FEECEC]",
  button: "w-full mt-4 px-4 py-2 bg-[#8A4FFF] text-white font-semibold rounded-md hover:bg-[#6F3FFF] disabled:bg-[#D1C4E9]",
  closeBtn: "relative w-5 h-5 flex items-center justify-center before:content-['✕'] before:absolute before:w-5 before:h-5 before:pt-0.5 before:rounded-full before:bg-[#000853] before:text-white before:flex before:items-center before:justify-center before:text-xs before:font-bold before:leading-none before:tracking-wider hover:before:bg-[#ED4545]",

  uploadContainer: "flex flex-col items-center justify-center p-8 border-2 rounded-md cursor-pointer bg-white hover:border-[#8A4FFF] break-all",
  file: "text-base font-medium text-[#000853] inline-flex items-center gap-2",

  selectedTime: "px-3 py-1 rounded-md bg-[#8A4FFF] text-white",
  timeContainer: "flex flex-col md:flex-row gap-4 items-start",
  hour: "bg-white text-[#000853] border-[#8A4FFF]",
  hourButton: "mb-2 mr-2 px-4 py-2 border-2 rounded-md",
  selectedHour: "bg-white border-gray-300 hover:border-[#8A4FFF]",



  rangeWrapper: "flex items-center relative w-full pt-8 pb-8 rounded-lg",
  rangeMinLimit: "text-xs font-normal text-[#1a1a50] absolute top-3 left-1",
  rangeMaxLimit: "text-xs font-normal text-[#1a1a50] absolute top-3 right-0",
  rangeInput: `
  flex-1 appearance-none h-1.5 bg-purple-300 rounded-md outline-none transition duration-300
  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
  [&::-webkit-slider-thumb]:bg-purple-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
  [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-purple-700 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer
  `,
  valueIndicator: `
  absolute top-[45px] bg-white text-purple-700 font-medium px-2 py-1 rounded-md text-sm border border-purple-300 -translate-x-2
  `,
  valueTriangle: `
  absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-0 h-0
  border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-white
  `,

  calendarContainer: "bg-white p-4 rounded-xl shadow-md border border-[#EDE6F5]",
  calendar: "bg-white p-4 rounded-xl shadow-md border border-[#EDE6F5]",
  calendarTile: "text-[#1F1B3C] text-base rounded-full p-2 transition hover:bg-[#EDE6F5]",
  calendarActiveTile: "bg-[#8A4FFF] text-white font-bold",
  calendarButton: "text-[#8A4FFF] hover:bg-[#EDE6F5] rounded-lg p-2 transition",
  holidayOrSunday: "text-[#898DA9]",

  checkbox: "w-4 h-4 sm:w-5 sm:h-5",

  validationMessage: "relative text-sm text-[#000853] mt-1 ml-6 [&:not(:empty)]:before:content-['!'] [&:not(:empty)]:before:absolute [&:not(:empty)]:before:-left-6 [&:not(:empty)]:before:mt-0.5 [&:not(:empty)]:before:w-4 [&:not(:empty)]:before:h-4 [&:not(:empty)]:before:rounded-full [&:not(:empty)]:before:border [&:not(:empty)]:before:border-red-500 [&:not(:empty)]:before:flex [&:not(:empty)]:before:items-center [&:not(:empty)]:before:justify-center [&:not(:empty)]:before:text-xs [&:not(:empty)]:before:font-bold [&:not(:empty)]:before:bg-red-500 [&:not(:empty)]:before:text-[#F0EAF8] [&:not(:empty)]:before:pt-0.5 (:empty)]:before:pl-px",

  uploadPhotoText: "flex",
  mobileNone: "hidden sm:block text-[#898DA9] text-base ml-1",
  holidayInfo: "relative text-[#000853] text-sm  ml-6 [&:not(:empty)]:before:content-['i'] [&:not(:empty)]:before:absolute [&:not(:empty)]:before:-left-6 [&:not(:empty)]:before:mt-0.5 [&:not(:empty)]:before:w-4 [&:not(:empty)]:before:h-4 [&:not(:empty)]:before:rounded-full [&:not(:empty)]:before:border [&:not(:empty)]:before:border-[#CBB6E5] [&:not(:empty)]:before:flex [&:not(:empty)]:before:items-center [&:not(:empty)]:before:justify-center [&:not(:empty)]:before:text-xs [&:not(:empty)]:before:font-bold [&:not(:empty)]:before:bg-[#CBB6E5] [&:not(:empty)]:before:text-[#F0EAF8] [&:not(:empty)]:before:pt-0.5 (:empty)]:before:pl-px",
  underline: "text-[#761BE4]",
};



export default formStyles;