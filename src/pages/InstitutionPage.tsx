import { ScrollArea } from '@/components/ui/scroll-area';
import InstituteInfo from '@/componentsMain/InstituteInfo';
import Navbar from '@/componentsMain/Navbar';
import SideBar from '@/componentsMain/SideBar';
import WhatsHappening from '@/componentsMain/Trending';
import YouMightLike from '@/componentsMain/YouMightLike';
import { useEffect, useState } from 'react';

export default function InstitutionPage() {
    const [scrollAreaHeight, setScrollAreaHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const navbarHeight = 64;
            const windowHeight = window.innerHeight;
            setScrollAreaHeight(windowHeight - navbarHeight);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex ">
                <SideBar />
                <div className="w-full">
                    <ScrollArea className="w-full overflow-y-auto" style={{ height: scrollAreaHeight }}>
                        <div className="flex w-full gap-10 m-5">
                            <InstituteInfo />
                            <div className="">
                                <div className="sticky -top-48">
                                    <YouMightLike />
                                    <WhatsHappening />
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
