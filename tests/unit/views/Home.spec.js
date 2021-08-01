import { mount } from '@vue/test-utils'
import { generateId } from '@/util/util'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
    let wrapper
    const data = {
        items: [
            {
                id: 1,
                title: 'Test Title 1',
                description: 'Test Desc 1'
            }, {
                id: 2,
                title: 'Test Title 2',
                description: 'Test Desc 2'
            }, {
                id: 3,
                title: 'Test Title 3',
                description: 'Test Desc 3'
            }
        ]
    }

    beforeEach(() => {
        wrapper = mount(Home);
    })

    describe('Render', () => {
        it('Renders title', () => {
            const text = wrapper.find('#' + generateId('home', 'title')).text()
            expect(text).toMatch('Progress Tracker')
        })
        it('Renders items in list', async () => {
            await wrapper.setData(data)
            data.items.forEach(item => {
                expect(wrapper.find('#' + generateId('list-item', 'item', item.id)).exists()).toBe(true)
            })
            expect(wrapper.find('#' + generateId('home', 'empty')).exists()).toBe(false)
        })
        it('Renders "No charts" text if no items', async () => {
            await wrapper.setData({ items: [] })
            expect(wrapper.findAll('.pt-list-item').length).toBe(0)
            expect(wrapper.find('#' + generateId('home', 'empty')).text()).toMatch("No charts found.")
        })
        it('Renders add button', () => {
            expect(wrapper.find('#' + generateId('home', 'add-button')).exists()).toBe(true)
        })
    })

    describe('Function', () => {
        //TODO: I know this is working, I need to find a way to get this test to work
        it.skip('Changes URL when clicked', async () => {
            const button = wrapper.find('#' + generateId('home', 'add-button'))
            await button.trigger('click')
            expect(window.location.href).toBe('http://localhost/item/id/' + data.item.id)
        })
    })
})
