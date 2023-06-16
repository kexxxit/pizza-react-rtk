import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={270}
        height={412}
        viewBox="0 0 270 412"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="272" rx="5" ry="5" width="110" height="26"/>
        <circle cx="134" cy="132" r="132"/>
        <rect x="0" y="310" rx="5" ry="5" width="266" height="32"/>
        <rect x="146" y="371" rx="19" ry="19" width="121" height="39"/>
        <rect x="0" y="373" rx="5" ry="5" width="96" height="31"/>
    </ContentLoader>
)

export default MyLoader