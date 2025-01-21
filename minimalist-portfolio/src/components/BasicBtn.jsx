import { NavLink } from "react-router-dom"

function BasicBtn({ text, to }) {
  return (
    <NavLink to={to} className="border-2 border-cusGrayDarkBlue text-center leading-[44px] uppercase px-10 text-cusGrayDarkBlue hover:bg-cusGrayDarkBlue hover:text-cusVeryLightGrey h-12 transition-all inline-block">
        {text}
    </NavLink>
  )
}

export default BasicBtn