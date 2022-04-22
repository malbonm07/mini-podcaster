import React from 'react'
import { Outlet } from "react-router-dom";

function PodcastDetailsView() {
  return (
    <div>
      <div>PodcastDetailsView</div>
      <Outlet />
    </div>
  )
}

export default PodcastDetailsView