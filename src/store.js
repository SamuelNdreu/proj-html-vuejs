import { reactive } from "vue";

export const store = reactive({
    NavBarItems : [
        {
            title : 'home',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'about',
            dropdownItems:['item1', 'item2', 'item3']
        },
        { 
            title : 'service',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'Blog',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'Contact',
            dropdownItems:['item1', 'item2', 'item5']
        },
        {
            title : 'PortFolio',
            dropdownItems:['item1', 'item2', 'item5']
        },
    ]
})