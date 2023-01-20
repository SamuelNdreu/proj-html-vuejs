import { reactive } from "vue";
export const store = reactive({
    NavBarItems: [
        {
            title: 'home',
            dropdownItems: ['item1', 'item2', 'item3']
        },
        {
            title: 'about',
            dropdownItems: ['item1', 'item2', 'item3']
        },
        {
            title: 'service',
            dropdownItems: ['item1', 'item2', 'item3']
        },
        {
            title: 'Blog',
            dropdownItems: ['item1', 'item2', 'item3']
        },
        {
            title: 'Contact',
            dropdownItems: ['item1', 'item2', 'item5']
        },
        {
            title: 'PortFolio',
            dropdownItems: ['item1', 'item2', 'item5']
        },
    ],
    CarouselItems: [
        {
            slide1: '8wa60okr-1-790x576.jpg'
        },

        {
            slide2: '84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg'
        },

        {
            slide3: 'a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg'
        },
    ]
})