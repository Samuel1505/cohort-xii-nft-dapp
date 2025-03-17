import { Outlet } from "react-router-dom"
import Header from "./Header"


const WalletLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default WalletLayout