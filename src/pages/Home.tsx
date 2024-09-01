import Navbar from '@/componentsMain/Navbar'
import Posts from '@/componentsMain/Posts'
import SideBar from '@/componentsMain/SideBar'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="flex w-full">
                <div className=''>
                    <SideBar />
                </div>
                <div className='ml-10'>
                    <Posts />
                </div>
            </div>
        </div>
    )
}
