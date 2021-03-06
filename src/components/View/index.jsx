import React from "react"
import PropTypes from "prop-types"
// import styles from "./view.module.css"

const View = ({ title, children }) => (
    <div className=" view-login w-full bg-gray-100 rounded px-8 pt-6 pb-8 mb-4" >
      <div className="w-1/3 "></div>
      <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 md:mx-24 lg:mx-64">
        <h1 className="flex justify-center text-lg font-bold justify-center ">{title}</h1>

        <div className="flex-col flex justify-center" style={{flexDirection:"column"}}>
          {children}
        </div>
      </div>
      <div className="w-1/3"></div>
    </div>
)

View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View
