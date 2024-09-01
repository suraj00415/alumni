import Navbar from '@/componentsMain/Navbar'
import Posts from '@/componentsMain/Posts'
import SideBar from '@/componentsMain/SideBar'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="flex overflow-hidden">
                <SideBar />
                <div className='ml-10'>
                    <Posts />
                </div>
            </div>
        </div>
    )
}
