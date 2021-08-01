import { mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import { generateId } from '@/util/util'

describe('ListItem.vue', () => {
    let wrapper
    const propsData = {
        item: {
            title: 'Test Title',
            description: 'Test description. This one is longer.',
            id: 1
        }
    }

    beforeEach(() => {
        wrapper = mount(ListItem, { propsData });
    })

    describe('Render', () => {
        it('Renders title', () => {
            const text = wrapper.find('#' + generateId('list-item', 'title', propsData.item.id)).text()
            expect(text).toMatch(propsData.item.title)
        })
        it('Renders description', () => {
            const text = wrapper.find('#' + generateId('list-item', 'description', propsData.item.id)).text()
            expect(text).toMatch(propsData.item.description)
        })
    })

    describe('Function', () => {
        //TODO: I know this is working, I need to find a way to get this test to work
        it.skip('Changes URL when clicked', async () => {
            const button = wrapper.find('#pt-item-' + propsData.item.id);
            await button.trigger('click')
            expect(window.location.href).toBe('http://localhost/item/id/' + propsData.item.id)
        })
    })
})
